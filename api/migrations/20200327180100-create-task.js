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
      userid: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      type: {
        allowNull: false,
        type: Sequelize.ENUM, 
        values: ['meet', 'call', 'task']
      },
      name: {
        allowNull: false,
        type: Sequelize.STRING, 
      },
      priority: {
        type: Sequelize.ENUM, 
        values: ['low', 'medium', 'hight'],
        defaultValue: 'medium',
      },
      content: {
        allowNull: false,
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