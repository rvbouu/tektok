const User = require('./User');
const Post = require('./Post');
const Following = require('./Following');

User.hasMany(Post, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
})

Post.belongsTo(User, {
  foreignKey: 'user_id'
})

User.belongsToMany(User, {
  foreignKey: 'follower',
  onDelete: 'SET NULL',
  through: Following,
  as: 'followers'
})
User.belongsToMany(User, {
  foreignKey: 'followee',
  onDelete: 'SET NULL',
  through: Following,
  as: 'followees'
})

module.exports = { User, Post, Following }