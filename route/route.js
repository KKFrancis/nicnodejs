const express = require('express');
const createController = require('../controller/create_controller.js');
const authorController = require('../controller/author_controller.js');
const bookController = require('../controller/book_controller.js');
const genreController = require('../controller/genre_controller.js');
const bookInstanceController = require('../controller/bookinstance_controller.js');
const router = express.Router();

router.post('/create/author', createController.ceate_obj);
router.post('/create/genre', createController.ceate_obj);
router.post('/create/book', createController.ceate_obj);
router.post('/create/bookinstance', createController.ceate_obj);
router.get('/get/author', authorController.all_author);
router.get('/get/book', bookController.all_books);
router.get('/get/genre', genreController.all_genre);
router.get('/get/bookinstance', bookInstanceController.all_bookinstances);
router.get('/get/author/:id', authorController.get_author);
router.get('/get/book/:id', bookController.get_book);
router.get('/get/bookinstance/:id', bookInstanceController.get_bookinstance);
router.get('/get/genre/:id', genreController.get_genre);
router.put('/update/author/:id', authorController.update_author);
router.put('/update/book/:id', bookController.update_book);
router.put('/update/genre/:id', genreController.update_genre);
router.put('/update/bookinstance/:id', bookInstanceController.update_bookinstance);
router.delete('/delete/author/:id', authorController.delete_author);
router.delete('/delete/book/:id', bookController.delete_book);
router.delete('/delete/genre/:id', genreController.delete_genre);
router.delete('/delete/bookinstance/:id', bookInstanceController.delete_bookinstance);


module.exports = router;