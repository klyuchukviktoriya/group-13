// imports from backend
import { getAllProducts } from "./requests/products";
import { createProductsMarkup } from "./services/markupService"

// Task 1
const allProducts = document.getElementById("allProducts");

getAllProducts()
    .then(({ data: { products } }) => {
        console.log(products);
        const markupCard = createProductsMarkup(products);
        allProducts.insertAdjacentHTML("beforeend", markupCard);
    })



