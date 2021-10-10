let carts = document.querySelectorAll("#add-cart");
let products = [
    {
        name: 'Cobra roxa',
        tag: 'cobraroxa',
        price: 50.00,
        inCart: 0
    },
    {
        name: 'Cartão roxo',
        tag: 'cartaoroxo',
        price:  50.00 ,
        inCart: 0
    },
    {
        name: 'Aranha roxa',
        tag: 'aranharoxa',
        price:  50.00 ,
        inCart: 0
    },
    {
        name: 'Cobra Verde',
        tag: 'cobraverde',
        price: 50.00 ,
        inCart: 0
    },
    {
        name: 'Cartão Verde',
        tag: 'cartaoverde',
        price: 50.00 ,
        inCart: 0
    },
    {
        name: 'Aranha Verde',
        tag: 'aranhaverde',
        price: 50.00 ,
        inCart: 0
    }
]
for(let i=0; i < carts.length; i++)
{
    carts[i].addEventListener('click', () =>{
        cartNumbers(products[i]);
        totalCost(products[i]);
    })
}
function onLoadCartNumbers() 
{
    let productNumbers = localStorage.getItem('cartNumbers');
    if(productNumbers) {
        document.querySelector('.cartSpan').textContent = productNumbers;
    }
}
function cartNumbers(product)
{
    let productNumbers = localStorage.getItem('cartNumbers');
    productNumbers = parseInt(productNumbers);
    if(productNumbers)
    {
        localStorage.setItem('cartNumbers', productNumbers + 1);
        document.querySelector('.cartSpan').textContent = productNumbers + 1;
    }
    else{
        localStorage.setItem('cartNumbers', 1);
        document.querySelector('.cartSpan').textContent = 1;
    }
    setItems(product);
}

function setItems(product)
{
    let cartItems = localStorage.getItem('productsInCart');
    cartItems = JSON.parse(cartItems);
    if(cartItems != null){
        if(cartItems[product.tag] == undefined){
            cartItems = {
                ...cartItems,
                [product.tag]: product
            }
        }
        cartItems[product.tag].inCart += 1;
    } else{
        product.inCart = 1;
        cartItems =
        {
            [product.tag]: product
        }
    }
    localStorage.setItem("productsInCart", JSON.stringify(cartItems));
}
function deleteItens(){
    localStorage.setItem("productsInCart", "[]")
}
function totalCost(product)
{
    let cartCost = localStorage.getItem('totalCost');
        if(cartCost != null) {
            localStorage.setItem("totalCost", cartCost + product.price);
        } else {
            localStorage.setItem("totalCost", product.price);
        }
    if(cartCost != null){
        cartCost = parseInt(cartCost);
        localStorage.setItem("totalCost", cartCost + product.price);
    } else {
        localStorage.setItem("totalCost", product.price);
    }
}

function displayCart()
{
    let cartItems = localStorage.getItem("productsInCart");
    cartItems = JSON.parse(cartItems);
    let productContainer = document.querySelector("#cart");
    //let productTotalCost = document.querySelector("#totalCost")
    if(cartItems && productContainer){
        productContainer.innerHTML = '';
        Object.values(cartItems).map(item =>{
            console.log(item.name);
            productContainer.innerHTML += `
          <li class="list-group-item d-flex justify-content-between lh-sm">
            <div class="productHeader">
              <h6 class="productName">${item.name}</h6>
              <small class="text-muted">${item.inCart} Camiseta ${item.name}</small>
            </div>
            <span class="price">R$ ${item.price * item.inCart}</span>
          </li>
            `
        });
     productContainer.innerHTML += `            
        <li class="list-group-item d-flex justify-content-between lh-sm">
            <div class="productHeader">
            <h6 class="productName">Preço Total</h6>
            <small class="text-muted">Desconto</small>
            </div>
            <div>
            <span class="price">R$ ${localStorage.getItem("totalCost")}</span>
            </div>
        </li> `
    }
}
//function clearCart(){}
onLoadCartNumbers();
displayCart();