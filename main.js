const lista = document.getElementById("lista");
const itens = JSON.parse(localStorage.getItem("itens")) || [];

itens.forEach((elemento) => {
    criarElemento(elemento)
}) 

const form = document.getElementById("novoItem").addEventListener("submit", (evento)=>{
    evento.preventDefault()

    const nome = evento.target.elements["nome"];
    const quantidade = evento.target.elements["quantidade"];

    const itemAtual ={
        "nome": nome.value,
        "quantidade": quantidade.value
    };

    criarElemento(itemAtual);

    itens.push(itemAtual)

    localStorage.setItem("itens",JSON.stringify(itens)); 

    nome.value = "";
    quantidade.value = "";
});

function criarElemento(item) {
    const itemLi = document.createElement("li");
    itemLi.classList.add("item");

    const itemNumero = document.createElement("strong");
    itemNumero.innerHTML = item.quantidade;

    itemLi.appendChild(itemNumero);
    itemLi.innerHTML += item.nome;

    //lista = document.getElementById("lista");
    lista.appendChild(itemLi);

     
};