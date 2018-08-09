$(document).ready(function(){
	
	$(function() {
		// Проверяем запись в куках о посещении
		// Если запись есть - ничего не происходит
		/*
		if (!$.cookie('hideModal')) {
			// если cookie не установлено появится окно
			// с задержкой 5 секунд
			var delay_popup = 1000;
			setTimeout("document.querySelector('.bottom__cookie-block').style.display='inline-block'", delay_popup);
		}
		*/
		$.cookie('hideModal', true, {
			// Время хранения cookie в днях
			expires: 30,
			path: '/'
		});
		
		
	});
	
	// Закрытие полосы cookie
	$('.ok').click(function(){
		$('.bottom__cookie-block').fadeOut();
		//$('.overlay').fadeOut();
		//$('html').css('overflow','auto');
	});
	
	
	// fix menu
	/*
    $(window).scroll(function(event) {
        if($(this).scrollTop() > 60) {
            $('.header_menu-block').addClass('fixed');
            return false;
        }
        else {
            $('.header_menu-block').removeClass('fixed');
        }
    });
	*/
	
	// Активный пункт меню при скролле
	$('.menu-top').onePageNav({
          currentClass: 'selected',
          changeHash: false,
          scrollSpeed: 750,
          scrollThreshold: 0.5,
          filter: '',
          easing: 'swing',
          begin: function() {
            //I get fired when the animation is starting
          },
          end: function() {
            //I get fired when the animation is ending
          },
          scrollChange: function($currentListItem) {
            //I get fired when you enter a section and I pass the list item of the section
          }
    });
	
	
	$('.menu-top').on("click", "a", function(event){
		event.preventDefault();
		var id = $(this).attr('href'),
		top = $(id).offset().top;
		$('body,html').animate({scrollTop: top}, 350);
	});
	
	
	
	
	// yandex map
	function init_map_contacts(){
		var сontMap = new ymaps.Map('contact-map', {
			center: [56.962980289473926,40.9475250423278],
			zoom: 16,
			//controls: ['zoomControl'],
		},
		{
			suppressMapOpenBlock: true
		});
		var placemark = new ymaps.Placemark([56.962980289473926,40.9475250423278],{

		},{
			iconLayout: 'default#image',
			//iconImageHref: 'images/contact-location.svg',
			//iconImageSize: [47, 74]
		});
		сontMap.geoObjects.add(placemark);

		сontMap.controls.add('zoomControl', { right: 20, top: 120 });
	}

	ymaps.ready(init_map_contacts);
	
});