// Interações nos cards
const cards = document.querySelectorAll('.card');
cards.forEach(card => {
    card.addEventListener('mouseenter', () => {
        card.style.transform = 'scale(1.05)';
        card.style.transition = 'transform 0.3s ease';
        card.style.boxShadow = '0 8px 16px rgba(0,0,0,0.2)';
    });
    card.addEventListener('mouseleave', () => {
        card.style.transform = 'scale(1)';
        card.style.boxShadow = '0 4px 8px rgba(0,0,0,0.1)';
    });
});

// Validação do formulário com mensagem estilizada
const form = document.querySelector('form');
const contatoSection = document.querySelector('#contato');

form.addEventListener('submit', function(event) {
    event.preventDefault(); // Evita envio real

    const nome = form.querySelector('input[type="text"]').value.trim();
    const email = form.querySelector('input[type="email"]').value.trim();
    const mensagem = form.querySelector('textarea').value.trim();

    // Remove mensagens anteriores
    const oldMsg = document.querySelector('.form-msg');
    if (oldMsg) oldMsg.remove();

    const msgDiv = document.createElement('div');
    msgDiv.classList.add('form-msg');
    msgDiv.style.marginTop = '20px';
    msgDiv.style.padding = '15px';
    msgDiv.style.borderRadius = '8px';
    msgDiv.style.fontSize = '1.2rem';
    msgDiv.style.textAlign = 'center';

    if (!nome || !email || !mensagem) {
        msgDiv.textContent = 'Por favor, preencha todos os campos antes de enviar.';
        msgDiv.style.backgroundColor = '#ffc107';
        msgDiv.style.color = '#333';
    } else {
        msgDiv.textContent = `Obrigado, ${nome}! Sua mensagem foi enviada com sucesso.`;
        msgDiv.style.backgroundColor = '#28a745';
        msgDiv.style.color = '#fff';
        form.reset();
    }

    contatoSection.appendChild(msgDiv);
});
