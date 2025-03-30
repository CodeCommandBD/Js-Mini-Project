document.addEventListener('DOMContentLoaded',()=>{
    const quotes = [
        'Ajourney of a thousand miles begins with a single step',
        'To be or not be, that is the question',
        'All that glitters is not gold',
        'The quick brown fox jumps over the lazy dog',
        'The only thing we have to fear is fear itself'
    ]

    const quoteDis = document.getElementById('quote')
    const quoteInput = document.getElementById('textBox')
    const startBtn = document.getElementById('startBtn')
    const show =document.getElementById('show')


    let quoteShow;
    let startTime;

    startBtn.addEventListener('click',startTest)
    quoteInput.addEventListener('input', checkInput)

    function startTest(){
       const randomIndex = Math.floor(Math.random() * quotes.length);
       quoteShow = quotes[randomIndex]
       quoteDis.innerText = quoteShow
       quoteInput.removeAttribute("disabled")
       quoteInput.focus()
       quoteInput.value = ''
       show.innerText = ''
       
       startTime = new Date().getTime()
       
    }
    function checkInput(){
        const type = quoteInput.value;

        if(type === quoteShow){
            const endTime = new Date().getTime();
            const timeTaken = (endTime - startTime) / 1000;

            const perWord = type.split(' ').length / timeTaken * 60

            show.innerText = `you type at ${perWord.toFixed(2)} words per minute.`
            
        }
    }


})