'use strict';

const logger = require('../utils/logger');

const homepage = {
  index(request, response) {
    logger.info('start rendering');

    const viewData = {
      title: 'Welcome to this Games Library App!',
    };
    
 
    response.render('homepage', viewData);
  },
};

module.exports = homepage;