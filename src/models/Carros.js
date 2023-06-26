const express = require('express')
const path = require('path')

const Sequelize = require('sequelize');

const sequelize = new Sequelize({
    dialect: "sqlite",
    storage:path.resolve(__dirname, '..', '..', 'carros.sqlite')
})

const Carros = sequelize.define('Carros', {
	id:{
		type:Sequelize.DataTypes.INTEGER,
		autoIncrement: true,
		primaryKey: true,
	},
	modelo:{
		type:Sequelize.DataTypes.STRING(120),
		allowNull: false,
	},
    marca:{
        type:Sequelize.DataTypes.STRING(120),
        allowNull: false
    },
    valor:{
        type:Sequelize.DataTypes.DECIMAL(2),
        allowNull: false
    }
})

Carros.sync()

module.exports = Carros