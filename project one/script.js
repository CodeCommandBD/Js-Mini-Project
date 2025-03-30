let UserTime;
let timerInterval;

let isRuning = false

const timerDis = document.getElementById('time')
const startbtn = document.getElementById('start-btn')
const stopbtn = document.getElementById('stop-btn')


const startTimer = (duration) => {
    let timer = duration
    timerInterval = setInterval(() => {
        const min = parseInt(timer / 60, 10);
        const sec = parseInt(timer % 60, 10);

        const dismin = min < 10 ? '0' + min : min
        const dissec = sec < 10 ? '0' + sec : sec

        timerDis.innerText = `${dismin} : ${dissec}`

        if (--timer < 0) {
            clearInterval(timerInterval)
            timerDis.textContent = 'Breath out'

            setTimeout(() => {
                timerDis.textContent = 'Breath In'
                startTimer(UserTime)
            }, 3000)
        }


    }, 1000)


}


startbtn.addEventListener('click', () => {
    if (!isRuning) {
        UserTime = 5
        startTimer(UserTime)
        isRuning = true
    }
})
stopbtn.addEventListener('click', () => {
    clearInterval(timerInterval)
    timerDis.textContent = 'Breath In'
    isRuning = false
})
