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

User.hasMany(Following, {
  foreignKey: 'followed_users',
  onDelete: 'CASCADE'
})

Following.belongsTo(User, {
  foreignKey: 'followed_users'
})

module.exports = { User, Post, Following }