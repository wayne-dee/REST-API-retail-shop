const express = require('express');

const feedControllers = require('../controllers/feed')

const router = express.Router();

// GET /feed/posts
router.get('/posts', feedControllers.getPosts)

module.exports = router;