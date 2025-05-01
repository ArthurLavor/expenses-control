document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('login-form');
  
    form.addEventListener('submit', (e) => {
      const email = document.getElementById('email').value.trim();
      const password = document.getElementById('password').value.trim();
  
      if (!email || !password) {
        e.preventDefault();
        alert('Por favor, preencha todos os campos.');
      } else {
        // Aqui você pode prosseguir com a submissão do formulário.
        console.log('Formulário enviado');
      }
    });
  
    // Exemplo de ação para o botão de Recuperar Senha
    document.querySelector('.btn.recover').addEventListener('click', () => {
      alert('Redirecionando para a recuperação de senha...');
      // Redirecione para a página de recuperação ou execute a ação desejada.
    });
  
    // Exemplo de ação para o botão de Registrar
    document.querySelector('.btn.register').addEventListener('click', () => {
      alert('Redirecionando para a página de registro...');
      // Redirecione para a página de registro ou execute a ação desejada.
    });
  });