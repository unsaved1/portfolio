'use strict';


document.addEventListener('DOMContentLoaded', () => {
    const tabs = require('./modules/tabs'),
          modal = require('./modules/modal'),
          cards = require('./modules/cards'), 
          forms = require('./modules/forms'), 
          slider = require('./modules/slider'), 
          timer = require('./modules/timer'), 
          calc = require('./modules/calc');
          
    tabs();
    modal();
    cards();
    forms();
    slider();
    timer();
    calc();

});










