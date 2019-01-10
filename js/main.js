const currectTrack = document.querySelector('.player__current-track');
const playerAudio = document.querySelector('.player__audio');
const playerItemClassName = 'player__item';
const playerItems = document.getElementsByClassName(playerItemClassName);
const playerBtns = document.getElementsByClassName('player__btn');

for(let i=0; i < playerBtns.length; ++i) {
    const btn = playerBtns.item(i);
    btn.addEventListener('click', function(e) {
        for(let j=0; j < playerItems.length; ++j) {
            playerItems.item(j).classList.remove(`${playerItemClassName}--active`);
        }
       const playerItem = this.parentNode;
       playerItem.classList.add(`${playerItemClassName}--active`);

       currectTrack.innerText = document.title = playerItem.querySelector('.player__track').innerText;
       playerAudio.setAttribute('src', this.dataset.src);
       playerAudio.play();

    });
}