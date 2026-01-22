const produtos = [
  { nome: "Mouse", preco: 50 },
  { nome: "Teclado", preco: 120 }
];

const lista = document.getElementById("lista-produtos");
const form = document.getElementById("form-produto");
const nomeInput = document.getElementById("nome");
const precoInput = document.getElementById("preco");

function renderizarProdutos() {
  lista.innerHTML = "";

  produtos.forEach((produto, index) => {
    const div = document.createElement("div");
    div.classList.add("produto");

    div.innerHTML = `
      <h2>${produto.nome}</h2>
      <p>R$ ${produto.preco}</p>
      <button onclick="comprarProduto(${index})">Comprar</button>`;

    lista.appendChild(div);
  });
}

function comprarProduto(index) {
  alert(`Você comprou: ${produtos[index].nome}`);
}

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const nome = nomeInput.value;
  const preco = precoInput.value;

  produtos.push({ nome, preco });
  renderizarProdutos();

  nomeInput.value = "";
  precoInput.value = "";
});

renderizarProdutos();
