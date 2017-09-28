'use strict';

let headerEl = document.querySelector('.header');
let logoEl = document.querySelector('.logo--lg');

function showSmallHeader() {}

function showLargeHeader() {}

// intersection observer
let options = {
  threshold: 0
};

function onObserver(entries, observer) {
  entries.forEach(entry => {
    if (!entry.isIntersecting) {
      showSmallHeader();
    } else {
      showLargeHeader();
    }
  });
}

window.addEventListener('load', function(event) {
  let observer = new IntersectionObserver(onObserver, options);
  observer.observe(headerEl);
}, false);