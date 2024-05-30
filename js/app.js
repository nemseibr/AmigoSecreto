// Inicializa os arrays
let listaAmigos = [];
let listaSorteio = [];

// Função para validar o input
function validarInput(texto) {
    const regex = /^[a-zA-Z\s]+$/;
    return regex.test(texto);
}

// Função para adicionar amigos
function adicionar() {
    const input = document.getElementById("nome_amigo").value.trim();
    const mensagemErroElement = document.getElementById("mensagemErro");
    const mensagemErro = "Números e caracteres especiais não permitidos";

    if (!input || !validarInput(input)) {
        mensagemErroElement.textContent = mensagemErro;
    } else {
        mensagemErroElement.textContent = "";
        listaAmigos.push(input);
        document.getElementById("nome_amigo").value = '';
        atualizarListaAmigos();
        verificarBotaoSortear();
    }
}

// Função para atualizar a lista de amigos exibida
function atualizarListaAmigos() {
    const lista = document.getElementById("listaAmigos");
    lista.innerHTML = listaAmigos.join(", ");
}

// Função para embaralhar array
function embaralhar(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

// Função para sortear amigos
function sortear() {
    listaSorteio = [...listaAmigos];
    embaralhar(listaSorteio);

    const resultado = [];
    for (let i = 0; i < listaSorteio.length; i += 2) {
        resultado.push(`${listaSorteio[i]} ---> ${listaSorteio[i + 1]}`);
    }

    document.getElementById("listaSorteio").innerHTML = resultado.join("<br>");
}

// Função para reiniciar
function reiniciar() {
    listaAmigos = [];
    listaSorteio = [];
    document.getElementById("listaAmigos").innerHTML = '';
    document.getElementById("listaSorteio").innerHTML = '';
    verificarBotaoSortear();
}

// Função para verificar se o botão sortear deve estar habilitado
function verificarBotaoSortear() {
    const botaoSortear = document.getElementById("embaralhar");
    botaoSortear.disabled = listaAmigos.length % 2 !== 0;
}

// Adiciona listeners aos botões
document.getElementById("add").addEventListener("click", adicionar);
document.getElementById("embaralhar").addEventListener("click", sortear);
document.getElementById("reiniciar").addEventListener("click", reiniciar);

// Inicializa o estado do botão sortear
verificarBotaoSortear();
