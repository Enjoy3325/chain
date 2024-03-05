const scrollLink = document.querySelectorAll('.js-scroll-link');
const privacyBtn = document.querySelectorAll('.js-scroll-top-btn');
const burger = document.getElementById('burger');
const header = document.querySelector('header');

const handleScrollToTop = (e) => {
  e.preventDefault();
  window.scrollTo({top: 0, behavior: 'smooth'});
  header.classList.remove('open');
};

document.addEventListener('DOMContentLoaded', () => {

  burger.addEventListener('click', () => {
    header.classList.toggle('open');
  });
});

const scrollToSection = (sectionId) => {
  document.querySelector(sectionId).scrollIntoView({
    top: `sectionId + 20px`,
    behavior: 'smooth'});
};

function handleLinkClick(e) {
  e.preventDefault();
  const sectionId = this.getAttribute('href');
  scrollToSection(sectionId);
  header.classList.remove('open');
}

scrollLink.forEach(function (link) {
  link.addEventListener('click', handleLinkClick);
});

privacyBtn.forEach(function (link) {
  link.addEventListener('click', handleScrollToTop);
});

window.onscroll = function () {
  changeHeaderColor();
};

function changeHeaderColor() {
  let header = document.getElementById('header');
  if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
    header.style.backgroundColor = '#fff';
  } else {
    header.style.backgroundColor = 'transparent';
  }
}
