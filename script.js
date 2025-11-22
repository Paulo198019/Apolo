
// Exemplo simples: botão para contato via WhatsApp
document.addEventListener('DOMContentLoaded', () => {
  const contactButton = document.createElement('button');
  contactButton.textContent = 'Fale Conosco no WhatsApp';
  contactButton.onclick = () => {
    window.open('https://wa.me/5511999999999', '_blank'); // Substitua pelo número real
  };

  document.querySelector('main').appendChild(contactButton);
});
