const menuHamburguer = document.querySelector('.menu-hamburguer');
menuHamburguer.addEventListener('click', () => {
  const menu = document.querySelector('.nav-responsive');
  toggleMenu();
});

function toggleMenu() {
  const menu = document.querySelector('.nav-responsive');
  menuHamburguer.classList.toggle('change');

  if(menu.classList.toggle('change')){
    menu.style.display = 'block';
  }else{
    menu.style.display = 'none';
  }
};