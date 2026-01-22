let produtos = [];

const formProduto = document.getElementById("form-produto");
const listaProdutos = document.getElementById("lista-produtos");
const nomeProdutoInput = document.getElementById("nomeProduto");
const precoProdutoInput = document.getElementById("precoProduto");

function renderizarProdutos() {
  listaProdutos.innerHTML = "";

  produtos.forEach((produto, index) => {
    const div = document.createElement("div");
    div.classList.add("produto");

    div.innerHTML = `
      <h3>${produto.nome}</h3>
      <p>R$ ${produto.preco}</p>
      <button onclick="removerProduto(${index})">Remover</button>
    `;

    listaProdutos.appendChild(div);
  });
}

function removerProduto(index) {
  produtos.splice(index, 1);
  renderizarProdutos();
}

formProduto.addEventListener("submit", function (e) {
  e.preventDefault();

  const produto = {
    nome: nomeProdutoInput.value,
    preco: precoProdutoInput.value
  };

  produtos.push(produto);
  renderizarProdutos();

  nomeProdutoInput.value = "";
  precoProdutoInput.value = "";
});
