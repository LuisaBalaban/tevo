var express = require('express')
const router = express.Router()
const startControllers = require('../controllers/start.controller')


router.post('/start',startControllers.startListening);
