/**
 * Project Requirements:
 * - Change the background color by generating random hex color by clicking a button
 * - Also display the hex code to a disabled input field
 *  ADD a button to copy the color code
 *  
 */

// Steps

// Step 1 - create onload handler
window.onload = () => {
	main();
};

function main() {
	const root = document.getElementById('root');
	const btn = document.getElementById('change-btn');
	const output = document.getElementById('output');
	const copy = document.getElementById('copy-btn');

	btn.addEventListener('click', function () {
		const bgColor = generateHexColor();
		root.style.backgroundColor = bgColor;
		output.value = bgColor;
	});


	// copy btn
    copy.addEventListener('click', ()=>{
        navigator.clipboard.writeText(output.value)

		if(isValid(output.value)){
			genarateToast(`${output.value} copyed`)
		}else{
			alert('Invalid color code')
		}

    })

	output.removeAttribute('disabled')
	// custom input value setup
	output.addEventListener('keyup',(e)=>{
		
		const color = e.target.value
		console.log(color);
		
		if(color && isValid(color)){
			root.style.backgroundColor = color;
		}
	})
	
}

// step 2 - random color generator function
function generateHexColor() {
	// #000000 #ffffff
	// 255, 255, 255 -> #FFFFFF
	const red = Math.floor(Math.random() * 255);
	const green = Math.floor(Math.random() * 255);
	const blue = Math.floor(Math.random() * 255);

	return `#${red.toString(16)}${green.toString(16)}${blue.toString(16)}`;
}

// toast when click copy

function genarateToast(msg){
	const div = document.createElement('div')
	div.innerText = msg
	div.classList = 'toast-message toast-message-slide-in'


	setTimeout(()=>{
		div.classList.remove('toast-message-slide-in')
		div.classList.add('toast-message-slide-out')

		div.addEventListener('animationend',()=>{
			div.remove()
		})
	},1000)

	document.body.appendChild(div)
}



function isValid(color){
	if( color.length !== 7  ) return false
	if(color[0] !== '#') return false
	color = color.substring(1)
	return /^[0-9A-Fa-f]{6}$/i.test(color)
}


// step 3 - collect all necessary references

// step 4 - handle the change button click event

// step 5 - handle the copy button click event

// step 6 - Active toast message

// step 7 - create a dynamic toast message

// step 8 - clear toast message

// step 9 - create isHaxvalid function

// step 10 - input customly change heandler on input field

// step 11 -  prevent copy hax code if it is not valid




