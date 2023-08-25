const playBtn = document.querySelector('[data-audio-play]');
const audio = document.querySelector('[data-audio]');

const initAudio = () => {
  playBtn.addEventListener('click', () => {
    if (audio.paused) {
      audio.play();
    } else {
      audio.pause();
    }
  });
};

const pauseAudio = () => {
  audio.pause();
};

export {initAudio, pauseAudio};
