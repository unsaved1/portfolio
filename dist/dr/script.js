'use strict';

const player = document.querySelector('audio'),
      btn = document.querySelector('#player-btn');


btn.addEventListener('click', () => {
    player.play();
})

