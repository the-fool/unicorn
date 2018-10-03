$(function() {
  if (window.scrollY < 200) {
    setUpScreenReveals();
  }
  if (window.innerWidth > 580 || true) {
    consoleEffect();
  }

  /*
  maybe later . . . 
  window.addEventListener('resize', function(e) {
    const w = e.target;
  });
  */


});

function setUpScreenReveals() {


  var w = window,
    d = document,
    e = d.documentElement,
    g = d.getElementsByTagName('body')[0],
    x = w.innerWidth || e.clientWidth || g.clientWidth,
    y = w.innerHeight || e.clientHeight || g.clientHeight;

  window.sr = ScrollReveal();

  if (x > 600 && ScrollReveal.isSupported() && window.scrollY < 200) {
    document.documentElement.classList.add('revealing');
  } else {
    sr = undefined;
  }

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
    reveals.forEach(function(r) {
      sr.reveal(r + ' .sr', scrollOpts, 100);
    });
  }
}

function consoleEffect() {
  const eraseSpeed = 70;
  const writeSpeed = 100;
  const cursorBlinkSpeed = 600;
  const initialDelay = 3000;
  const afterEraseDelay = 800;
  const afterWriteDelay = 3000;

  const mutant = document.getElementById('mutant');

  let i = 0;

  const clauses = [
    'All of Us.',
    'Artists.',
    'Freelancers.',
    'Dog Lovers.',
    'Home Brewers.',
    'Interior Designers.',
  ];

  function erase() {
    function eraseOne() {
      const text = mutant.innerHTML;
      mutant.innerHTML = text.substring(0, text.length - 1);
      checkWhetherToErase();
    }

    function checkWhetherToErase() {
      if (mutant.innerHTML.length > 0) {
        setTimeout(eraseOne, eraseSpeed);
      } else {
        pauseUntilWrite();
      }
    }

    eraseOne();
  }

  function pauseUntilWrite() {
    setTimeout(write, afterEraseDelay);
  }

  function write() {
    i = (i + 1) % clauses.length;
    const clause = clauses[i];

    function writeOne() {
      const current = mutant.innerHTML;
      const l = current.length;
      const text = current + clause[l];
      mutant.innerHTML = text;
      checkWhetherToWrite();
    }

    function checkWhetherToWrite() {
      if (mutant.innerHTML.length >= clause.length) {
        pauseUntilErase();
      } else {
        setTimeout(writeOne, writeSpeed);
      }
    }

    writeOne();

  }

  function pauseUntilErase() {
    setTimeout(erase, afterWriteDelay);
  }

  setTimeout(erase, initialDelay);

  const cursor$ = $('#cursor');
  setInterval(function() {
    cursor$.toggleClass('invisible');
  }, cursorBlinkSpeed);

}