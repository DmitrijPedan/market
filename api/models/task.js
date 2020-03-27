'use strict';

module.exports = (sequelize, DataTypes) => {
	const Task = sequelize.define('Task', {
		userID: DataTypes.INTEGER,
		type: DataTypes.ENUM(['meet', 'call', 'task']),
		name: DataTypes.STRING,
		priority: DataTypes.ENUM(['low', 'medium', 'hight']),
		content: DataTypes.STRING,
		done: DataTypes.BOOLEAN,
	}, {});
	Task.associate = function(models) {
		Task.belongsTo(models.User)
	};
	return Task;
};