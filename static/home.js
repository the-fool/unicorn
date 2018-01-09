$(function () {
  if (window.scrollY < 200) {
    setUpScreenReveals();
  }
});

function setUpScreenReveals() {

  var scrollOpts = {
    duration: 1000,
    scale: 1,
    distance: '20px',
    mobile: false,
  };
  var reveals = [
    '#manifesto',
    '#courses',
    '#facts',
    '#about',
    '#careers'
  ];

  if (sr && ScrollReveal.isSupported()) {
    reveals.forEach(function (r) {
      sr.reveal(r + ' .sr', scrollOpts, 100);
    });
  }
}