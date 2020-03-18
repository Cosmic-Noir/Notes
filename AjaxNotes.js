// AJAX - Asychronous JavaScript and XML 
// fetch API - native JavaScript fecth API, allows you to write JavaScript code that makes asynchronous requests using any of the HTTP methods (GET, POST, PUT DELETE, ect). Pass an argument, which is the URL we want to make a GET request to. Note that fetch only makes GET requests. Ex:

function getDogImage() {
    fetch('https://dog.ceo/api/breeds/image/random')

}

// fetch also can take a secondary argument of setting object: 

function getDogImage() {
    const options = {method: 'GET'};
    fetch('https://dog.ceo/api/breeds/image/random', options)
      .then(response => response.json())
      .then(responseJson => console.log(responseJson));
  }

//   Note that if you're confused about what URL to pass into the arguement, refer to the API docs as taught in a previous lesson. Docs will tell you the endpoint. You must know the URL, endpoint, how you need to format requests, and the kind of response it will return.

// .then() works like a promise, I think. It awaits the finishing of another function and then acts wit those results. Note that to make GET requests you must use .then() and promises. You must use .then(response.json()); that returns a promise itself, followed by another .then() that will carry out the task you want the block to enact on the resulting data. Note that .then() blocks run when a request has been successful.

// .catch() method is for when a request fails, such as when the internet is out or something else goes wrong. .catch() blocks run when a request has been unsuccesful. 

function getDogImage() {
    fetch('https://dog.ceo/api/breeds/image/random')
      .then(response => response.json())
      .then(responseJson => console.log(responseJson))
      .catch(error => alert('Something went wrong. Try again later.'));
  }

//   You can then use this data to cause things to appear on your page such as this example that GETs a random dog image, then inserts the href info of the image into an img element:

fetch('https://dog.ceo/api/breeds/image/random')
.then(response => response.json())
.then(responseJson => 
  displayResults(responseJson))
.catch(error => alert('Something went wrong. Try again later.'));
}

function displayResults(responseJson) {
console.log(responseJson);
//replace the existing image with the new one
$('.results-img').replaceWith(
`<img src="${responseJson.message}" class="results-img">`
)
//display the results section
$('.results').removeClass('hidden');
}

function watchForm() {
$('form').submit(event => {
event.preventDefault();
getDogImage();
});
}

$(function() {
console.log('App loaded! Waiting for submit!');
watchForm();
});

/* API Key- Strings that are used to authorize an app. Instructions are usually in the documentation. Should avoid sending API keys as a parameter, and instead send them in the request header.
-Request Headers-
-Query Parameters- modifies the rquest for a particular endpoint by adding more specification.
-Error Handling-
-HTTP Status Codes-
*/

// Request headers. You can create a new header object, store in a variable, and then pass as the second argument in your fetch call. In the below example, we create a new instance of the header class. Per the news site documentation, we must use "X-Api-Key" as the key for our api key. Ex:

const apiKey = 'caea563ac5724a55a56fe09181fd5a43';

function getNews() {
  const url = "https://newsapi.org/v2/everything?q=tesla&language=en";
  
 const options = {
    headers: new Headers({
      "X-Api-Key": apiKey})
  };

  fetch(url, options)
    .then(response => response.json())
    .then(responseJson => console.log(responseJson));
}

$(getNews);

// You can turn .val() from inputs into query parameters by first creating an object that contains your parameters in key/value pairs, then creat an array of the keys with Object.keys(params), and then you can create a string that includes the name of the key and the value as the param, and then join each param with the required & symbol. You can then combine this with the url to make the full url.

function formatQueryParams(params) {
  //create an array of the keys in the "params" object
  const queryItems = Object.keys(params)
    //for each of the keys in that array, create a string with the key and the key's value in the "params" object
    .map(key => `${key}=${params[key]}`)
  //return a string of the keys and values, separated by "&"
  return queryItems.join('&');
}

function getNews(query, maxResults=10) {
  //create the query parameters
  const params = {
    //set the "q" parameter equal to the value the user input
    q: query,
    language: "en",
  };
  //create a string with the original URL and the new parameters
  const queryString = formatQueryParams(params)
  const url = searchURL + '?' + queryString;

//  So for example:

const params = {
  q: "tesla",
  language: "en"
};

const queryItems = Object.keys(params) // [q, language]
    .map(key => `${key}=${params[key]}`) // ['q=tesla', 'language=en']
  return queryItems.join('&'); // 'q=tesla&language=en'

  function getNews(query, maxResults=10) {
    const params = {
      q: query,
      language: "en",
    };
    const queryString = formatQueryParams(params)
    const url = searchURL + '?' + queryString;

// .catch does not "catch" 400 error codes BECAUSE it is still able to connect to the server, so it won't catch that as an error. To combat this, we use response.ok, which if status code is 200, returns true, and if 400, returns false. It can be used like so:  

fetch(url, options)
    .then(response => {
      // the new code starts here
      if (response.ok) {
        return response.json();
      }
      throw new Error(response.statusText);
    })
    .then(responseJson => console.log(responseJson))
    .catch(err => {
      $('#js-error-message').text(`Something went wrong: ${err.message}`);
    });



// Let's say you wanted to return search resutls, adding an li section for each artcile. You could iterate through  the results like so:

function displayResults(responseJson, maxResults) {
  // if there are previous results, remove them
  console.log(responseJson);
  $('#results-list').empty();
  // iterate through the articles array, stopping at the max number of results
  for (let i = 0; i < responseJson.articles.length & i<maxResults ; i++){
    // for each video object in the articles
    //array, add a list item to the results 
    //list with the article title, source, author,
    //description, and image
    $('#results-list').append(
      `<li><h3><a href="${responseJson.articles[i].url}">${responseJson.articles[i].title}</a></h3>
      <p>${responseJson.articles[i].source.name}</p>
      <p>By ${responseJson.articles[i].author}</p>
      <p>${responseJson.articles[i].description}</p>
      <img src='${responseJson.articles[i].urlToImage}'>
      </li>`
    )};
  //display the results section  
  $('#results').removeClass('hidden');
};

// Example of Youtube API call using a function to format query parameters into usable url code that can be added to the searchURL:

'use strict';

// put your own value below! Used my youtube api key below
const apiKey = 'STUFF'; 
const searchURL = 'https://www.googleapis.com/youtube/v3/search';


function formatQueryParams(params) {
  const queryItems = Object.keys(params)
    .map(key => `${encodeURIComponent(key)}=${encodeURIComponent(params[key])}`)
  return queryItems.join('&');
}


function getYouTubeVideos(query, maxResults=10) {
  const params = {
    key: apiKey,
    q: query,
    part: 'snippet',
    maxResults
  };
  const queryString = formatQueryParams(params)
  const url = searchURL + '?' + queryString;

  fetch(url)
    .then(response => {
      if (response.ok) {
        return response.json();
      }
      throw new Error(response.statusText);
    })
    .then(responseJson => console.log(JSON.stringify(responseJson)))
    .catch(err => {
      $('#js-error-message').text(`Something went wrong: ${err.message}`);
    });
}

function watchForm() {
  $('form').submit(event => {
    event.preventDefault();
    const searchTerm = $('#js-search-term').val();
    const maxResults = $('#js-max-results').val();
    getYouTubeVideos(searchTerm, maxResults);
  });
}

$(watchForm);

// encodeURIComponent() - Method converts strings to URL safe formats by escaping characters like spaces to %20 and other values, connecting the key and value with an = character. 