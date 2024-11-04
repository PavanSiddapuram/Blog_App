import express from 'express';
const router = express.Router();

// Get all posts
router.get('/', async (req, res) => {
  try {
    // TODO: Implement get all posts
    res.status(200).json({ posts: [] });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Create new post
router.post('/', async (req, res) => {
  try {
    // TODO: Implement create post
    res.status(201).json({ message: 'Post created successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

export { router };