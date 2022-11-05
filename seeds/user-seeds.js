const { User } = require('../models');

const userData = [
  {
    user_name: 'user 1',
  },
  {
    user_name: 'user 2',
  },
  {
    user_name: 'user 3',
  },
  {
    user_name: 'user 4',
  },
  {
    user_name: 'user 5',
  },
  {
    user_name: 'user 6',
  },
  {
    user_name: 'user 7',
  },
  {
    user_name: 'user 8',
  },
];

const seedUser = () => User.bulkCreate(userData);

module.exports = seedUser;