// Variáveis globais

const nomeCliente = document.querySelector("#nome-cliente");
const telefoneCliente = document.querySelector("#telefone-cliente");
const botaoCadastrar = document.querySelector("#botao-cadastrar");
const tabela = document.querySelector("#lista-contatos");

// Função para validar nome 

function validaNome(nome) {
    const mensagemErro = "Nome inválido, digite o nome completo.";
    const mensagemErroNome = document.querySelector("#mensagem-erro-nome");
    mensagemErroNome.innerHTML = mensagemErro;

    if (nomeCliente.value.trim() === "" || nomeCliente.value.split(" ").length < 3) {
        mensagemErroNome.style.display = "block";
        botaoCadastrar.disabled = true;
    } else {
        mensagemErroNome.style.display = "none"
        botaoCadastrar.disabled = false;
    }
}

// Evento para validar o nome a ser cadastrado 

nomeCliente.addEventListener("input", function() {
    nomeValidado = nomeCliente.value;
    validaNome(nomeValidado);
});

// Função para adicionar linha

function adicionalinha() { 
    const novaLinha = tabela.rows.length;
    const linha = tabela.insertRow(novaLinha);
    const cellNome = linha.insertCell(0);
    const cellTelefone = linha.insertCell(1);

    cellNome.innerHTML = nomeCliente.value;
    cellTelefone.innerHTML = telefoneCliente.value
}

// Evento para cadastrar o cliente

const cadastrar = document.querySelector("#cadastro");

cadastrar.addEventListener("submit", function(evento) {
    evento.preventDefault();

    const mensagemSucesso = `O cliente ${nomeCliente.value} foi cadastrado.`;
    const mensagemCadastro = document.querySelector("#mensagem-cadastro");

    if (!botaoCadastrar.disabled) {
        mensagemCadastro.innerHTML = mensagemSucesso;
        adicionalinha()
        
        // Limpando os campos de nome e telefone
        
        nomeCliente.value = "";
        telefoneCliente.value = "";
    }
});