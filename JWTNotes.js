// Authentication refers to a system for confirming the identity of a user.
// Authorization refers to a system for determining who has access to what.

/* JWT - JSON web tokens. 
    -Protected endpoints - an endpoint which can only be used by authenticated requests. 
    -Login forms - 
    -Base64 encoding - 
    -Basic Auth - 
    -Bearer tokens - 
    -Credentials - 
*/

// Note that you can always research npm packages here https://www.npmjs.com/

// Notes for blogful-api-auth bloc project code-base:


/* Protected Endpoints: */

// First steps? We can create a Services file called token-service.js with this content: 

import config from '../config'

const TokenService = {
  saveAuthToken(token) {
    window.localStorage.setItem(config.TOKEN_KEY, token)
  },
  getAuthToken() {
    return window.localStorage.getItem(config.TOKEN_KEY)
  },
  clearAuthToken() {
    window.localStorage.removeItem(config.TOKEN_KEY)
  },
  hasAuthToken() {
    return !!TokenService.getAuthToken()
  },
  makeBasicAuthToken(userName, password) {
    return window.btoa(`${userName}:${password}`)
  },
}

export default TokenService


// Then we can import this to our login form and call two methods with the input values of user:

import React, { Component } from "react";
import TokenService from "../../services/token-service";
import { Button, Input } from "../Utils/Utils";

export default class LoginForm extends Component {
  static defaultProps = {
    onLoginSuccess: () => {}
  };

  state = { error: null };

  handleSubmitBasicAuth = ev => {
    ev.preventDefault();
    const { user_name, password } = ev.target;
    TokenService.saveAuthToken(
      TokenService.makeBasicAuthToken(user_name.value, password.value)
    );

    user_name.value = "";
    password.value = "";
    this.props.onLoginSuccess();
  };

// This will create the token and store it in local storage in one go. 
// This means that when someone logs in with valid username and password, the encoded value of username and password is stored in local storage 


// TokenService also uses hasAuthToken() to conditionally render components. 

// To send these credentials in an API request, we must do this in the article-api-service.js file and make these changes. This way we are sending the AuthToken we created in localStorage in the header:

+import TokenService from '../services/token-service'
 import config from '../config'

   getArticle(articleId) {
     return fetch(`${config.API_ENDPOINT}/articles/${articleId}`, {
       headers: {
+        'authorization': `basic ${TokenService.getAuthToken()}`,
       },
     })

   getArticleComments(articleId) {
     return fetch(`${config.API_ENDPOINT}/articles/${articleId}/comments`, {
       headers: {
+        'authorization': `basic ${TokenService.getAuthToken()}`,
       },
     })

   postComment(articleId, text) {
     return fetch(`${config.API_ENDPOINT}/comments`, {
       method: 'POST',
       headers: {
         'content-type': 'application/json',
+        'authorization': `basic ${TokenService.getAuthToken()}`,
       },
       body: JSON.stringify({
         article_id: articleId,


// Validating basic auth on the server. From here we use a middleware to connect multiple endpoints. Create a folder and file src/middleware/basic-auth.js and export a function called requireAuth:

function requireAuth(req, res, next) {
  console.log('requireAuth')
  console.log(req.get('Authorization'))
  next()
}

module.exports = {
  requireAuth,
}

// We can then connect this middleware to protected endpoints by importing it to articles-router.js:


const express = require('express')
const ArticlesService = require('./articles-service')
+ const { requireAuth } = require('../middleware/basic-auth')

const articlesRouter = express.Router()

...

articlesRouter
  .route('/:article_id')
+   .all(requireAuth)
  .all(checkArticleExists)
  .get((req, res) => {

...

articlesRouter.route('/:article_id/comments/')
+   .all(requireAuth)
  .all(checkArticleExists)
  .get((req, res, next) => {

// Also add to comments:
const CommentsService = require('./comments-service')
+ const { requireAuth } = require('../middleware/basic-auth')

  const commentsRouter = express.Router()

  ...

  commentsRouter
    .route('/')
-   .post(jsonBodyParser, (req, res, next) => {
+   .post(requireAuth, jsonBodyParser, (req, res, next) => {
      const { article_id, text, user_id } = req.body
      const newComment = { article_id, text, user_id }

  // You should now see the console.log in the TERMINAL window, showing everything is hooked up. This will now affect your tests. Tests should now fail when the auth header is missing. Must create a seperate block of tests for protected endpoints. 

  describe.only(`Protected endpoints`, () => {
    beforeEach('insert articles', () => {
      helpers.seedArticlesTables(
        db,
        testUsers,
        testArticles,
        testComments,
      )
    })
    describe(`GET /api/articles/:article_id`, () => {
      it(`Responds with 401 'Missing basic token' when no basic token`, () => return supertest(app)
      .get(`/api/articles/123`))
      .expect(401, {error: `Missing basic token`})
    })
  })

// This test above will fail, as we have not actually set up the requireAuth function properly. Now we can update:

  function requireAuth(req, res, next) {
       const authToken = req.get('Authorization') || ''
    
       if (!authToken.toLowerCase().startsWith('basic ')) {
         return res.status(401).json({ error: 'Missing basic token' })
       }
    
        next()
      } 

// Now the new test will pass, but the other ones are now failing. To make the remaining tests pass, we must add an authorization header to the tests, but we cannot use window.btoa, we have to use Buffer constructor's from and toString methods, as window.btoa does not exist. 

describe('Articles Endpoints', function() {
  let db

  const {
    testUsers,
    testArticles,
    testComments,
  } = helpers.makeArticlesFixtures()

+ function makeAuthHeader(user) {
+   const token = Buffer.from(`${user.user_name}:${user.password}`).toString('base64')
+   return `Basic ${token}`
+ }

  ...

  context(`Given no articles`, () => {
    it(`responds with 404`, () => {
      const articleId = 123456
      return supertest(app)
        .get(`/api/articles/${articleId}`)
+       .set('Authorization', makeAuthHeader(testUsers[0]))
        .expect(404, { error: `Article doesn't exist` })
    })

  ...

    it('responds with 200 and the specified article', () => {
      const articleId = 2
      const expectedArticle = helpers.makeExpectedArticle(
        testUsers,
        testArticles[articleId - 1],
        testComments,
      )

      return supertest(app)
        .get(`/api/articles/${articleId}`)
+       .set('Authorization', makeAuthHeader(testUsers[0]))
        .expect(200, expectedArticle)
    })

  ...

    it('removes XSS attack content', () => {
      return supertest(app)
        .get(`/api/articles/${maliciousArticle.id}`)
        // use the testUser seeded above
+       .set('Authorization', makeAuthHeader(testUser))
        .expect(200)
        .expect(res => {
          expect(res.body.title).to.eql(expectedArticle.title)
          expect(res.body.content).to.eql(expectedArticle.content)
        })
    })

// We can then add a test where the token is present, but the credentials are missing: 

it(`responds 401 'Unauthorized request' when no credentials in token`, () => {
         const userNoCreds = { user_name: '', password: '' }
         return supertest(app)
           .get(`/api/articles/123`)
           .set('Authorization', makeAuthHeader(userNoCreds))
           .expect(401, { error: `Unauthorized request` })
       })

// However, this test will fail. We have to make it pass by parsing the base64 basic token value out of the header and responding with an error if the username or password aren't present. So we change the requireAuth function

function requireAuth(req, res, next) {
  const authToken = req.get('Authorization') || ''

   let basicToken
 if (!authToken.toLowerCase().startsWith('basic ')) {
   return res.status(401).json({ error: 'Missing basic token' })
   } else {
     basicToken = authToken.slice('basic '.length, authToken.length)
   }

   const [tokenUserName, tokenPassword] = Buffer
     .from(basicToken, 'base64')
     .toString()
     .split(':')

   if (!tokenUserName || !tokenPassword) {
     return res.status(401).json({ error: 'Unauthorized request' })
   }

  next()
}

// Then we should have another test for a user that doesn't exist:

 it(`responds 401 'Unauthorized request' when invalid user`, () => {
      const userInvalidCreds = { user_name: 'user-not', password: 'existy' }
      return supertest(app)
        .get(`/api/articles/1`)
        .set('Authorization', makeAuthHeader(userInvalidCreds))
        .expect(401, { error: `Unauthorized request` })
    })

// To make this test pass, we have to query the database for a matching username and password.  if (!tokenUserName || !tokenPassword) {
    return res.status(401).json({ error: 'Unauthorized request' })
  }

- next()
+ req.app.get('db')('blogful_users')
+   .where({ user_name: tokenUserName })
+   .first()
+   .then(user => {
+     if (!user) {
+       return res.status(401).json({ error: 'Unauthorized request' })
+     }
+
+     next()
+   })
+   .catch(next)
  }

// But doing this now causes 4040 tests to fail, as now 4040 requires a user to exist in the db. So now we must add a beforeEach to see users on that test. 

describe.only(`GET /api/articles/:article_id`, () => {
  context(`Given no articles`, () => {
+     beforeEach(() =>
+       db.into('blogful_users').insert(testUsers)
+     )


// Now we need a test for when the username exists, but the password is wrong: 

it(`responds 401 'Unauthorized request' when invalid password`, () => {
         const userInvalidPass = { user_name: testUsers[0].user_name, password: 'wrong' }
         return supertest(app)
           .get(`/api/articles/1`)
           .set('Authorization', makeAuthHeader(userInvalidPass))
           .expect(401, { error: `Unauthorized request` })
       })

// To make the above test pass, we need to check the password in the requireAuth

req.app.get('db')('blogful_users')
.where({ user_name: tokenUserName })
.first()
.then(user => {
-     if (!user) {
+     if (!user || user.password !== tokenPassword) {
    return res.status(401).json({ error: 'Unauthorized request' })
  }

  next()
})
.catch(next)

// Now we need to apply the same test logic to other protected endpoints, we can achieve this by putting the tests inside a loop, 1 iteration being 1 protected endpoint. 

describe.only(`Protected endpoints`, () => {
  beforeEach('insert articles', () =>
    helpers.seedArticlesTables(
      db,
      testUsers,
      testArticles,
      testComments,
    )
  )

+   const protectedEndpoints = [
+     {
+       name: 'GET /api/articles/:article_id',
+       path: '/api/articles/1'
+     },
+     {
+       name: 'GET /api/articles/:article_id/comments',
+       path: '/api/articles/1/comments'
+     },
+   ]
+
+   protectedEndpoints.forEach(endpoint => {
-     describe(`GET /api/articles/:article_id`, () => {
+     describe(endpoint.name, () => {
      it(`responds 401 'Missing basic token' when no basic token`, () => {
        return supertest(app)
-           .get(`/api/articles/1`)
+           .get(endpoint.path)
          .expect(401, { error: `Missing basic token` })
      })

      it(`responds 401 'Unauthorized request' when no credentials in token`, () => {
        const userNoCreds = { user_name: '', password: '' }
        return supertest(app)
-           .get(`/api/articles/1`)
+           .get(endpoint.path)
          .set('Authorization', makeAuthHeader(userNoCreds))
          .expect(401, { error: `Unauthorized request` })
      })

      it(`responds 401 'Unauthorized request' when invalid user`, () => {
        const userInvalidCreds = { user_name: 'user-not', password: 'existy' }
        return supertest(app)
-           .get(`/api/articles/1`)
+           .get(endpoint.path)
          .set('Authorization', makeAuthHeader(userInvalidCreds))
          .expect(401, { error: `Unauthorized request` })
      })

      it(`responds 401 'Unauthorized request' when invalid password`, () => {
        const userInvalidPass = { user_name: testUsers[0].user_name, password: 'wrong' }
        return supertest(app)
-           .get(`/api/articles/1`)
+           .get(endpoint.path)
          .set('Authorization', makeAuthHeader(userInvalidPass))
          .expect(401, { error: `Unauthorized request` })
      })
    })
+   })

// Now some tests are failing as unauthorized becasue we need to attach the basic auth token to the requests in those tests:

describe(`GET /api/articles/:article_id/comments`, () => {
  context(`Given no articles`, () => {
+     beforeEach(() =>
+       db.into('blogful_users').insert(testUsers)
+     )

    it(`responds with 404`, () => {
      const articleId = 123456
      return supertest(app)
        .get(`/api/articles/${articleId}/comments`)
+         .set('Authorization', makeAuthHeader(testUsers[0]))
        .expect(404, { error: `Article doesn't exist` })
    })

...

    it('responds with 200 and the specified comments', () => {
      const articleId = 1
      const expectedComments = helpers.makeExpectedArticleComments(
        testUsers, articleId, testComments
      )

      return supertest(app)
        .get(`/api/articles/${articleId}/comments`)
+         .set('Authorization', makeAuthHeader(testUsers[0]))
        .expect(200, expectedComments)
    })


/* Data Protection - 
  -Pseudonymised -
  -Bcrypt -
  -Hashing -
  -Encrypting -
  -Logout -
  -Salt  -
  */

  // For logging out, call the TokenService.clearAuthToke() to remove the locally stored auth token and log the user out:

  export default class Header extends Component {
    handleLogoutClick = () => {
    TokenService.clearAuthToken()
    }

    renderLogoutLink() {


// Bcrypt - used to pseudonymise the passwords stored in database - a form of hashing
// Salt - adds extra complexity to passwords. The longer it takes to generate a salt, the more secure the hasing. 

// very secure, takes a long time to generate the salt
const verySecureSaltIterationCount = 16
const strongHash = bcrypt.hash('string-you-want-to-hash', verySecureSaltIterationCount)
// less secure, works much quicker
const lessSecureSaltIterationCount = 4
const weakHash = bcrypt.hash('string-you-want-to-hash', lessSecureSaltIterationCount)

// We can compare a string with the hash we generated  with the compare method:

bcrypt.compare(strongHash, 'string-you-want-to-hash') === true
bcrypt.compare(strongHash, 'foo') === false
bcrypt.compare(strongHash, 'bar') === false

// We can then use bcrypt to store passwords in the database. Then we use the bcrypt compare methods 

// So server side, we need to install bcrypt to use the compare method:

npm i bcryptjs

// Note that a reasonable salt iteration that is both secure and not overtaxing on performance is 10 or 12. 

// Comparing hashed passwords server side - First we need to update test-helpers.js file to change how fixtures are generated. We need to create a new helper for inserting users that automatcially hashes passwords of users for us. 

const bcrypt = require('bcryptjs');

+ const bcrypt = require('bcryptjs')

  function makeUsersArray() {
    return [

...

  function cleanTables(db) {
    // code not shown
  }

+ function seedUsers(db, users) {
+   const preppedUsers = users.map(user => ({
+     ...user,
+     password: bcrypt.hashSync(user.password, 1)
+   }))
+   return db.into('blogful_users').insert(preppedUsers)
+     .then(() =>
+       // update the auto sequence to stay in sync
+       db.raw(
+         `SELECT setval('blogful_users_id_seq', ?)`,
+         [users[users.length - 1].id],
+       )
+     )
+ }

  function seedArticlesTables(db, users, articles, comments=[]) {
    // use a transaction to group the queries and auto rollback on any failure
    return db.transaction(async trx => {
-     await db.into('blogful_users').insert(users)
+     await seedUsers(trx, users)
-     await db.into('blogful_articles').insert(articles)
+     await trx.into('blogful_articles').insert(articles)
      // update the auto sequence to match the forced id values
-     await Promise.all([
-       trx.raw(
-         `SELECT setval('blogful_users_id_seq', ?)`,
-         [users[users.length - 1].id],
-       ),
-       trx.raw(
-         `SELECT setval('blogful_articles_id_seq', ?)`,
-         [articles[articles.length - 1].id],
-       ),
-     ])
+     await trx.raw(
+       `SELECT setval('blogful_articles_id_seq', ?)`,
+       [articles[articles.length - 1].id],
+     )
      // only insert comments if there are some, also update the sequence counter
  }

  function seedMaliciousArticle(db, user, article) {
-   return db
-     .into('blogful_users')
-     .insert([user])
+   return seedUsers(db, [user])
      .then(() =>
        db
          .into('blogful_articles')
          .insert([article])
      )
  }

...

  module.exports = {
    makeUsersArray,
    makeArticlesArray,
    makeExpectedArticle,
    makeExpectedArticleComments,
    makeMaliciousArticle,
    makeCommentsArray,

    makeArticlesFixtures,
    cleanTables,
    seedArticlesTables,
    seedMaliciousArticle,
    makeAuthHeader,
+   seedUsers,
  }

// Change basic-auth.js:
+ const bcrypt = require('bcryptjs')
  const AuthService = require('../auth/auth-service')

...

    AuthService.getUserWithUserName(
      req.app.get('db'),
      tokenUserName
    )
     .then(user => {
-      if (!user || user.password !== tokenPassword) {
+      if (!user) {
         return res.status(401).json({ error: 'Unauthorized request' })
       }

-      req.user = user
-      next()
+      return bcrypt.compare(tokenPassword, user.password)
+        .then(passwordsMatch => {
+          if (!passwordsMatch) {
+            return res.status(401).json({ error: 'Unauthorized request' })
+          }
+
+          req.user = user
+          next()
+        })
     })
     .catch(next)
 }

 // Secure Login... 
 // JSON Web Tokens - When a user sends a log in request to the server, the server checks the credentials, if valid, creates a JWT that is sent back to the client to be stored in local storage. When the logged in user then makes any requests (such as posting a comment), they send the request with the JWT in the header. When the server receives that request via a protected endpoint, the server compares the JWT to their records, if it matches, they accept the request. 

 /*  JWT - Made of 3 parts: header, payload, and signature. 
  -Header - describes how the JWT was created, what type of token and the algorithm used. 
  -Payload - Contains the info that's requested, such as user_id, length of time JWT is valid, users's full profile, permissions that a user has with the ser, name of server that issued the token, ect. This info is often called "claims"
  -Signature - used to verify that the JWT hasn't been changed. A secret is used to create the token and the signature is created using this secret. 
  */

  // To handle this, we should create a POST request to a /api/auth/login endpoint. If credentials are valid, we can respond with a JWT. Note that a JWT only represents credentials, it doesn't actualyl contain the username or password. The client wil then save the JWT in local storage. 

  //First we will make an auth endpoint: ./src/auth/auth-router.js with basic content:

  const express = require('express');
  const authRouter = express.Router();

  authRouter
    .post('/login', (req, res, next) => {
      res.send('Ok');
    })

module.exports = authRouter;

// Add to your app:

const authRouter = require('./auth/auth-router');

app.use('/api/auth', authRouter);

// Note that with error messages pertaining to usernames and passwords, you don't want to mention if it's the username or pass that's invalid, as this could help hackers guess what's correct. Keep error messages vague.


const express = require('express')
const AuthService = require('./auth-service')

  const authRouter = express.Router()
  const jsonBodyParser = express.json()

  authRouter
    .post('/login', jsonBodyParser, (req, res, next) => {
      const { user_name, password } = req.body
      const loginUser = { user_name, password }

      for (const [key, value] of Object.entries(loginUser))
        if (value == null)
          return res.status(400).json({
            error: `Missing '${key}' in request body`
          })

     AuthService.getUserWithUserName(
       req.app.get('db'),
       loginUser.user_name
     )
       .then(dbUser => {
         if (!dbUser)
           return res.status(400).json({
             error: 'Incorrect user_name or password',
           })

         res.send('ok')
       })
       .catch(next)
  })

// ./src/auth/auth-service.js:

const bcrypt = require('bcryptjs')

 const AuthService = {
   getUserWithUserName(db, user_name) {
     return db('blogful_users')
       .where({ user_name })
       .first()
   },
  comparePasswords(password, hash) {
    return bcrypt.compare(password, hash)
  },
   parseBasicToken(token) { // Unclear what's here

   // We can then update auth-router.js to use AuthService:

   const express = require('express')
const AuthService = require('./auth-service')

  const authRouter = express.Router()
  const jsonBodyParser = express.json()

  authRouter
    .post('/login', jsonBodyParser, (req, res, next) => {
      const { user_name, password } = req.body
      const loginUser = { user_name, password }

      for (const [key, value] of Object.entries(loginUser))
        if (value == null)
          return res.status(400).json({
            error: `Missing '${key}' in request body`
          })

     AuthService.getUserWithUserName(
       req.app.get('db'),
       loginUser.user_name
     )
       .then(dbUser => {
         if (!dbUser)
           return res.status(400).json({
             error: 'Incorrect user_name or password',
           })

           return AuthService.comparePasswords(loginUser.password, dbUser.password)
                   .then(compareMatch => {
                     if (!compareMatch)
                       return res.status(400).json({
                         error: 'Incorrect user_name or password',
                       })
          
                       res.send('ok')
                   })
       })
       .catch(next)
  })

  // To create the JWT, use a library called jsonwebtoken, install:

  npm install jsonwebtoken

  // We'll need to create the JWT and send it in the response body. First we can add the following to ./src/config.js:

  module.exports = {
    PORT: process.env.PORT || 8000,
    NODE_ENV: process.env.NODE_ENV || 'development',
    DB_URL: process.env.DB_URL || 'postgresql://dunder_mifflin@localhost/blogful-auth',
+   JWT_SECRET: process.env.JWT_SECRET || 'change-this-secret',
  }

// Then add this to .env:
JWT_SECRET="my-own-special-jwt-secret"

// Then we can add a method to the auth-service.js file for creating JWTs:

const bcrypt = require('bcryptjs')
 const jwt = require('jsonwebtoken')
 const config = require('../config')
 const AuthService = {
   getUserWithUserName(db, user_name) {
     return db('blogful_users')
       .where({ user_name })
       .first()
   },
   comparePasswords(password, hash) {
     return bcrypt.compare(password, hash)
   },
   createJwt(subject, payload) {
     return jwt.sign(payload, config.JWT_SECRET, {
       subject,
       algorithm: 'HS256',
     })
   },


   // Then the last step is to send this back in the response in auth-router.js


  authRouter
  .post('/login', jsonBodyParser, (req, res, next) => {
    const { user_name, password } = req.body
    const loginUser = { user_name, password }

    for (const [key, value] of Object.entries(loginUser))
      if (value == null)
        return res.status(400).json({
          error: `Missing '${key}' in request body`
        })

   AuthService.getUserWithUserName(
     req.app.get('db'),
     loginUser.user_name
   )
     .then(dbUser => {
       if (!dbUser)
         return res.status(400).json({
           error: 'Incorrect user_name or password',
         })

         return AuthService.comparePasswords(loginUser.password, dbUser.password)
                 .then(compareMatch => {
                   if (!compareMatch)
                     return res.status(400).json({
                       error: 'Incorrect user_name or password',
                     })
        
                    //  res.send('ok')
                    const sub = dbUser.user_name
                               const payload = { user_id: dbUser.id }
                               res.send({
                                 authToken: AuthService.createJwt(sub, payload),
                               })
                 })
     })
     .catch(next)
})

// Now we must make use of the auth endpoint with a new auth-api-service.js where we can POST request for log in:

import config from '../config'

const AuthApiService = {
  postLogin(credentials) {
    return fetch(`${config.API_ENDPOINT}/auth/login`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(credentials),
    })
      .then(res =>
        (!res.ok)
          ? res.json().then(e => Promise.reject(e))
          : res.json()
      )
  },
}

export default AuthApiService

// We can then update LoginForm.js to use the auth service: 
import TokenService from '../../services/token-service'
import AuthApiService from '../../services/auth-api-service'
import { Button, Input } from '../Utils/Utils'

    user_name.value = ''
    password.value = ''
    this.props.onLoginSuccess()
  }

 handleSubmitJwtAuth = ev => {
   ev.preventDefault()
   this.setState({ error: null })
   const { user_name, password } = ev.target
  AuthApiService.postLogin({
    user_name: user_name.value,
    password: password.value,
  })
    .then(res => {
      user_name.value = ''
      password.value = ''
      TokenService.saveAuthToken(res.authToken)
      this.props.onLoginSuccess()
    })
    .catch(res => {
      this.setState({ error: res.error })
    })
}

  render() {
    const { error } = this.state
    return (
      <form
        className='LoginForm'
       onSubmit={this.handleSubmitJwtAuth}
      />
        




  // From here we need to update protected endpoints to expect a JWT from the aut header.Do this by creating another middleware, ./src/middleware/jwt-auth.js.

  function requireAuth(req, res, next){
    return res.status(401).json({ error: 'Missing bearer token' })
    next()
  }

  module.exports = {
    requireAuth
  }

// Session storage - like local storage but the data does not persist ourside the tab session. 
// We can swap out window.localStorage for window.sessionStorage - both objects have the same methods. So the token file can be:

import config from '../config'

const TokenService = {
  saveAuthToken(token) {
-     window.localStorage.setItem(config.TOKEN_KEY, token)
+     window.sessionStorage.setItem(config.TOKEN_KEY, token)
  },
  getAuthToken() {
-     return window.localStorage.getItem(config.TOKEN_KEY)
+     return window.sessionStorage.getItem(config.TOKEN_KEY)
  },
  clearAuthToken() {
-     window.localStorage.removeItem(config.TOKEN_KEY)
+     window.sessionStorage.removeItem(config.TOKEN_KEY)
  },
  hasAuthToken() {
    return !!TokenService.getAuthToken()
  },
  makeBasicAuthToken(userName, password) {
    return window.btoa(`${userName}:${password}`)
  },
}

export default TokenService
  

// This still leaves a problem, as a tab could be left over forever. Instead we must set an expirty time in the JWT payload, and if this has expired, a protected endpoint would not accept it. Start by setting an expirty time in the config.js file:

JWT_EXPIRTY: process.env.JWT_EXPIRY || '20s'

// Then add expiresIn property where the JWT is created in auth-service.js in the jwt.sign method:

createJwt(subject, payload) {
  return jwt.sign(payload, config.JWT_SECRET, {
    subject,
+     expiresIn: config.JWT_EXPIRY,
    algorithm: 'HS256',
  })
}

// What if the user wants to stay logged in? Then we need to create a Refresh endpoint that will only check that the request already contains a valid JWT before responding with a new one. However, we have to implement "going idle" meaning that it doesn't refresh if the user isn't using the page. 

document.addEventListener('mousemove', function(event) {
  // cancel old idle timeout
  clearTimeout(_idleTimeoutId)
  // start a new one
  _idleTimeoutId = setTimeout(function() {
    clearTimeout(_refreshTimeoutId)
  }, 50 * 1000)
}, true)