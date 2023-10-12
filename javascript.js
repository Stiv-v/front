const products = [
    { name: "Producto 1", price: 19.99 },
    { name: "Producto 2", price: 29.99 },
    { name: "Producto 3", price: 9.99 },
];


function displayProducts() {
    const productList = document.getElementById("product-list");
    productList.innerHTML = ""; // Borra el contenido anterior

    products.forEach((product, index) => {
        const productCard = document.createElement("div");
        productCard.classList.add("product-card");
        productCard.innerHTML = `
            <h2>${product.name}</h2>
            <p>Precio: $${product.price}</p>
        `;
        productList.appendChild(productCard);
    });
}