const qs = (el) => document.querySelector(el);
const qsa = (el) => document.querySelectorAll(el);
let cart = [];
let modalKey = 0;
let modalQt = 1;

pizzaJson.map((item, index) => {
    let pizzaItem = qs('.models .pizza-item').cloneNode(true);
    
// listagem das pizzas

    pizzaItem.setAttribute('data-key', index);
    pizzaItem.querySelector('.pizza-item--img img').src = item.img;
    pizzaItem.querySelector('.pizza-item--price').innerHTML = `R$ ${item.price.toFixed(2)}`;
    pizzaItem.querySelector('.pizza-item--name').innerHTML = item.name;
    pizzaItem.querySelector('.pizza-item--desc').innerHTML = item.description;

    //criação do modal

    pizzaItem.querySelector('a').addEventListener('click', (e) => {
        e.preventDefault();

        let key = e.target.closest('.pizza-item').getAttribute('data-key');
        modalKey = key;
        modalQt = 1;

        qs('.pizzaBig img').src = pizzaJson[key].img;
        qs('.pizzaInfo h1').innerHTML = pizzaJson[key].name;
        qs('.pizzaInfo--desc').innerHTML = pizzaJson[key].description;
        qs('.pizzaInfo--actualPrice').innerHTML = `R$ ${pizzaJson[key].price.toFixed(2)}`;
        qs('.pizzaInfo--size.selected').classList.remove('selected');
        qsa('.pizzaInfo--size').forEach( (size, sizeIndex) => {
            
            if(sizeIndex == 2) {
                size.classList.add('selected');
            };

            size.querySelector('span').innerHTML = pizzaJson[key].sizes[sizeIndex];
        });
        
        
        qs('.pizzaWindowArea').style.opacity = 0;
        qs('.pizzaWindowArea').style.display = 'flex';
        setTimeout(() => {
            qs('.pizzaWindowArea').style.opacity = 1;
        }, 200);
    });

    qs('.pizza-area').append(pizzaItem);
});
    // -------------------------

// fechar o modal e botões de cancelar
const closeModal = () => {
    qs('.pizzaWindowArea').style.opacity = 0;
    setTimeout(() => {
        qs('.pizzaWindowArea').style.display = 'none';
    });
};

qsa('.pizzaInfo--cancelMobileButton, .pizzaInfo--cancelButton').forEach((item) => {
    item.addEventListener('click', closeModal);
});

// adicionando funcionalidade nos botão pequena - media - grande

qsa('.pizzaInfo--size').forEach((size, sizeIndex) => {
    size.addEventListener('click', (e) => {
        qs('.pizzaInfo--size.selected').classList.remove('selected');
        size.classList.add('selected');
    });
});

// adicionando funcionalidade nos botão de quantiade

qs('.pizzaInfo--qtmenos').addEventListener('click', () => {

    if(modalQt > 1){
        modalQt--;
    }
    qs('.pizzaInfo--qt').innerHTML = modalQt;
});

qs('.pizzaInfo--qtmais').addEventListener('click', () => {
    modalQt++;
    qs('.pizzaInfo--qt').innerHTML = modalQt;
});

// armazenamento de informações do pedido antes de colocar no carrinho

qs('.pizzaInfo--addButton').addEventListener('click', () => {
    
    let size = parseInt(qs('.pizzaInfo--size.selected').getAttribute('data-key'));

    let identifier = pizzaJson[modalKey].id+'@'+size;

    let key = cart.findIndex((item) => item.identifier == identifier);

    if(key > -1) {
       
        cart[key].qt += modalQt;

    } else {

        cart.push({
            identifier,
            id:pizzaJson[modalKey].id,
            size,
            qt:modalQt
        
        });
        
    }  
        updateCart();
        closeModal();
});

qs('.menu-openner').addEventListener('click', () => {
    if (cart.length > 0) {
        qs('aside').style.left = '0';
    }
});
qs('.menu-closer').addEventListener('click', () => {
    qs('aside').style.left = '100vw';
}) 


// criando e mostrando carrinho

const updateCart = () => {

    qs('.menu-openner span').innerHTML = cart.length;
    if(cart.length > 0) {
        qs('aside').classList.add('show');
        qs('.cart').innerHTML = ''; 
        let subtotal = 0;
        let desconto = 0;
        let total = 0;
        
        for(let i in cart) {
      
            let pizzaItem = pizzaJson.find((item) => item.id == cart[i].id);
            let cartItem = qs('.models .cart--item').cloneNode(true);

            subtotal += pizzaItem.price * cart[i].qt;

            let pizzaTamanho;
            switch(cart[i].size){
                case 0: 
                    pizzaTamanho = 'P';
                    break;
                case 1:
                    pizzaTamanho = 'M';
                    break;
                case 2:
                    pizzaTamanho = 'G';
                    break;
            }

            let pizzaName = `${pizzaItem.name} (${pizzaTamanho})`;

            cartItem.querySelector('img').src = pizzaItem.img;
            cartItem.querySelector('.cart--item-nome').innerHTML = pizzaName;
            cartItem.querySelector('.cart--item--qt').innerHTML = cart[i].qt;
            cartItem.querySelector('.cart--item-qtmais').addEventListener('click', () => {
                cart[i].qt++;
                updateCart();
            });
            cartItem.querySelector('.cart--item-qtmenos').addEventListener('click', () => {
                if(cart[i].qt > 1) {
                cart[i].qt--;
                } else {
                    cart.splice(i, 1);
                }
                updateCart();
            })
        
            qs('.cart').append(cartItem);

        }

        desconto = subtotal * 0.1;
        total = subtotal - desconto;

        qs('.subtotal span:last-child').innerHTML = `R$ ${subtotal.toFixed(2)}`;
        qs('.desconto span:last-child').innerHTML = `R$ ${desconto.toFixed(2)}`;
        qs('.total span:last-child').innerHTML = `R$ ${total.toFixed(2)}`;



    } else {
        qs('aside').classList.remove('show');
        qs('aside').style.left = '100vw';
    }
    

 }

