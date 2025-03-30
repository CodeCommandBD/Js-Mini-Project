let userTime;
let timerInterval;

const timerDis = document.getElementById('time')
const startbtn = document.getElementById('start-btn')
const stopbtn = document.getElementById('stop-btn')


const startTimer = (duration) =>{
    let reciveTime = duration

   timerInterval = setInterval(()=>{
        const min = parseInt(reciveTime / 60, 10)
        const sec = parseInt(reciveTime % 60, 10)

        const disMin = min < 10 ? '0' + min : min;
        const disSec = sec < 10 ? '0' + sec : sec;


        timerDis.innerText = `${disMin} : ${disSec}`

        if(--reciveTime<0){
            clearInterval(timerInterval)
            timerDis.innerText = 'Breath out'

            setTimeout(()=>{
                timerDis.innerText = 'Breath In'
                startTimer(userTime)
            },3000)
        }

    },1000)

}


startbtn.addEventListener('click',()=>{
    userTime = 10;
    startTimer(userTime)
})
stopbtn.addEventListener('click',()=>{
    clearInterval(timerInterval)
    timerDis.innerText = 'Breath in'
})
