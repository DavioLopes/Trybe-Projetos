const carrinhoDeCompras = document.querySelector('.cart__items');

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

function createProductItemElement({ sku, name, image }) {
  const section = document.createElement('section');
  section.className = 'item';
  section.appendChild(createCustomElement('span', 'item__sku', sku));
  section.appendChild(createCustomElement('span', 'item__title', name));
  section.appendChild(createProductImageElement(image));
  section.appendChild(createCustomElement('button', 'item__add', 'Adicionar ao carrinho!'));

  return section;
}

function getSkuFromProductItem(item) {
  return item.querySelector('span.item__sku').innerText;
}

function creatPrice() {
  const allItens = document.querySelector('.cart__items').childNodes;
  let priceFull = 0;
  allItens.forEach((item) => {
    priceFull += Number(item.innerHTML.split('$').pop());
  });
  return priceFull;
}

const priceMsg = createCustomElement('p', 'total-price', '');
document.querySelector('.cart').appendChild(priceMsg);
  
function showPrice() {
  priceMsg.innerHTML = `Preço Total: $${creatPrice()}`;
}

function cartItemClickListener(event) {
  event.target.remove();
  showPrice();
}

function createCartItemElement({ sku, name, salePrice }) {
  const li = document.createElement('li');
  li.className = 'cart__item';
  li.innerText = `SKU: ${sku} | NAME: ${name} | PRICE: $${salePrice}`;
  li.addEventListener('click', cartItemClickListener);
  return li;
}

function saveCar() {
  const saveItens = carrinhoDeCompras.innerHTML;
  localStorage.setItem('produtosCarrinho', saveItens);
}

function chargeCar() {
  const chargeItens = localStorage.getItem('produtosCarrinho');
  carrinhoDeCompras.innerHTML = chargeItens;
  carrinhoDeCompras.childNodes.forEach((item) => {
    item.addEventListener('click', cartItemClickListener);
  });
}

async function addCart(event) {
  const selectedIten = getSkuFromProductItem(event.target.parentNode);
  const addCarrinho = await fetch(`https://api.mercadolibre.com/items/${selectedIten}`);
  const carrinhoJason = await addCarrinho.json();
  const pcSelected = {
    sku: carrinhoJason.id,
    name: carrinhoJason.title,
    salePrice: carrinhoJason.price,
  };
  carrinhoDeCompras.appendChild(createCartItemElement(pcSelected));
  showPrice();
  saveCar();
}

function loading() {
  const msgLOading = createCustomElement('p', 'loading', 'loading...');
  document.body.appendChild(msgLOading);
}

function remeoveLoading() {
  const remLOad = document.querySelector('.loading');
  document.body.removeChild(remLOad);
}

const pcs = document.querySelector('.items');
async function getApi() {
  loading();
  const api = await fetch('https://api.mercadolibre.com/sites/MLB/search?q=computador');
  const apiJson = await api.json();
  const apiResults = apiJson.results
    .forEach((item) => {
      const computer = {
        sku: item.id,
        name: item.title,
        image: item.thumbnail,
      };
      pcs.appendChild(createProductItemElement(computer));
    });
  document.querySelectorAll('.item__add').forEach((item) => {
    item.addEventListener('click', addCart);
  });
  remeoveLoading();
  return apiResults;
}

function deletList() {
  const deletButton = document.querySelector('.empty-cart');
  deletButton.addEventListener('click', () => {
    carrinhoDeCompras.innerHTML = '';
    priceMsg.innerHTML = 0;
    saveCar();
  });
}

window.onload = () => {
  getApi();
  chargeCar();
  deletList();
  creatPrice();
};
