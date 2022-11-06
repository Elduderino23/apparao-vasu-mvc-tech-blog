const Blog = require('./Blog');
const Post = require('./Post');
const User = require('./User');

// 
Post.belongsTo(Blog, {
  foreignKey: "blog_id",
  onDelete: "CASCADE",
});
// 
Blog.hasMany(Post, {
  foreignKey: "blog_id"
})
// 
Blog.belongsTo(User, {
  foreignKey: "user_id"
})
// 
User.hasMany(Blog, {
  foreignKey: "user_id"
})
Post.belongsTo(User, {
  foreignKey: "user_id"
})
// 
User.hasMany(Post, {
  foreignKey: "user_id"
});

module.exports = {
  Blog,
  Post,
  User,
};
