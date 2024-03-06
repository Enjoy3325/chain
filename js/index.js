const scrollLink = document.querySelectorAll('.js-scroll-link');
const privacyBtn = document.querySelectorAll('.js-scroll-top-btn');
const burger = document.getElementById('burger');
const header = document.querySelector('header');
const modal = document.getElementById("myModal");
const btnSend = document.getElementById("myBtn");
const btnClose = document.getElementsByClassName("close")[0];
const inputField = document.querySelectorAll(".footer-form-input");

const handleScrollToTop = (e) => {
  e.preventDefault();
  window.scrollTo({ top: 0, behavior: 'smooth' });
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
    behavior: 'smooth'
  });
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
  const header = document.getElementById('header');
  if (window.scrollY > 80) {
    header.style.backgroundColor = '#fff';
  } else {
    header.style.backgroundColor = 'transparent';
  }
}

window.addEventListener('scroll', changeHeaderColor);


btnSend.onclick = function () {
  modal.style.display = "block";
}

btnClose.onclick = function () {
  modal.style.display = "none";
}


window.onclick = function (e) {
  if (e.target === modal) {
    modal.style.display = "none";
  }
}

window.addEventListener('keydown', function (e) {
  if (e.key === "Escape") {
    modal.style.display = "none";
  }
});

const checkInputFields = function () {
  let allFilled = true;
  inputField.forEach(function (input) {
    if (input.value === '') {
      allFilled = false;
    }
  });

  btnSend.disabled = !allFilled;
};

inputField.forEach(function (input) {
  input.addEventListener('input', checkInputFields);
});


window.onload = function () {
  function getQueryParam(param) {
    var search = window.location.search.substring(1);
    var params = search.split("&");

    for (var i = 0; i < params.length; i++) {
      var pair = params[i].split("=");
      if (pair[0] == param) {
        return decodeURIComponent(pair[1]);
      }
    }
    return null;
  }

  document.getElementById('name').value = getQueryParam('name') || '';
  document.getElementById('lastName').value = getQueryParam('lastName') || '';
  document.getElementById('email').value = getQueryParam('email') || '';
  document.getElementById('message').value = getQueryParam('message') || '';
};

document.querySelector('form').addEventListener('submit', function (e) {
  e.preventDefault();

  this.reset();
});



document.addEventListener("DOMContentLoaded", function () {
  const elements = document.querySelectorAll('.section-terms');
  const windowHeight = window.innerHeight;

  function checkPosition() {
    for (let i = 0; i < elements.length; i++) {
      const element = elements[i];
      const positionFromTop = elements[i].getBoundingClientRect().top;

      if (positionFromTop - windowHeight <= 0) {
        element.classList.add('animated');
      }
    }
  }

  window.addEventListener('scroll', checkPosition);
  checkPosition();
});



