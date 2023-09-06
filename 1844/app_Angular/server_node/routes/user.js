const express = require('express')

const UserController =require('../controllers/user')
const router= express.Router()

const path='user'

router.get('/home', UserController.home);
router.get('/test', UserController.test);
router.get('/save-user', UserController.saveUser);
router.get('/user/:id?', UserController.getUser);
router.get('/users', UserController.getUsers);
router.get('/user/:id', UserController.updateUser);
router.get('/user/:id', UserController.deleteUser);

module.exports = router

