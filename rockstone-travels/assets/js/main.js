/* ROCKSTONE TRAVELS — copia estática */
(function () {
  'use strict';

  var WHATSAPP = '5492615372351';

  /* ---------- Menú mobile ---------- */
  var toggle = document.getElementById('navToggle');
  var nav = document.getElementById('nav');
  if (toggle && nav) {
    toggle.addEventListener('click', function () {
      var open = nav.classList.toggle('open');
      toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
      toggle.setAttribute('aria-label', open ? 'Fechar menu' : 'Abrir menu');
    });
    nav.addEventListener('click', function (e) {
      if (e.target.closest('a')) {
        nav.classList.remove('open');
        toggle.setAttribute('aria-expanded', 'false');
      }
    });
  }

  /* ---------- Slider Montanha / Enoturismo ---------- */
  var slider = document.getElementById('slider');
  var slides = slider ? slider.querySelectorAll('.slide') : [];
  var current = 0;
  function goTo(i) {
    if (!slides.length) return;
    current = (i + slides.length) % slides.length;
    slides.forEach(function (s, idx) {
      s.classList.toggle('is-active', idx === current);
      s.setAttribute('aria-hidden', idx === current ? 'false' : 'true');
    });
  }
  if (slider) {
    slider.querySelector('.prev').addEventListener('click', function () { goTo(current - 1); });
    slider.querySelector('.next').addEventListener('click', function () { goTo(current + 1); });
    goTo(0);
  }
  // Los links "Enoturismo" / "Montanha" muestran el slide que corresponde
  document.querySelectorAll('[data-slide]').forEach(function (a) {
    a.addEventListener('click', function () { goTo(parseInt(a.getAttribute('data-slide'), 10)); });
  });
  if (location.hash === '#enoturismo-con-rockstone') goTo(1);

  /* ---------- Galería: duplicamos las fotos para el loop infinito ---------- */
  var track = document.querySelector('.marquee-track');
  if (track) {
    Array.prototype.slice.call(track.children).forEach(function (img) {
      var clone = img.cloneNode(true);
      clone.setAttribute('aria-hidden', 'true');
      clone.alt = '';
      track.appendChild(clone);
    });
  }

  /* ---------- Formulario: arma el mensaje y abre WhatsApp ---------- */
  var form = document.getElementById('contactForm');
  var msg = document.getElementById('formMsg');
  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var f = form.elements;
      var missing = [];
      ['nome', 'email', 'whatsapp'].forEach(function (n) {
        var ok = f[n].value.trim() !== '' && (n !== 'email' || f[n].checkValidity());
        f[n].classList.toggle('invalid', !ok);
        if (!ok) missing.push(f[n]);
      });
      if (missing.length) {
        msg.className = 'form-msg error';
        msg.textContent = 'Por favor, preencha os campos obrigatórios corretamente.';
        missing[0].focus();
        return;
      }
      var text =
        'Olá! Gostaria de planejar uma experiência.\n\n' +
        '*Nome:* ' + f.nome.value.trim() + '\n' +
        '*Email:* ' + f.email.value.trim() + '\n' +
        '*WhatsApp:* ' + f.whatsapp.value.trim() + '\n' +
        '*Experiência:* ' + f.experiencia.value + '\n' +
        (f.mensagem.value.trim() ? '*Mensagem:* ' + f.mensagem.value.trim() : '');
      window.open('https://wa.me/' + WHATSAPP + '?text=' + encodeURIComponent(text), '_blank', 'noopener');
      msg.className = 'form-msg ok';
      msg.textContent = 'Obrigado! Abrimos o WhatsApp com sua mensagem.';
      form.reset();
    });
  }
})();
