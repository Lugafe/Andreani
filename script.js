// Seleciona o botão do menu e o menu em si
const menuToggle = document.getElementById('menu-toggle');
const menu = document.getElementById('menu');

// Alterna a classe "active" para exibir ou ocultar o menu
menuToggle.addEventListener('click', () => {
  const isActive = menu.classList.contains('active'); // Verifica se o menu está ativo

  // Alterna a exibição do menu
  if (isActive) {
    menu.classList.remove('active'); // Fecha o menu
    menuToggle.classList.remove('open'); // Volta o ícone ao estado original
  } else {
    menu.classList.add('active'); // Abre o menu
    menuToggle.classList.add('open'); // Anima o ícone do hambúrguer
  }
});

// Fechar o menu ao clicar em um link
const menuLinks = document.querySelectorAll('.menu li a');
menuLinks.forEach(link => {
  link.addEventListener('click', () => {
    menu.classList.remove('active'); // Fecha o menu
    menuToggle.classList.remove('open'); // Reseta o botão
  });
});
