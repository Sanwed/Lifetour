const playBtn = document.querySelector('[data-video-play]');
const video = document.querySelector('[data-video]');
const preview = document.querySelector('[data-preview]');

const initVideo = () => {
  playBtn.addEventListener('click', () => {
    preview.classList.add('is-hidden');
    playBtn.classList.add('is-hidden');
    video.src = 'https://www.youtube.com/embed/9TZXsZItgdw?controls=0&autoplay=1';
  });
};

const disableVideo = () => {
  preview.classList.remove('is-hidden');
  playBtn.classList.remove('is-hidden');
  video.src = '';
};

export {initVideo, disableVideo};
