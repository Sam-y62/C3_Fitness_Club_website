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