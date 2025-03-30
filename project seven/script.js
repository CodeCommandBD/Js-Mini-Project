const show = document.getElementById('show')
const calculateBMI = () =>{
    const age = document.getElementById('age').value;
    const weight = parseFloat(document.getElementById('weight').value)
    const height = parseFloat(document.getElementById('height').value/100)

    
    if(isNaN(age) || age <= 0){
        
        show.innerText = 'please enter a valid age'
        return
    }
    if(isNaN(weight) || weight <= 0){
        show.innerText = 'please enter a valid weight'
        return
    }
     if(isNaN(height) || height <=0){
        show.innerText = 'please enter a valid height'
        return
    }

    const bmi  = parseFloat(weight / (height * height))

    const Bmicata = getBmicatagory(bmi);
    show.innerHTML = `
        <p> Your age is : ${age} </p>
        <p>Your BMI is : ${bmi.toFixed(2)}</p>
        <p>You are : ${Bmicata}</p>
    `

}

const getBmicatagory = (bmi) => {
    if(bmi < 18.5){
        return 'Under weight';
    }else if(bmi >= 18.5 && bmi < 25){
        return 'Normal weight'
    }else if(bmi >= 25 && bmi < 30 ){
        return 'Over weight'
    }else{
        return 'Obesity'
    }
}

