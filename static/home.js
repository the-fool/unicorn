$(function () {
  if (window.scrollY < 200) {
    setUpScreenReveals();
  }
});

function setUpScreenReveals() {

  var scrollOpts = {
    duration: 1200,
    scale: 1
  };
  var reveals = [
    '#manifesto',
    '#courses',
    '#facts',
    '#about',
    '#careers'
  ];

  reveals.forEach(function (r) {
    sr.reveal(r + ' .sr', scrollOpts, 100);
  });
}