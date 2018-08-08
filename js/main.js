nextOrPrevSlide(1);
slideCount();

function showOrderForm () {
	let orderForm = document.getElementById('odr-frm');
	let button = document.getElementById('btn-submit');
	orderForm.style.visibility = 'visible';
	button.style.visibility = 'visible';
	orderForm.classList.add('show-form');
	setTimeout(()=>{
		orderForm.classList.remove('show-form');
	}, 900);
}

function hideOrderForm () {
	let orderForm = document.getElementById('odr-frm');
	let button = document.getElementById('btn-submit');
	orderForm.classList.add('hide-form');	
	button.style.visibility = 'hidden';
	setTimeout(()=>{
		orderForm.style.visibility = 'hidden';
		
		orderForm.classList.remove('hide-form');
	},500);
}

function activateNav (clickedEl) {
	let ul = clickedEl.parentElement.parentElement.getElementsByTagName('li');
	for(let el of ul){
		el.className = '';
	}
	clickedEl.parentElement.className = 'active';
}

function changeSlide (slideIndex) {	
	let bigSlides = document.getElementsByClassName('main-img');
	let smallSlides = document.getElementsByClassName('mini-img');
	let title = document.getElementsByClassName('title');
	for(let elT of title){
		elT.style.display = 'none';
	};
	for(let elB of bigSlides){
		elB.style.display = 'none';
	};
	for(let elS of smallSlides){
		elS.style.display = 'none';
	};
	bigSlides[slideIndex].style.display = 'block';
	smallSlides[slideIndex].style.display = 'block';
	title[slideIndex].style.display = 'block';
}

function nextOrPrevSlide (n) {
	let currentSlideIndex = parseInt(document.getElementById('slide-number').innerText) - 1;	
	let bigSlides = document.getElementsByClassName('main-img');	
	let nextIndex = currentSlideIndex + n;
	let numberSlide = nextIndex + 1;
	if(nextIndex >= bigSlides.length){
		nextIndex = 0;
	}
	if(nextIndex < 0){
		nextIndex = bigSlides.length - 1;
	}
	if(numberSlide <= 0){
		numberSlide = bigSlides.length;
	}
	if(numberSlide > bigSlides.length){
		numberSlide = 1;
	}
	document.getElementById('slide-number').innerText = numberSlide;
	changeSlide(nextIndex);
}

function slideCount () {
	let bigSlides = document.getElementsByClassName('main-img');
	document.getElementById('slide-count').innerText = ' - ' + bigSlides.length;
}