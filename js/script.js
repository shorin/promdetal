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
	
	
	// tabs work
	$('.tabs .tabs-title a').click(function(){
		$('.tabs .tabs-title a').removeClass('selected');
		$(this).addClass('selected');
		var id = $(this).attr('href');
		$('.tabs .tabs-area .tab').hide();
		$('.tabs .tabs-area .tab' + id).show();
		
		return false;
	});
	
	// my gallery work
	$('.my-gallery').magnificPopup({
		delegate: 'a',
		type: 'image',
		tLoading: '',
		mainClass: '',
		gallery: {
			enabled: true,
			navigateByImgClick: true
		}
	});
	
	
	
	// yandex map
	function init_map_contacts(){
		var сontMap = new ymaps.Map('contact-map', {
			center: [56.96322809156016,40.95191560614712],
			zoom: 16,
			controls: ['zoomControl']
			//controls: ['zoomControl'],
		},
		{
			suppressMapOpenBlock: true
		});
		var placemark = new ymaps.Placemark([56.962980289473926,40.9475250423278],{
			balloonContent: 'г. Иваново, ул. Станкостроителей, 5',
			iconCaption: 'улица Станкостроителей, 5'
		},{
			preset: 'islands#redIcon',
		});
		сontMap.geoObjects.add(placemark);
		сontMap.behaviors.disable('scrollZoom')

		//сontMap.controls.add('zoomControl', { right: 20, top: 120 });
	}

	ymaps.ready(init_map_contacts);
	
	//close contact info
	
	$('.contacts .contact-map .contact-link-block .area .close').click(function(){
		$('.contacts .contact-map .contact-link-block').fadeOut();
	});
	
});