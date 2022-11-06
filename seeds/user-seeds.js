const { User } = require('../models');

const userData = [
  {
    user_name: 'user 1',
    password: 'ligmajohnson'
  },
  {
    user_name: 'user 2',
    password: 'ligmajohnson'
  },
  {
    user_name: 'user 3',
    password: 'ligmajohnson'
  },
  {
    user_name: 'user 4',
    password: 'ligmajohnson'
  },
  {
    user_name: 'user 5',
    password: 'ligmajohnson'
  },
  {
    user_name: 'user 6',
    password: 'ligmajohnson'
  },
  {
    user_name: 'user 7',
    password: 'ligmajohnson'
  },
  {
    user_name: 'user 8',
    password: 'ligmajohnson'
  },
];

const seedUser = () => User.bulkCreate(userData);

module.exports = seedUser;