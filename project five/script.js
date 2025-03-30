const genBtn = document.getElementById('generateBtn')

const genPass = () => {
  const inputValue = document.getElementById('pass').value;

  const  charset = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$%^&*()0123456789'
  let randomcode = ''
  for(let i=0; i< inputValue; i++){
   const randomindex = Math.round(Math.random() * charset.length)
   const randomPass = charset[randomindex]

   randomcode += randomPass
   
   
  }
  document.getElementById('password').innerText = randomcode

}

genBtn.addEventListener('click',()=>{
    genPass()
})