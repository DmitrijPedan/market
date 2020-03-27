'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Tasks', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      userID: {
        type: Sequelize.INTEGER, 
      },
      type: {
        type: Sequelize.ENUM, 
        values: ['meet', 'call', 'task']
      },
      name: {
        type: Sequelize.STRING, 
      },
      priority: {
        type: Sequelize.ENUM, 
        values: ['low', 'medium', 'hight']
      },
      content: {
        type: Sequelize.STRING, 
      },
      done: {
        type: Sequelize.BOOLEAN,
        defaultValue: false
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Tasks');
  }
};