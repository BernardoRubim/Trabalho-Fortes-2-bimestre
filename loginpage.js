document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    if (username === '' || password === '') {
        alert('Por favor, preencha todos os campos.');
        return;
    }

    var passwordPattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;

    if (!passwordPattern.test(password)) {
        alert('A senha deve conter pelo menos 8 caracteres, incluindo pelo menos um número, uma letra maiúscula e uma letra minúscula.');
        return;
    }

    alert('Login bem-sucedido!');
});