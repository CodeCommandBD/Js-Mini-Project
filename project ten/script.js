let cart = JSON.parse(localStorage.getItem('cart')) || []
let totalPrice = JSON.parse(parseFloat(localStorage.getItem('totalPrice')) || 0)


const addCart = document.querySelectorAll('.addCart')
const ulCart = document.getElementById('cart-item')

addCart.forEach(button =>{
    button.addEventListener('click', ()=>{
        const productName = button.getAttribute('data-name')
        const productPrice = parseFloat(button.getAttribute('data-price'))
        
       const existingProduct = cart.find(item => item.name === productName)

       if(existingProduct){
        existingProduct.quantity += 1
       }else{
        cart.push({
            name: productName,
            price: productPrice,
            quantity: 1
        })
       }

       totalPrice += productPrice;
       const total = document.getElementById('totalPrice')
       total.innerText = totalPrice
       localStorage.setItem('cart',JSON.stringify(cart))
       localStorage.setItem('totalPrice', JSON.stringify(totalPrice.toFixed(2)))


       updateCartDisplay()
        
    })
    
})

const updateCartDisplay = () =>{
    
    ulCart.innerHTML ='';
    cart.forEach((item, index) => {
        const li = document.createElement('li')
        li.innerHTML = `
            ${item.name} - $${item.price} x ${item.quantity}
            <button>Remove</button>
        `;
        ulCart.appendChild(li);
    })
}



