const lista = document.getElementById("lista");
const itens = JSON.parse(localStorage.getItem("itens")) || [];

const form = document.getElementById("novoItem").addEventListener("submit", (evento)=>{
    evento.preventDefault()

    const nome = evento.target.elements["nome"];
    const quantidade = evento.target.elements["quantidade"];

    criarElemento(nome.value, quantidade.value);

    nome.value = "";
    quantidade.value = "";
});

function criarElemento(nome, quantidade) {
    const itemLi = document.createElement("li");
    itemLi.classList.add("item");

    const itemNumero = document.createElement("strong");
    itemNumero.innerHTML = quantidade;

    itemLi.appendChild(itemNumero);
    itemLi.innerHTML += nome;

    //lista = document.getElementById("lista");
    lista.appendChild(itemLi);

    const itemAtual ={
        "nome": nome,
        "quantidade": quantidade
    };

    itens.push(itemAtual)

    localStorage.setItem("itens",JSON.stringify(itens));   
};