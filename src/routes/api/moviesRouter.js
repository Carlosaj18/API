const express = require('express');
const router = express.Router();
const moviesController = require('../../controllers/api/moviesController');

router.get('/list', moviesController.list)
router.get('/search', moviesController.search)
router.post('/create', moviesController.create);
router.delete('/delete/:id', moviesController.delete); 


module.exports = router;