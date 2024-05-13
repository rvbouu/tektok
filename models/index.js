const User = require('./User');
const Post = require('./Post');
const Relations = require('./Relations');

User.hasMany(Post, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
})

Post.belongsTo(User, {
  foreignKey: 'user_id'
})

User.belongsToMany(User, {
  foreignKey: 'following',
  onDelete: 'SET NULL',
  through: Relations,
  as: 'followers'
})
User.belongsToMany(User, {
  foreignKey: 'follower',
  onDelete: 'SET NULL',
  through: Relations,
  as: 'following'
})

module.exports = { User, Post, Relations }