import './css/tailwind.css';
import 'alpinejs';

// start open hamburger

let hamburger = document.getElementById('hamburgerbtn');

let mobileMenu = document.getElementById('mobileMenu');

hamburger.addEventListener('click', function() {
	mobileMenu.classList.toggle('active');
});

// end open hamburger
