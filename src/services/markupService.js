export const createProductsMarkup = products => {
  return products
    .map(({ id, title, price, description, tags, images }) => {
      return `<li class="productCard" data-id="${id}">
    <img src="${images[0]}" alt="${tags}" width="250">
    <h2>${title}</h2>
    <p>${price}</p>
    <p>${description}</p>
  </li>`;
    })
    .join('');
};

export const createProductsbyIdMarkup = ({
  id,
  title,
  price,
  description,
  tags,
  images,
}) => {
  return `<div class="productCard" data-id="${id}">
  <img src="${images[0]}" alt="${tags}" width="250">
  <h2>${title}</h2>
  <p>${price}</p>
  <p>${description}</p>
</div>`;
};
