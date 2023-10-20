//Para que nos funcionen las rutas
const express = require('express');
const router = express.Router();
const postController = require('../controllers/blogController')

//api/blog
router.post('/', postController.createPost);



module.exports = router;
