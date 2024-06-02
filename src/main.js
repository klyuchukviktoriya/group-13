// imports from backend
import { getAllProducts, getProductById } from './requests/products';
import {
  createProductsMarkup,
  createProductsbyIdMarkup,
} from './services/markupService';

// Task 1
const allProducts = document.getElementById('allProducts');
// Task 2
const form = document.getElementById('singleProductForm');
const singleProduct = document.getElementById('singleProduct');

getAllProducts().then(({ data: { products } }) => {
  console.log(products);
  const markupCard = createProductsMarkup(products);
  allProducts.insertAdjacentHTML('beforeend', markupCard);
});

form.addEventListener('submit', searchById);
function searchById(e) {
  e.preventDefault();
  const id = e.target.elements.id.value.trim();
  getProductById(id).then(console.log);
  getProductById(id).then(({ data }) => {
    const markupCard = createProductsbyIdMarkup(data);
    singleProduct.innerHTML = markupCard;
    form.reset();
  });
}
