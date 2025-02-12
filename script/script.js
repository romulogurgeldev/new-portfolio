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

document.addEventListener("DOMContentLoaded", function () {
  const readMoreBtns = document.querySelectorAll(".read-more-btn");

  readMoreBtns.forEach(function (btn) {
      const textParagraph = btn.previousElementSibling; // Pega o parágrafo antes do botão

      btn.addEventListener("click", function (event) {
          event.preventDefault(); // Impede o comportamento padrão do link

          textParagraph.classList.toggle("expanded");

          if (textParagraph.classList.contains("expanded")) {
              btn.textContent = "Read less";
          } else {
              btn.textContent = "Read more";
          }
      });
  });
});




