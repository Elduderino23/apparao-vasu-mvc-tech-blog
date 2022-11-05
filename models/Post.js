const { Model, DataTypes } = require('sequelize');
const { Post } = require('.');
// 
const sequelize = require('../config/connection');

// 
class Post extends Model {}

// 
Post.init(
  {
    // define columns
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    post_name: {
      type: DataTypes.STRING,
      foreignKey: 'user',
      allowNull: false
    },
  },
  {
    sequelize,
    timestamps: true,
    freezeTableName: true,
    underscored: true,
    modelName: 'post',
  }
);

module.exports = Post;