'use strict';

const _ = require('lodash');
const JsonStore = require('./json-store');

const gameCollection = {
  
gamesLibrary: new JsonStore('./game-collection.json',{gamesLibrary: []}),
collection:'gamesLibrary',

getAllGamesLibrary() {
  return this.gamesLibrary.findAll(this.collection);
},

getLibrary(id) {
  return this.gamesLibrary.findOneBy(this.collection, { id: id });
},

getGames(id) {
  return this.gamesLibrary.findOneBy(this.collection, { id: id });
},

deleteGame(id, gameId) {
  const library = this.getGames(id);
  const games = library.games;
  _.remove(games, {id:gameId});
},
  
deleteLibrary(id) {
  const library = this.getLibrary(id);
  this.gamesLibrary.remove(this.collection,library);
},
  
deleteAllLibrarys(){
  this.gamesLibrary.removeAll(this.collection);
},  

addGame(id, game) {
  const library = this.getGames(id);
  library.games.push(game);
}, 

addLibrary(library) {
  this.gamesLibrary.add(this.collection, library);
},
  
  
};

module.exports = gameCollection;  
  
  
