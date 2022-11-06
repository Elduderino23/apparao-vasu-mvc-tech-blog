const { Blog } = require('../models');

const blogData = [
  {
    blog_name: 'user',
    blog: 'dear diary',
    user_id: 1 
  },
  {
    blog_name: 'user',
    blog: 'dear diary',
    user_id: 1 
  },
  {
    blog_name: 'user',
    blog: 'dear diary',
    user_id: 1 
  },
  {
    blog_name: 'user',
    blog: 'dear diary',
    user_id: 1 
  },
  {
    blog_name: 'user',
    blog: 'dear diary',
    user_id: 1 
  },
];

const seedBlog = () => Blog.bulkCreate(blogData);

module.exports = seedBlog;