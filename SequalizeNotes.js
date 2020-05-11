// Sequalize - (Use case is with Express.js). 
// Models - folder used for database logic. 
// source: https://sequelize.org/master/manual/migrations.html

import { string } from "prop-types"
import { toUnicode } from "punycode"
import { userInfo } from "os"

// Creating a model (and migration) - Once the db connection is configured (see source for details), we can use the model:generate command to create a model. It requires two options:
  // name - the name of the model
  // attributes - the list of model attributes

// Ex of creating a model called User (unclear if non-spacing is required in below creation):

npx sequelize-cli model:generate --name User --attributes firstName:string,lastName:string,email:string

// This command will create a model file in the models folder named user. This will also create a migration file like xxxxxxxxxxxx-create-user.js (where the xs are a date stamp). 

// The below command actually runs the migration. This will automatically createa a table called SequelizeMeta in the database which records which migrations have run on the databawse. This way, you can tell which migrations have been run by checking this table. 

npx sequelize-cli db:migrate

// From our above example where we created the model, the above command will create a table called Users, with all of the columns as specificed in its migration file. 

// db:migrate:undo - command to undo a migration, will revert to the most recent migration:

npx sequelize-cli db:migrate:undo

// db:migrate:undo:all - You can undo all migrations with this command, or you can revert back to a specific migration with the below:

npx sequelize-cli db:migrate:undo:all --to XXXXXXXXXXXXXX-create-posts.js

// Undo all:

npx sequelize-cli db:migrate:undo

// to create a seed file, this commnand will generate a file in the seeders folder. The below command would create a seed file named something like xxxxxxxxxxxx-demo-user.js, and will contain the same up/down semantics as the migration file. 

npx sequelize-cli seed:generate --name demo-userInfo

// Ex of seed file: 

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Users', [{
      firstName: 'John',
      lastName: 'Doe',
      email: 'example@example.com',
      createdAt: new Date(),
      updatedAt: new Date()
    }]);
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Users', null, {});
  }
};

// To run the seed file:

npx sequelize-cli db:seed:all

// To undo the most recent seeding:

npx sequelize-cli db:seed:undo

// Undo a specific seed:

npx sequelize-cli db:seed:undo --seed name-of-seed-as-in-data

// Undo all seeding: 

npx sequelize-cli db:seed:undo:all

// To create a migration file only, use the migration:generate

npx sequelize-cli migration:generate --name migration-name

// From inside the created migration file, the queryInterface object is how we modify the database. 

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Person', {
      name: Sequelize.DataTypes.STRING,
      isBetaMember: {
        type: Sequelize.DataTypes.BOOLEAN,
        defaultValue: false,
        allowNull: false
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Person');
  }
};

// Ex of using the .transaction method that is automatically managed to ensure instructions are successfully executed or rolled back in case of failure. 

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.sequelize.transaction(t => {
      return Promise.all([
        queryInterface.addColumn('Person', 'petName', {
          type: Sequelize.DataTypes.STRING
        }, { transaction: t }),
        queryInterface.addColumn('Person', 'favoriteColor', {
          type: Sequelize.DataTypes.STRING,
        }, { transaction: t })
      ]);
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.sequelize.transaction(t => {
      return Promise.all([
        queryInterface.removeColumn('Person', 'petName', { transaction: t }),
        queryInterface.removeColumn('Person', 'favoriteColor', { transaction: t })
      ]);
    });
  }
};