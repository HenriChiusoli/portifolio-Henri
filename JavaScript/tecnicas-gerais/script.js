// array para armazenar os itens
const items = [];

// função para criar um novo item

function createItem(name, quantity){
    return{
        name,
        quantity
    }
}

function addItemToList(item){
    // adiciona um item ao array
    items.push(item);

    // cria um novo elemento de lista
    const listItem = document.createElement('li');
    listItem.className = 'item';
    listItem.textContent = `${item.name} - Quantidade: ${item.quantity}`;

    // adiciona o novo elemento à lista no DOM
    const itemList = document.getElementById('itemList');
    itemList.appendChild(listItem);
}

document.getElementById('addItemButton').addEventListener('click', () => {
    const itemName = prompt('Digite o nome do item: ');
    const itemQuantity = prompt('Digite a quantidade: ');

    console.log(itemName, itemQuantity);    

    if (itemName && itemQuantity){
        const newItem = createItem(itemName, itemQuantity);
        addItemToList(newItem);
    }
});