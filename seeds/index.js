const sequelize = require('../config/connection');
const seedBlog = require('./blog-seeds');
const seedPost = require('./post-seeds');
const seedUser = require('./user-seeds');


const seedAll = async () => {
  await sequelize.sync({ force: true });
  console.log('\n----- DATABASE SYNCED -----\n');
   await seedUser();
  console.log('\n----- USER SEEDED -----\n');
  
  await seedBlog();
  console.log('\n----- BLOG SEEDED -----\n');

  await seedPost();
  console.log('\n----- POST SEEDED -----\n');

 

  process.exit(0);
};

seedAll();