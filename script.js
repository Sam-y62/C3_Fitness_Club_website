const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});

const reveals = document.querySelectorAll('.reveal');

window.addEventListener('scroll', () => {
  reveals.forEach((el) => {
    const top = el.getBoundingClientRect().top;
    const bottom = el.getBoundingClientRect().bottom;
    const trigger = window.innerHeight * 0.85;

    if (top < trigger && bottom > 0) {
      el.classList.add('active');
    } else {
      el.classList.remove('active'); // 🔥 THIS was missing
    }
  });
});

const cards = document.querySelectorAll('.price-card');
const container = document.querySelector('.pricing');
cards[0].classList.add('active');

container.addEventListener('scroll', () => {
  let center = container.scrollLeft + container.offsetWidth / 2;

  cards.forEach(card => {
    let cardCenter = card.offsetLeft + card.offsetWidth / 2;

    if (Math.abs(center - cardCenter) < card.offsetWidth / 2) {
      card.classList.add('active');
    } else {
      card.classList.remove('active');
    }
  });
});