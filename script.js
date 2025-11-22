
document.addEventListener('DOMContentLoaded', () => {
  const whatsappBtn = document.getElementById('whatsappBtn');
  whatsappBtn.addEventListener('click', () => {
    window.open('https://wa.me/5511999999999', '_blank'); // Substitua pelo número real
  });

  // Scroll suave para links do menu
  document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', e => {
      e.preventDefault();
      const target = document.querySelector(link.getAttribute('href'));
      target.scrollIntoView({ behavior: 'smooth' });
    });
  });
});
