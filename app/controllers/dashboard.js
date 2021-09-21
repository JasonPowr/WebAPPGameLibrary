const uuid = require('uuid');
'use strict';

const logger = require('../utils/logger');
const gameCollection = require('../models/game-collection.js');

const dashboard = {
  index(request, response){
    logger.info('dashboard rendering');
    
    const viewData = {
      title: 'Games Library App Dashboard',
      librarys: gameCollection.getAllGamesLibrary(),
    };
    logger.info('about to render', viewData.librarys);
    response.render('dashboard', viewData);
  },
  
  deleteLibrary(request, response){
    const libraryid = request.params.id;
    logger.debug(`Deleting Library `+libraryid);
    gameCollection.deleteLibrary(libraryid);
    response.redirect('/dashboard');
  },
  
    addLibrary(request, response) {
    const newLibrary = {
      id: uuid(),
      title: request.body.title,
      games: [],
    };
    gameCollection.addLibrary(newLibrary);
    response.redirect('/dashboard');
  },
};

module.exports = dashboard;
  