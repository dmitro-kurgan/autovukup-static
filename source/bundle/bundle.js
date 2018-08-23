import '../components/scss/style.scss';

import '../components/js/bootstrap.min'

import '../components/js/bootstrap-select';

import '../components/js/map.js';


import '../../node_modules/fullpage.js/dist/fullpage.min.css';

import '../../node_modules/wowjs/css/libs/animate.css';
// import '../../node_modules/fullpage.js/dist/fullpage.min.js';

const fullpage = require('fullpage.js');

new fullpage('#fullpage', {
    verticalCentered: true,
    menu: '#menu',
    responsiveWidth: 992,
    responsiveHeight: 620,
    anchors: ['anchor1', 'anchor2', 'anchor3']
});

import 'slick-carousel';

var slickMain = $('.slick-main')

// slickMain.slick({
// 	infinite: true,
// 	dots: true,
// 	arrows: false,
// 	fade: true,
// 	slidesToShow: 1,
// 	slidesToScroll: 1
// });

$(document).ready(function() {
    $('.slick-main').on('init', function(e, slick) {
        var $firstAnimatingElements = $('div.hero-slide:first-child').find('[data-animation]');
        doAnimations($firstAnimatingElements);    
    });
    $('.slick-main').on('beforeChange', function(e, slick, currentSlide, nextSlide) {
        var $animatingElements = $('div.slick-slide[data-slick-index="' + nextSlide + '"]').find('[data-animation]');
        doAnimations($animatingElements);    
    });
    $('.slick-main').slick({
       autoplay: true,
       autoplaySpeed: 3000,
       dots: true,
       arrows: false,
       fade: true
    });
    function doAnimations(elements) {
        var animationEndEvents = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
        elements.each(function() {
            var $this = $(this);
            var $animationDelay = $this.data('delay');
            var $animationType = 'animated ' + $this.data('animation');
            $this.css({
                'animation-delay': $animationDelay,
                '-webkit-animation-delay': $animationDelay
            });
            $this.addClass($animationType).one(animationEndEvents, function() {
                $this.removeClass($animationType);
            });
        });
    }
});

//RADIO
$('.radio').click(function() {
	if($(this).find('input').attr('checked', true)) {
        $('.radio').removeClass('active');
		$('.radio').find('input').removeAttr('checked');
        $(this).addClass('active');
		$(this).find('input').attr('checked', true);
	}
});

//SVG
jQuery('img.svg').each(function(){
    var $img = jQuery(this);
    var imgID = $img.attr('id');
    var imgClass = $img.attr('class');
    var imgURL = $img.attr('src');

    jQuery.get(imgURL, function(data) {
        var $svg = jQuery(data).find('svg');

        if(typeof imgID !== 'undefined') {
            $svg = $svg.attr('id', imgID);
        }

        if(typeof imgClass !== 'undefined') {
            $svg = $svg.attr('class', imgClass+' replaced-svg');
        }

        $svg = $svg.removeAttr('xmlns:a');

        if(!$svg.attr('viewBox') && $svg.attr('height') && $svg.attr('width')) {
            $svg.attr('viewBox', '0 0 ' + $svg.attr('height') + ' ' + $svg.attr('width'))
        }

        $img.replaceWith($svg);

    }, 'xml');

}); 

$(window).on('load', function() {
    $('img.svg').css('opacity', '1')
});

//FORM

$('.btn--order').click(function(e) {
    e.preventDefault();
    $('#orderForm').addClass('opened');
});

$('#orderFormClose').click(function(e) {
    e.preventDefault();
    $('#orderForm').removeClass('opened');
});

$('#orderSuccessClose').click(function(e) {
    e.preventDefault();
    $('#orderSuccess').removeClass('opened');
});

//MENU

$('#hamburger').click(function() {
    $(this).toggleClass('opened');
    $('#headerMenu').toggleClass('opened');
});

$('#menu > li > a').click(function() {
    $('#headerMenu').removeClass('opened');
});

//CONTACTS

$('#contactsDropdown').click(function() {
    $(this).toggleClass('opened');
    $('#headerTop').addClass('opened');
});

$('#headerContactsClose').click(function() {
    $('#headerTop').removeClass('opened');
})