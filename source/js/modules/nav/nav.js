const header = document.querySelector('[data-header]');
const navBtn = document.querySelector('[data-nav="button"]');
const nav = document.querySelector('[data-nav="nav"]');
const logo = document.querySelector('[data-logo]');
const overlay = document.querySelector('[data-overlay]');

const toggleNav = () => {
  header.classList.toggle('light');
  nav.classList.toggle('is-opened');
  logo.classList.toggle('dark');
  const phones = document.querySelectorAll('[data-header-phone]');
  phones.forEach((phone) => {
    phone.classList.toggle('dark');
  });
  overlay.classList.toggle('is-hidden');
};

const initNav = () => {
  navBtn.addEventListener('click', toggleNav);
  overlay.addEventListener('click', toggleNav);
  nav.addEventListener('click', (evt) => {
    if (evt.target.classList.contains('nav__link')) {
      toggleNav();
    }
  });
};

export {initNav};
