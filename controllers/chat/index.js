const router = require('express').Router();

module.exports = (io) => {
  router.post('/message', (req, res) => {
    const { message } = req.body;
    // Broadcast message
    io.emit('chat message', message);
    res.status(200).json({status: 'Socket.IO connected', message});
  });

  return router;
}