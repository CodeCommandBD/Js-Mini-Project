// step 1 - create onload handler

window.onload = () =>{
    main()
}

const main = () => {
    const root = document.getElementById('root')
    const btn = document.getElementById('change-btn')


    btn.addEventListener('click',()=>{
        const bgClor = generateRGBcolor()
        root.style.background = bgClor
    })
}



// step 2 - generate random color generator


function generateRGBcolor(){
    let red = Math.floor(Math.random() * 255)
    let blue = Math.floor(Math.random() * 255)
    let green = Math.floor(Math.random() * 255)
    
    return `rgb(${red},${green},${blue})`
} 



// step 3 - collect all necessary reference


// step 4 = handle the click event


