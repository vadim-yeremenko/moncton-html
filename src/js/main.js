$(function() {

    'use strict';


    /*------------------------------------------
     Calling Functions
     ------------------------------------------*/

    $(document).ready(function () {
        incReviewsSlider();
        incFancybox();
        initGoogleMaps();
        hiddenSection();
    });


    /*------------------------------------------
     Defining Functions
     ------------------------------------------*/

    function incReviewsSlider(){
        $('.reviews-slider').slick({
            prevArrow: '<button type="button" class="slick-prev"></button>',
            nextArrow: '<button type="button" class="slick-next"></button>'
        });
    }

    function incFancybox(){
        $('[data-fancybox]').fancybox();
    }

    function initGoogleMaps(){
        var map = new google.maps.Map(document.getElementById('map'), {
            zoom: 10,
            center: {lat: 46.09799539, lng: -64.66800919},
            styles: [
                {
                    "featureType": "administrative",
                    "elementType": "labels.text.fill",
                    "stylers": [
                        {
                            "color": "#444444"
                        }
                    ]
                },
                {
                    "featureType": "administrative.neighborhood",
                    "elementType": "labels",
                    "stylers": [
                        {
                            "visibility": "off"
                        }
                    ]
                },
                {
                    "featureType": "landscape",
                    "elementType": "all",
                    "stylers": [
                        {
                            "color": "#f2f2f2"
                        }
                    ]
                },
                {
                    "featureType": "landscape.man_made",
                    "elementType": "labels",
                    "stylers": [
                        {
                            "visibility": "simplified"
                        }
                    ]
                },
                {
                    "featureType": "landscape.man_made",
                    "elementType": "labels.icon",
                    "stylers": [
                        {
                            "visibility": "simplified"
                        },
                        {
                            "hue": "#ff0000"
                        }
                    ]
                },
                {
                    "featureType": "poi",
                    "elementType": "all",
                    "stylers": [
                        {
                            "visibility": "off"
                        }
                    ]
                },
                {
                    "featureType": "road",
                    "elementType": "all",
                    "stylers": [
                        {
                            "saturation": -100
                        },
                        {
                            "lightness": 45
                        }
                    ]
                },
                {
                    "featureType": "road.highway",
                    "elementType": "all",
                    "stylers": [
                        {
                            "visibility": "simplified"
                        }
                    ]
                },
                {
                    "featureType": "road.highway",
                    "elementType": "labels.text.fill",
                    "stylers": [
                        {
                            "color": "#515252"
                        }
                    ]
                },
                {
                    "featureType": "road.highway",
                    "elementType": "labels.icon",
                    "stylers": [
                        {
                            "visibility": "on"
                        },
                        {
                            "hue": "#ff0000"
                        }
                    ]
                },
                {
                    "featureType": "road.arterial",
                    "elementType": "geometry",
                    "stylers": [
                        {
                            "visibility": "on"
                        },
                        {
                            "color": "#e8e8e8"
                        }
                    ]
                },
                {
                    "featureType": "road.arterial",
                    "elementType": "labels.text",
                    "stylers": [
                        {
                            "visibility": "on"
                        },
                        {
                            "color": "#3f3f3f"
                        }
                    ]
                },
                {
                    "featureType": "road.arterial",
                    "elementType": "labels.text.stroke",
                    "stylers": [
                        {
                            "visibility": "off"
                        }
                    ]
                },
                {
                    "featureType": "road.arterial",
                    "elementType": "labels.icon",
                    "stylers": [
                        {
                            "visibility": "off"
                        }
                    ]
                },
                {
                    "featureType": "transit",
                    "elementType": "all",
                    "stylers": [
                        {
                            "visibility": "off"
                        }
                    ]
                },
                {
                    "featureType": "water",
                    "elementType": "all",
                    "stylers": [
                        {
                            "color": "#abedf1"
                        },
                        {
                            "visibility": "on"
                        }
                    ]
                },
                {
                    "featureType": "water",
                    "elementType": "geometry.fill",
                    "stylers": [
                        {
                            "color": "#b5d4f5"
                        }
                    ]
                },
                {
                    "featureType": "water",
                    "elementType": "labels.text.fill",
                    "stylers": [
                        {
                            "color": "#ffffff"
                        }
                    ]
                }
            ]
        });

        var image = '../img/svg/map-marker.svg';
        var beachMarker = new google.maps.Marker({
            position: {lat: 46.09899539, lng: -64.67800919},
            map: map,
            icon: image
        });
    }
    function hiddenSection(){
        if($('.hidden-text_inner').height() > 200){
            $('.readmore-box_link').on('click', function(){
                $(this).parent().find('.hidden-text').toggleClass('show');
                if($(this).parent().find('.hidden-text').hasClass('show')){
                    $(this).find('span').text('Hide it');
                }else{
                    $(this).find('span').text('See more');
                }
                return false;
            })
        }else{
            $('.readmore-box_link').hide();
        }

    }

});