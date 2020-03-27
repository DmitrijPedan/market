'use strict';

module.exports = (sequelize, DataTypes) => {
	const User = sequelize.define('User', {
		firstName: DataTypes.STRING,
		lastName: DataTypes.STRING,
		email: DataTypes.STRING,
		password: DataTypes.STRING,
		age: DataTypes.INTEGER.UNSIGNED,
		role: DataTypes.ENUM(['admin', 'user']),
		activeStatus: DataTypes.BOOLEAN,
		}, {
		scopes: {
			hidePersonalData: {
				attributes: {
					exclude: ['password','createdAt','updatedAt']
				}
		},
		activeUsers: {
			where: { activeStatus: true }
		}} 
  	});
	User.associate = function(models) {
		User.hasMany(models.Task);
  	};
  	return User;
};