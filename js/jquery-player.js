(function ($) {
$(document).ready(function () {

const $currectTrack = $('.player__current-track');
const $playerAudio = $('.player__audio');
const playerItemClassName = 'player__item';
const $playerItems = $(`.${playerItemClassName}`);
const $playerBtns = $('.player__btn');

$playerBtns.click(function(e) {
    const $this = $(this);

    $(`.${playerItemClassName}--active`).removeClass(`${playerItemClassName}--active`);

    const $playerItem = $this.closest(`.${playerItemClassName}`).addClass(`${playerItemClassName}--active`);

    document.title = $currectTrack.text($playerItem.find('.player__track').text()).text();

    $playerAudio.attr('src', $this.data('src'));

    $playerAudio[0].play();
    });
 });
})(jQuery);