'use strict';

(function() {
   let button = document.querySelector('.button');
   button.addEventListener('click', toggleBtn);
})();

function toggleBtn() {
   let btn = document.querySelector('.button');
   btn.classList.toggle('button--active');

   let nav = document.querySelector('.menu');
   nav.classList.toggle('menu--active');
   
}

(function($){
	$(document).ready(function() {
		// Code

	});
})(jQuery);
