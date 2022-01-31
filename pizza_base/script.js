const qs = (el) => document.querySelector(el);
const qsa = (el) => document.querySelectorAll(el);

let cart = [];
let modalQt = 1;
let modalKey = 0;

pizzaJson.map( (item, index) => {

// clonando as "pizzas"
   
    let pizzaItem = qs('.models .pizza-item').cloneNode(true);

// listagem das pizzas

    pizzaItem.setAttribute('data-key', index);
    pizzaItem.querySelector('.pizza-item--img img').src = item.img;
    pizzaItem.querySelector('.pizza-item--price').innerHTML = item.price.toFixed(2);
    pizzaItem.querySelector('.pizza-item--name').innerHTML = item.name;
    pizzaItem.querySelector('.pizza-item--desc').innerHTML = item.description;
    
    // criação e preenchimento do modal
    
    pizzaItem.querySelector('a').addEventListener('click', (e) => {
        e.preventDefault();
        
        let key = e.target.closest('.pizza-item').getAttribute('data-key');
        modalQt = 1;
        modalKey = key;

        qs('.pizzaBig img').src = pizzaJson[key].img;
        qs('.pizzaInfo h1').innerHTML = pizzaJson[key].name;
        qs('.pizzaInfo--desc').innerHTML = pizzaJson[key].description;
        qs('.pizzaInfo--actualPrice').innerHTML = `R$ ${pizzaJson[key].price.toFixed(2)}`;

        qs('.pizzaInfo--size.selected').classList.remove('selected');
       qsa('.pizzaInfo--size').forEach((size, sizeIndex) => {
           if(sizeIndex == 2) {
               size.classList.add('selected');
           }
            size.querySelector('span').innerHTML = pizzaJson[key].sizes[sizeIndex];
       })
        
        qs('.pizzaInfo--qt').innerHTML = modalQt;


        qs('.pizzaWindowArea').style.opacity = 0;
        qs('.pizzaWindowArea').style.display = 'flex';
        setTimeout(() => {
            qs('.pizzaWindowArea').style.opacity = 1;
        }, 200);
    });
    qs('.pizza-area').append(pizzaItem);
});

// eventos do MODAL
    // adicionando a função nos botão de fechar o modal

const closeModal = () => {
    qs('.pizzaWindowArea').style.opacity = 0;
    setTimeout(() => {
        qs('.pizzaWindowArea').style.display = 'none';
    }, 500);
}
qsa('.pizzaInfo--cancelButton, pizzaInfo--cancelMobileButton').forEach((item) => {
    item.addEventListener('click', closeModal);
})

// botão de mais e menos na quantidade da pizza

qs('.pizzaInfo--qtmenos').addEventListener('click', () =>{
    if(modalQt >1) {
    modalQt--;
    qs('.pizzaInfo--qt').innerHTML = modalQt;
    }
});
qs('.pizzaInfo--qtmais').addEventListener('click', () => {
    modalQt++;
    qs('.pizzaInfo--qt').innerHTML = modalQt;
})

// botão de tamanho da pizza ( pequena - media - grande)

qsa('.pizzaInfo--size').forEach((size, sizeIndex) => {
    size.addEventListener('click', (e) => {
        qs('.pizzaInfo--size.selected').classList.remove('selected');
        size.classList.add('selected');
    });
});
// criando o carrinho de compras
       // armazenamento de informações do pedido antes de colocar no carrinho
        // precisamos saber para fazer:
            // Qual a pizza?
            // Qual o tamanho selecionada?
            // Quantas pizzas?
qs('.pizzaInfo--addButton').addEventListener('click', () => {
    let size = parseInt(qs('.pizzaInfo--size.selected').getAttribute('data-key'));

    let identifier = pizzaJson[modalKey].id+'@'+size;

    let key = cart.findIndex((item) => item.identifier == identifier);

    if(key > -1) {
        cart[key].qt += modalQt;
    } else {
        cart.push({
            identifier,
            id: pizzaJson[modalKey].id,
            size,
            qt:modalQt
        });
    }
    
    closeModal();
})