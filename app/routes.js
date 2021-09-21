'use strict';

const express = require('express');
const router = express.Router();
const homepage = require('./controllers/homepage.js');
const dashboard = require('./controllers/dashboard.js');
const about = require('./controllers/about.js');
const library = require('./controllers/library.js');

router.get('/', homepage.index);
router.get('/dashboard', dashboard.index);
router.get('/about', about.index);
router.get('/library/:id', library.index);
router.get('/library/:id/deleteGame/:gameid', library.deleteGame);
router.get('/dashboard/deleteLibrary/:id', dashboard.deleteLibrary);
router.post('/library/:id/addgame',library.addGame);
router.post('/dashboard/addlibrary', dashboard.addLibrary);

module.exports = router;