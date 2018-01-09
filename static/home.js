$(function () {
  if (window.scrollY < 200) {
    setUpScreenReveals();
  }
});

function setUpScreenReveals() {

  var scrollOpts = {
    duration: 800,
    scale: 1,
    distance: '30px'
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