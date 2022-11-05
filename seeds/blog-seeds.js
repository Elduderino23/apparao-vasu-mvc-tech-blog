const { Blog } = require('../models');

const categoryData = [
  {
    blog_name: '1',
  },
  {
    blog_name: '2',
  },
  {
    blog_name: '3',
  },
  {
    blog_name: '4',
  },
  {
    blog_name: '5',
  },
];

const seedBlog = () => Blog.bulkCreate(blogData);

module.exports = seedBlog;