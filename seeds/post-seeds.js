const { Post } = require('../models');

const postData = [
  {
    post: 'Text',
    user_id: 6,
    blog_id: 4
  },
  {
    post: 'Text 2',
    user_id: 6,
    blog_id: 4
  },
  {
    post:'Text 3',
    user_id: 6,
    blog_id: 4
  },
  {
    post:'Text 4',
    user_id: 6,
    blog_id: 4
  },
  {
    post: 'Text 5',
    user_id: 6,
    blog_id: 4
  },
];

const seedPost = () => Post.bulkCreate(postData);

module.exports = seedPost;