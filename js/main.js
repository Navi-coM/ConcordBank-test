//---  Подгрузка картинок (Lazy Load)---------------

$(function() {
    $('.carousel.lazy-load').bind('slide.bs.carousel', 
    function (e) {
        var image = $(e.relatedTarget).find('img[data-src]');
        image.attr('src', image.data('src'));
        image.removeAttr('data-src');
    });
});


// ------- Настройки каруселей  ------------
$('#carouselExampleControls, #carouselExampleControls2').carousel({
  interval: 4000,
});


// --------- Аккордеон  ---------
