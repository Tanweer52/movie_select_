const express = require('express');
const router = express.Router();
const axios = require('axios');

// Fetch movies from OMDB API
router.get('/', async (req, res) => {
  try {
    const response = await axios.get('http://www.omdbapi.com/', {
      params: {
        apikey: 'd0584653', // Replace with your actual OMDB API key
        s: 'Avengers', // Example search query
      },
    });
    res.json({ movies: response.data.Search });
  } catch (error) {
    console.error('Fetch movies error:', error);
    res.status(500).json({ message: 'Failed to fetch movies' });
  }
});

// Fetch movie details from OMDB API by ID
router.get('/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const response = await axios.get('http://www.omdbapi.com/', {
      params: {
        apikey: 'yd0584653', // Replace with your actual OMDB API key
        i: id,
      },
    });
    res.json({ movie: response.data });
  } catch (error) {
    console.error('Fetch movie error:', error);
    res.status(500).json({ message: 'Failed to fetch movie details' });
  }
});

module.exports = router;
