const calculateBtn = document.getElementById('calculateBtn')


const calculateTip = () => {
    const billAmount = parseFloat(document.getElementById('bill').value);
    const tipAmount = parseFloat(document.getElementById('tip').value);

    if(isNaN(billAmount) || isNaN(tipAmount)){
        document.getElementById('show').textContent = 'Please Enter Valid Number';
        
    }else{

        const tip = (billAmount * tipAmount) / 100;
        const total = billAmount + tip;
    
        document.getElementById('show').innerHTML = `
            <p> Tip Amount: $${tip.toFixed(2)} </p>
            <p> Total Amount: $${total.toFixed(2)} </p>
    
        `
    }

    
}

calculateBtn.addEventListener('click', ()=>{
    calculateTip()
})