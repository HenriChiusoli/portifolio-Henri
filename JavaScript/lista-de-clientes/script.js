let clientes = JSON.parse(localStorage.getItem("clientes")) || [];

const form = document.getElementById("form-cliente");
const lista = document.getElementById("lista-clientes");
const nomeInput = document.getElementById("nome");
const emailInput = document.getElementById("email");

function salvarClientes() {
  localStorage.setItem("clientes", JSON.stringify(clientes));
}

function renderizarClientes() {
  lista.innerHTML = "";

  clientes.forEach((cliente, index) => {
    const div = document.createElement("div");
    div.classList.add("cliente");

    div.innerHTML = `
      <h3>${cliente.nome}</h3>
      <p>${cliente.email}</p>
      <button onclick="removerCliente(${index})">Remover</button>`;

    lista.appendChild(div);
  });
}

function removerCliente(index) {
  clientes.splice(index, 1);
  salvarClientes();
  renderizarClientes();
}

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const cliente = {
    nome: nomeInput.value,
    email: emailInput.value
  };

  clientes.push(cliente);
  salvarClientes();
  renderizarClientes();

  nomeInput.value = "";
  emailInput.value = "";
});

renderizarClientes();
