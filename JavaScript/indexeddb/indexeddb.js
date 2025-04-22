// Abrir (ou criar) o banco de dados
let request = indexedDB.open("meuBancoDeDados", 1);

request.onupgradeneeded = function(event) {
  let db = event.target.result;

  // Criar um objeto de armazenamento (store)
  let objectStore = db.createObjectStore("meuObjeto", { keyPath: "id" });

  // Criar um índice para buscar por nome
  objectStore.createIndex("nome", "nome", { unique: false });
};

request.onsuccess = function(event) {
  let db = event.target.result;

  // Adicionar dados
  let transaction = db.transaction(["meuObjeto"], "readwrite");
  let objectStore = transaction.objectStore("meuObjeto");
  let requestAdd = objectStore.add({ id: 1, nome: "João", idade: 30 });

  requestAdd.onsuccess = function(event) {
    console.log("Dados adicionados com sucesso!");
  };

  // Recuperar dados
  let requestGet = objectStore.get(1);

  requestGet.onsuccess = function(event) {
    console.log("Dados recuperados:", event.target.result);
  };
};

request.onerror = function(event) {
  console.log("Erro ao abrir o banco de dados:", event.target.errorCode);
};