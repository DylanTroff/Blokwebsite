// JavaScript Document


/*var vooruitButton = document.querySelector('#voor');
var achteruitButton = document.querySelector('#terug');
var slider = document.querySelector('.slider-img');
var foto = ['speler.00', 'speler.01', 'speler.02', 'speler.03'];
var i = 0;

function prev(){
	if(i <= 0) i = foto.length;	
	i--;
	return setImg();			 
}

function next(){
	if(i >= foto.length-1) i = -1;
	i++;
	return setImg();			 
}

function setImg(){
	
	return slider.setAttribute('src', 'images/' +foto[i]);
}


vooruitButton.addEventListener('click' , next );
achteruitButton.addEventListener('click' , prev );
*/


// Kleuren uittenue//


var kleurButton = document.querySelector('.uitbutton');
kleurButton.addEventListener('click' , veranderKleur );

function veranderKleur(){
    console.log('Hoop');
    document.body.classList.toggle("uitshirt");
    
}