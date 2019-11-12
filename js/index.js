const addToBasket = document.getElementsByClassName('order-button');

Array.from(addToBasket).forEach( el => {
  el.addEventListener('click', () => {
    changeButton(el);
    changeOpacity(el);
  });
});

const changeButton = el => {
  el.textContent = 'تم الطلب';
  el.style.backgroundColor = '#1dd1a1'; 
}

const changeOpacity = el => {
  const mealCard = el.closest('.meal-card');
  mealCard.style.opacity = '0.5';
}