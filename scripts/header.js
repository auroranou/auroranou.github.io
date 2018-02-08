'use strict';

document.addEventListener('DOMContentLoaded', function () {
  let introWrapper = document.querySelector('h1.intro');
  if (!introWrapper) return;

  let introEl = introWrapper.querySelector('.intro--variable');

  let onMouseEnter = throttle(function () {
    introEl.innerHTML = " a human person just trying her best.";
  }, 500);

  let onMouseLeave = throttle(function () {
    introEl.innerHTML = " a front end developer in Washington, DC."
  }, 500);

  introWrapper.addEventListener('mouseenter', onMouseEnter);
  introWrapper.addEventListener('mouseleave', onMouseLeave);
});

function throttle(func) {
  var wait = arguments.length <= 1 || arguments[1] === undefined ? 100 : arguments[1];

  var timer = null;
  return function () {
    var _this = this;

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    if (timer === null) {
      timer = setTimeout(function () {
        func.apply(_this, args);
        timer = null;
      }, wait);
    }
  };
}