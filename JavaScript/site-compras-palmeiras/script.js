// Lista de produtos
const products = [
    {
        id: 1,
        name: "Camiseta Palmeiras Home 2025",
        price: 370,
        image: "imagens/palmeiras-home.avif",
        details: "productDetails.html",
        description: "Camiseta oficial do Palmeiras para jogos em casa. Material leve e confortável.",
        sizes: ["P", "M", "G", "GG"],
        material: "100% poliéster"
    },
    {
        id: 2,
        name: "Camiseta Palmeiras Away 2025",
        price: 350,
        image: "imagens/palmeiras-away.png",
        details: "productDetails.html",
        description: "Camiseta oficial do Palmeiras para jogos fora de casa. Design elegante em tons claros.",
        sizes: ["P", "M", "G", "GG"],
        material: "100% poliéster"
    },
    {
        id: 3,
        name: "Camiseta Palmeiras Edição Limitada",
        price: 700,
        image: "imagens/palmeiras-limited-edition.png",
        details: "productDetails.html",
        description: "Camiseta especial em edição limitada com detalhes exclusivos para colecionadores.",
        sizes: ["P", "M", "G", "GG"],
        material: "Mistura de algodão e poliéster"
    },
    {
        id: 4,
        name: "Camiseta Palmeiras Home 2024",
        price: 180,
        image: "imagens/palmeiras-home-2024.webp",
        details: "productDetails.html",
        description: "Camiseta oficial do Palmeiras para jogos em casa. Material leve e confortável.",
        sizes: ["P", "M", "G", "GG"],
        material: "100% poliéster"
    }
];

let cart = []; // Carrinho de compras

function saveCartToLocalStorage() {
    localStorage.setItem("cart", JSON.stringify(cart));
}

function loadCartFromLocalStorage() {
    const storedCart = localStorage.getItem("cart");
    if (storedCart) {
        cart = JSON.parse(storedCart);
        updateCart();
    }
}

function renderProducts(filteredProducts = products) {
    const container = document.getElementById("productContainer");
    if (!container) return;
    container.innerHTML = "";
    filteredProducts.forEach(product => {
        const productDiv = document.createElement("div");
        productDiv.className = "product";
        productDiv.innerHTML = `
            <a href="productDetails.html?id=${product.id}">
                <img src="${product.image}" alt="${product.name}">
                <h3>${product.name}</h3>
                <p><strong>Preço:</strong> ${formatCurrency(product.price)}</p>
            </a>
            <button onclick="addToCart(${product.id})" aria-label="Adicionar ${product.name} ao carrinho">Adicionar ao Carrinho</button>
        `;
        container.appendChild(productDiv);
    });
}

function renderProductDetails(product) {
    const container = document.querySelector(".product-detail");
    if (!container) return;

    const modelImages = {
        1: "imagens/palmeiras-home-modelo.png",
        2: "imagens/palmeiras-away-modelo.jpeg",
        3: "imagens/palmeiras-limited-edition-modelo.jpg",
        4: "imagens/palmeiras-home-modelo-2024.avif",
    };

    const productImage = modelImages[product.id] || "default-image.jpg";

    container.innerHTML = `
        <div class="image-section">
            <img src="${product.image}" alt="${product.name}">
            <img src="${productImage}" alt="Modelo do Produto">
        </div>
        <div class="info-section">
            <h2>${product.name}</h2>
            <p><strong>Preço:</strong> ${formatCurrency(product.price)}</p>
            <p><strong>Descrição:</strong> ${product.description}</p>
            <p><strong>Tamanhos Disponíveis:</strong> ${product.sizes.join(", ")}</p>
            <p><strong>Material:</strong> ${product.material}</p>
            <button id="addToCartButton">Comprar Agora</button>
        </div>
    `;

    const addToCartButton = document.getElementById("addToCartButton");
    addToCartButton.addEventListener("click", () => {
        addToCart(product.id);
    });
}

function updateCart() {
    const cartContainer = document.getElementById("cartItems");
    const totalPriceElement = document.getElementById("totalPrice");
    if (!cartContainer || !totalPriceElement) return;
    cartContainer.innerHTML = "";
    let totalPrice = 0;

    if (cart.length === 0) {
        cartContainer.innerHTML = "<p>O carrinho está vazio.</p>";
    } else {
        cart.forEach((item, index) => {
            const li = document.createElement("li");
            li.innerHTML = `
                ${item.name} - ${formatCurrency(item.price)} x ${item.quantity} = ${formatCurrency(item.price * item.quantity)}
                <button onclick="removeFromCart(${index})" aria-label="Remover ${item.name} do carrinho">Remover</button>
            `;
            cartContainer.appendChild(li);
            totalPrice += item.price * item.quantity;
        });
    }

    totalPriceElement.textContent = `Total: ${formatCurrency(totalPrice)}`;
    saveCartToLocalStorage();
}

function removeFromCart(productIndex) {
    if (productIndex < 0 || productIndex >= cart.length) {
        console.error("Índice inválido para remoção do carrinho.");
        return;
    }

    const cartItem = cart[productIndex];
    if (cartItem.quantity > 1) {
        cartItem.quantity -= 1;
    } else {
        cart.splice(productIndex, 1);
    }

    updateCart();
    alert(`${cartItem.name} foi removido do carrinho!`);
}

function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    if (product) {
        const cartItem = cart.find(item => item.id === productId);
        if (cartItem) {
            cartItem.quantity += 1;
        } else {
            cart.push({ ...product, quantity: 1 });
        }
        updateCart();
        alert(`${product.name} foi adicionado ao carrinho!`);
    }
}

function finalizePurchase() {
    if (cart.length === 0) {
        alert("Seu carrinho está vazio. Adicione produtos antes de finalizar a compra.");
        return;
    }

    const purchaseSummary = cart.map(item => `${item.name} x ${item.quantity} - ${formatCurrency(item.price * item.quantity)}`).join("\n");
    const totalPrice = cart.reduce((total, item) => total + item.price * item.quantity, 0);

    alert(`Resumo do pedido:\n\n${purchaseSummary}\n\nTotal: ${formatCurrency(totalPrice)}\n\nObrigado pela compra!`);
    cart = [];
    saveCartToLocalStorage();
    updateCart();
    window.location.href = "feedback.html"; // Redireciona para a página de feedback
}

function handleSearch() {
    const searchInput = document.getElementById("search");
    const container = document.getElementById("productContainer");

    if (!searchInput || !container) {
        console.warn("Elemento necessário não encontrado para a barra de pesquisa.");
        return;
    }

    const searchTerm = searchInput.value.trim().toLowerCase();
    localStorage.setItem("searchTerm", searchTerm);
    const filteredProducts = products.filter(product =>
        product.name.toLowerCase().includes(searchTerm)
    );

    container.innerHTML = "";

    if (filteredProducts.length > 0) {
        renderProducts(filteredProducts);
    } else {
        container.innerHTML = "<p>Nenhum produto encontrado.</p>";
    }
}

function formatCurrency(value) {
    return new Intl.NumberFormat("pt-BR", { style: "currency", currency: "BRL" }).format(value);
}

// Eventos de inicialização
document.addEventListener("DOMContentLoaded", () => {
    loadCartFromLocalStorage();

    const searchInput = document.getElementById("search");
    if (searchInput) {
        searchInput.value = localStorage.getItem("searchTerm") || "";
        handleSearch();
    }

    document.getElementById("checkoutButton")?.addEventListener("click", finalizePurchase);

    const urlParams = new URLSearchParams(window.location.search);
    const productId = parseInt(urlParams.get("id"), 10);
    if (isNaN(productId)) {
        console.error("ID inválido!");
    } else if (productId) {
        const product = products.find(p => p.id === productId);
        if (product) {
            renderProductDetails(product);
        } else {
            console.error("Produto não encontrado!");
        }
    } else {
        renderProducts(products);
    }
});

document.getElementById("search")?.addEventListener("input", handleSearch);
document.getElementById("searchButton")?.addEventListener("click", handleSearch);