const seedBlog = require('./blog-seeds');
const seedPost = require('./post-seeds');
const seedUser = require('./user-seeds');

const sequelize = require('../config/connection');

const seedAll = async () => {
  await sequelize.sync({ force: true });
  console.log('\n----- DATABASE SYNCED -----\n');
  await seedBlog();
  console.log('\n----- CATEGORIES SEEDED -----\n');

  await seedPost();
  console.log('\n----- PRODUCTS SEEDED -----\n');

  await seedUser();
  console.log('\n----- TAGS SEEDED -----\n');

  process.exit(0);
};

seedAll();