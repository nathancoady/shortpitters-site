(function () {
  // Mobile nav
  var toggle = document.querySelector('.nav-toggle');
  var nav = document.getElementById('nav');
  if (toggle && nav) {
    toggle.addEventListener('click', function () {
      var open = nav.classList.toggle('open');
      toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
      toggle.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
    });
    nav.querySelectorAll('a').forEach(function (a) {
      a.addEventListener('click', function () {
        nav.classList.remove('open');
        toggle.setAttribute('aria-expanded', 'false');
      });
    });
  }

  // Breed picker
  var chips = document.querySelectorAll('.chip');
  var result = document.getElementById('pick-result');
  chips.forEach(function (chip) {
    chip.setAttribute('aria-pressed', 'false');
    chip.addEventListener('click', function () {
      chips.forEach(function (c) { c.setAttribute('aria-pressed', 'false'); });
      chip.setAttribute('aria-pressed', 'true');
      if (result) {
        result.textContent = chip.textContent.trim() + ': usually a ' + chip.dataset.boot +
          ' boot with a size ' + chip.dataset.strap + ' suspender strap set. Measure to confirm; mixes vary.';
        result.hidden = false;
      }
    });
  });
})();
