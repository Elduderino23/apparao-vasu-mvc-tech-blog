const Blog = require('./blog');
const Post = require('./post');
const User = require('./user');

// 
Blog.belongsTo(Post, {
  foreignKey: "blog_id",
  onDelete: "CASCADE",
});
// 
Post.hasMany(Blog, {
  foreignKey: "blog_id"
})
// 
Blog.belongsToMany(User, {
  through: ProductTag,
  foreignKey: "blog_id"
})
// 
User.belongsToMany(Blog, {
  through: ProductTag,
  foreignKey: "user_id"
});

module.exports = {
  Blog,
  Post,
  User,
};
