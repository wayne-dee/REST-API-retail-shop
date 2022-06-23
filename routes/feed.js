const express = require('express');

const feedControllers = require('../controllers/feed')

const router = express.Router();

// GET /feed/posts
router.get('/posts', feedControllers.getPosts);

router.post('/post', feedControllers.createPost);

module.exports = router;