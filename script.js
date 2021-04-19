function createProductImageElement(imageSource) {
  const img = document.createElement('img');
  img.className = 'item__image';
  img.src = imageSource;
  return img;
}

function createCustomElement(element, className, innerText) {
  const e = document.createElement(element);
  e.className = className;
  e.innerText = innerText;
  return e;
}

function createProductItemElement({
  image, name, description, oldPrice, price, installmentsCount, installmentsValue,
}) {
  const section = document.createElement('section');
  const div = document.createElement('div');
  div.className = 'productDescription';
  section.className = 'item';
  section.appendChild(createProductImageElement(image));
  div.appendChild(createCustomElement('span', 'item__name', name));
  div.appendChild(createCustomElement('span', 'item__description', description));
  div.appendChild(createCustomElement('span', 'item__oldPrice', `De: R$${oldPrice}`));
  div.appendChild(createCustomElement('strong', 'item__price', `POR: R$${price}`));
  div.appendChild(createCustomElement('span', 'item__installmentsCount', `ou ${installmentsCount}x de R$${installmentsValue}`));
  const createBtn = createCustomElement(
    'button',
    'btn item__btn',
    'Comprar',
  );
  div.appendChild(createBtn);
  section.appendChild(div);
  return section;
}

let pageNumber = 2;

function fetchApi(page) {
  fetch(`https://frontend-intern-challenge-api.iurykrieger.now.sh/products?page=${page}`)
    .then((data) => data.json())
    .then((response) => response.products.map((product) => {
      const dataApi = createProductItemElement({
        image: product.image,
        name: product.name,
        description: product.description,
        oldPrice: product.oldPrice,
        price: product.price,
        installmentsCount: product.installments.count,
        installmentsValue: product.installments.value,
      });
      return document.getElementById('productsList').appendChild(dataApi);
    }));
}

function moreProductsButton() {
  document.getElementById('moreProducts').addEventListener('click', () => fetchApi(pageNumber));
  pageNumber += 1;
}

window.onload = function onload() {
  fetchApi();
  moreProductsButton();
};
