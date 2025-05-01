function validateEmail(email) {
    return /\S+@\S+\.\S+/.test(email); // Validação simples de email
}

function validateFields() {
    const email = document.getElementById('email').value;
    const button = document.getElementById('recover-password-button');

    if (validateEmail(email)) {
        button.disabled = false; // Ativa o botão se o email for válido
    } else {
        button.disabled = true; // Desativa o botão se o email for inválido
    }
}