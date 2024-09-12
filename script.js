document.getElementById('form-inscricao').addEventListener('submit', function(event) {
    event.preventDefault();
  
    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
  
    if (nome && email) {
      document.getElementById('mensagem-sucesso').textContent = `Obrigado, ${nome}! Sua inscrição foi recebida.`;
      document.getElementById('form-inscricao').reset();
    } else {
      document.getElementById('mensagem-sucesso').textContent = 'Por favor, preencha todos os campos.';
    }
  });
  