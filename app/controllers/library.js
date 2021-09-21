const uuid = require('uuid');
'use strict';

const logger = require('../utils/logger');
const gameCollection = require('../models/game-collection');

const library = {
  index(request, response) {
    const libraryId = request.params.id;
    logger.debug('library id = ' + libraryId);
    const viewData = {
      title: 'Games Library',
      library: gameCollection.getGames(libraryId),
    };
    response.render('library', viewData);
  },
    deleteGame(request, response) {
    const libraryId = request.params.id;
    const gameId = request.params.gameid;
    logger.debug(`Deleting Game ${gameId} from Library ${libraryId}`);
    gameCollection.deleteGame(libraryId, gameId);
    response.redirect('/library/' + libraryId);
  },
  
    addGame(request, response) {
    const libraryId = request.params.id;
    const library = gameCollection.getGames(libraryId);
    const newGame = {
      id:uuid(),
      title: request.body.title,
      developer: request.body.developer,
      genre: request.body.genre,
    };
    gameCollection.addGame(libraryId, newGame);
    response.redirect('/library/' + libraryId);
  },
};

module.exports = library