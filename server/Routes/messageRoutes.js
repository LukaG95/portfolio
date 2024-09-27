const express = require('express');

const MessageController = require('../Controllers/messageController');
const router = express.Router();

router.post('/sendMessage', MessageController.sendMessage);

module.exports = router;