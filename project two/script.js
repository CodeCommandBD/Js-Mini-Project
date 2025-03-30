

const extBtn = document.getElementById('extract-btn')
const imgInput = document.getElementById('imginput')
const showText = document.getElementById('show-text')


extBtn.addEventListener('click',()=>{
   const imgFile =  imgInput.files[0];
   if(!imgFile){
    showText.innerText = 'Please select an image file'
    return;
   }

   Tesseract.recognize(
    imgFile,
    'ben'
   ).then(({data})=>{
    showText.textContent = data.text;
   }).catch((error)=>{
    console.error('error',error);
    outPutDiv.textContent = 'error';
   })
})
