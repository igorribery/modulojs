const qs = (el) => document.querySelector(el);
const qsa = (el) => document.querySelectorAll(el);

pizzaJson.map( (item, index) => {

    let pizzaItem = qs('.models .pizza-item').cloneNode(true);

    pizzaItem.querySelector('.pizza-item--img img').src = item.img;
    pizzaItem.querySelector('.pizza-item--price').innerHTML = item.price.toFixed(2);
    pizzaItem.querySelector('.pizza-item--name').innerHTML = item.name;
    pizzaItem.querySelector('.pizza-item--desc').innerHTML = item.description;
    pizzaItem.querySelector('a').addEventListener('click', (e) =>{
        e.preventDefault();

        qs('.pizzaWindowArea').style.opacity = 0;
        qs('.pizzaWindowArea').style.display = 'flex';
        setTimeout(() => {
            qs('.pizzaWindowArea').style.opacity = 1;
        }, 200);
    
    });


    qs('.pizza-area').append(pizzaItem);

});
