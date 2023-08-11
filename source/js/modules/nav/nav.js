const header = document.querySelector('[data-header]');
const navBtn = document.querySelector('[data-nav="button"]');
const nav = document.querySelector('[data-nav="nav"]');
const logo = document.querySelector('[data-logo]');
const phone = document.querySelector('[data-header-phone]');
const overlay = document.querySelector('[data-overlay]');

const initNav = () => {
  navBtn.addEventListener('click', () => {
    header.classList.toggle('light');
    nav.classList.toggle('is-opened');
    logo.classList.toggle('dark');
    phone.classList.toggle('dark');
    overlay.classList.toggle('hidden');
  });
};

export {initNav};
