// import important parts of sequelize library
const { Model, DataTypes } = require('sequelize');
// import our database connection from config.js
const sequelize = require('../config/connection');
const Category = require('./Category');

// Initialize Product model (table) by extending off Sequelize's Model class
class Product extends Model {}

// set up fields and rules for Product model
Product.init(
  { // Define columns
    id:{
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    product_name:{
      type: DataTypes.STRING,
      allowNull: false,
    },
    price:{
      type: DataTypes.DECIMAL(10,2),
      allowNull: false,
      validate:{
        isPrice: true,
      }
    },
    stock:{
      type: DataTypes.INTEGER,
      allowNull: false,
      //Is this how we set a Default value of 10? 
      defaultValue: (10), //Need to Double check!
      validate:{
        isNumberic: true,
      }
    },
    category_id: {
      type: DataTypes.INTEGER,
      references:{
        model:'category',
        key:'id',
      },
    },
  //Review Activity 21-23 to see which case scenario you can use. 
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'product',
  }
);

module.exports = Product;
