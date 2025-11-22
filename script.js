
// Build WhatsApp link using data attributes
function buildWhatsAppUrl(){
  const btn = document.querySelector('[data-whatsapp]');
  if(!btn) return;
  const phone = btn.getAttribute('data-phone') || '';
  const text = btn.getAttribute('data-text') || 'Olá, gostaria de mais informações.';
  if(phone){
    const url = `https://wa.me/${phone.replace(/\D/g,'')}?text=${encodeURIComponent(text)}`;
    btn.setAttribute('href', url);
  }
}

// Simple form handler using mailto (placeholder)
document.addEventListener('DOMContentLoaded', () => {
  buildWhatsAppUrl();
  const form = document.querySelector('#contact-form');
  if(form){
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = form.querySelector('[name="name"]').value.trim();
      const email = form.querySelector('[name="email"]').value.trim();
      const phone = form.querySelector('[name="phone"]').value.trim();
      const message = form.querySelector('[name="message"]').value.trim();
      const to = form.getAttribute('data-to') || 'contact@example.com';
      const subject = `Contato pelo site – ${name || 'Sem nome'}`;
      const body = `Nome: ${name}\nE-mail: ${email}\nTelefone: ${phone}\n\nMensagem:\n${message}`;
      const mailto = `mailto:${to}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
      window.location.href = mailto;
    });
  }
});
