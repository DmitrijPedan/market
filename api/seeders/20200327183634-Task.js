'use strict';
const faker = require('faker');
const types = ['meet', 'call', 'task'];
const prioritys = ['low', 'medium', 'hight'];
const getRandomValue = (min, max) =>  Math.floor(Math.random()*(max - min + 1) + min);

const tasks = [...new Array(50)].map(() => {
  return {
    userid: getRandomValue(1, 50),
    type: types[Math.floor(Math.random() * types.length)],
    name: faker.lorem.word(),
    priority: prioritys[Math.floor(Math.random() * prioritys.length)],
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
