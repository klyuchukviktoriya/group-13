// imports from backend
import {
  getAllProducts,
  getProductById,
  addProduct,
} from './requests/products';
import {
  createProductsMarkup,
  createProductsbyIdMarkup,
  createProduct,
} from './services/markupService';

// Task 1
const allProducts = document.getElementById('allProducts');
// Task 2
const form = document.getElementById('singleProductForm');
const singleProduct = document.getElementById('singleProduct');

// Task 3

const newProductSection = document.querySelector('#newProductSection');
const newProductForm = document.querySelector('#newProductForm');

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

newProductForm.addEventListener('submit', newCard);

function newCard(event) {
  event.preventDefault();
  const price = event.target.elements.price.value.trim();
  const description = event.target.elements.description.value.trim();
  const title = event.target.elements.title.value.trim();

  const newProduct = { price, description, title };

  addProduct(newProduct).then(({ data }) => {
    const markupNewCard = createProduct(data);
    newProductSection.innerHTML = markupNewCard;
    newProductForm.reset();
  });
}
