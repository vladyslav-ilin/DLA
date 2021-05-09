'use strict';

(function () {
   let button = document.querySelector('.button');
   button.addEventListener('click', toggleBtn);

   let openSelect = document.querySelector('.language__head');
   openSelect.addEventListener('click', addSelect);

   let itemSelect = document.querySelectorAll('.language__item');
   itemSelect.forEach(item => {
      item.addEventListener('click', choiseSelect);
   });

})();


function addSelect() {
   let addClass = document.querySelectorAll('.language');
   addClass.forEach(item => {
      item.addEventListener('click', toggleInput);
   });
}

function toggleInput() {
   this.classList.toggle('language--active');
};

function choiseSelect() {
   let text = this.innerText;
   let currentText = this.closest('.language').querySelector('.language__current')
   // console.log(currentText);
   currentText.innerText = text;

   addSelect();
}

function toggleBtn() {
   let btn = document.querySelector('.button');
   btn.classList.toggle('button--active');

   let nav = document.querySelector('.menu');
   nav.classList.toggle('menu--active');

}


function initMap() {
   //стили которые взяли с https://mapstyle.withgoogle.com/
   let coords, map, marker;
   coords = {
      lat: 55.75211631703949,
      lng: 37.638428537567975
   }
   map = new google.maps.Map(document.getElementById("map"), {
      center: coords,
      zoom: 17,
      disableDefaultUI: true,
   });

   marker = new google.maps.Marker({
      position: coords,
      map: map,
      title: 'DLA',
      animation: google.maps.Animation.DROP,
      draggable: true,
      icon: 'images/map-marker.png'
   })
}





(function($){
	$(document).ready(function() {
		// Code

	});
})(jQuery);
