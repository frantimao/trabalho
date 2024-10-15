function validarFormulario() {
    
    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    const telefone = document.getElementById('telefone').value;

    
    const erroNome = document.getElementById('erro-nome');
    const erroEmail = document.getElementById('erro-email');
    const erroTelefone = document.getElementById('erro-telefone');

    let formValido = true; 

    
    erroNome.textContent = '';
    erroEmail.textContent = '';
    erroTelefone.textContent = '';

   
    if (nome === '') {
        erroNome.textContent = 'Por favor, preencha seu nome.';
        formValido = false;
    }

 
    if (email === '') {
        erroEmail.textContent = 'Por favor, preencha seu e-mail.';
        formValido = false;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        erroEmail.textContent = 'Por favor, insira um e-mail válido.';
        formValido = false;
    }

   
    if (telefone === '') {
        erroTelefone.textContent = 'Por favor, preencha seu telefone.';
        formValido = false;
    } else if (!/^\d{10,11}$/.test(telefone)) {
        erroTelefone.textContent = 'Por favor, insira um telefone válido com 10 ou 11 dígitos.';
        formValido = false;
    }

   
    return formValido;
}
