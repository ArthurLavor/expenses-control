// Aguarda o carregamento completo do DOM
document.addEventListener("DOMContentLoaded", function () {
  // Seleciona o botão de login
  const loginButton = document.querySelector(".btn.login");

  // Adiciona um evento de clique para validar o e-mail
  loginButton.addEventListener("click", function () {
    const emailInput = document.getElementById("email");
    const email = emailInput.value.trim();

    // Valida o formato do e-mail
    if (!validateEmail(email)) {
      alert("Por favor, insira um e-mail válido");
      emailInput.focus();
      return;
    }

    // Caso o e-mail seja válido, prossiga com a lógica de autenticação
    console.log("E-mail válido:", email);
    // Aqui você pode chamar uma função para enviar os dados ou realizar outras ações
  });
});

// Função que utiliza uma expressão regular para testar se o e-mail está em formato válido
function validateEmail(email) {
  // Expressão regular básica: verifica se há caracteres antes e depois do "@" e se há um ponto com pelo menos um caractere após
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
}