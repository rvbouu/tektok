const sequelize = require('../config/connection');
const { User, Post, Following } = require('../models');

const userData = require('./userData.json');
const postData = require('./postData.json');
const followingData = require('./followingData.json')

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  const users = await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });

  for (const posts of postData) {
    await Post.create({
      ...posts,
      user_id: users[Math.floor(Math.random() * users.length)].id,
    });
  }

  await Following.bulkCreate(followingData)

  process.exit(0);
};

seedDatabase();

// NEED TO REVISE WITH TEKTOK STUFF