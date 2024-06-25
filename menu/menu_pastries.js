const hamburger = document.querySelector('.hamburger');
const drinksTitle1 = document.querySelector('.pastries_title1');

hamburger.addEventListener('click', () => {
  drinksTitle1.classList.toggle('collapsed');
});