
//linking all data of users, following and followers and dummy data for first posts.
const sequelize = require('../config/connection');
const { User, Post, Relations } = require('../models');

const userData = require('./userData.json');
const postData = require('./postData.json');
const relationsData = require('./relationsData.json')

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

  await Relations.bulkCreate(relationsData)

  process.exit(0);
};

seedDatabase();

