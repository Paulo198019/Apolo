// Seleciona o formulário
const form = document.querySelector('form');

form.addEventListener('submit', function(event) {
    event.preventDefault(); // Evita envio real

    // Captura valores dos campos
    const nome = form.querySelector('input[type="text"]').value.trim();
    const email = form.querySelector('input[type="email"]').value.trim();
    const mensagem = form.querySelector('textarea').value.trim();

    // Validação simples
    if (!nome || !email || !mensagem) {
        alert('Por favor, preencha todos os campos antes de enviar.');
        return;
    }

    // Exibe mensagem de sucesso
    alert('Obrigado, ' + nome + '! Sua mensagem foi enviada com sucesso.');

    // Limpa os campos
    form.reset();
});
