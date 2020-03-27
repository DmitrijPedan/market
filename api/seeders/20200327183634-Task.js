'use strict';
const faker = require('faker');

const tasks = [...new Array(50)].map(() => {
  return {
    userID: 5,
    type: 'meet',
    name: faker.lorem.word(),
    priority: 'medium',
    content: faker.lorem.words(),
    createdAt: new Date(),
    updatedAt: new Date(), 
  }
})

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Tasks', tasks, {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Tasks', null, {});
  }
};
