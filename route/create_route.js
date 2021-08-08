const express = require('express');
const postController = require('../controller/create_controller.js');
const router = express.Router();

router.post('/create/author', postController.ceate_obj);
router.post('/create/genre', postController.ceate_obj);
router.post('/create/book', postController.ceate_obj);
router.post('/create/bookinstance', postController.ceate_obj);



module.exports = router;