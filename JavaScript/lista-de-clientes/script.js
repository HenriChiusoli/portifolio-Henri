const clientes = [];

const form = document.getElementById("form-cliente");
const lista = document.getElementById("lista-clientes");
const nomeInput = document.getElementById("nome");
const emailInput = document.getElementById("email");

function renderizarClientes() {
  lista.innerHTML = "";

  clientes.forEach(cliente => {
    const div = document.createElement("div");
    div.classList.add("cliente");

    div.innerHTML = `
      <h3>${cliente.nome}</h3>
      <p>${cliente.email}</p>
    `;

    lista.appendChild(div);
  });
}

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const cliente = {
    nome: nomeInput.value,
    email: emailInput.value
  };

  clientes.push(cliente);
  renderizarClientes();

  nomeInput.value = "";
  emailInput.value = "";
});
