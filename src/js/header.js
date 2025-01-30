// Código para ativar/desativar o menu dropdown em mobile
const mobileMenu = document.getElementById('mobile-menu');
const menu = document.querySelector('nav ul');

mobileMenu.addEventListener('click', () => {
    menu.classList.toggle('active');
});
