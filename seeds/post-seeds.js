const { Post } = require('../models');

const postData = [
  {
    post_name: 'Text',
  },
  {
    post_name: 'Text 2',
  },
  {
    post_name: 'Text 3',
  },
  {
    post_name: 'Text 4',
  },
  {
    post_name: 'Text 5',
  },
];

const seedPost = () => Post.bulkCreate(postData);

module.exports = seedPost;