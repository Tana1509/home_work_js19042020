jQuery(document).ready(function ($) {
    // nav
    let menuBtn = $(".header__burger");
    console.log(menuBtn);
    menuBtn.on("click", function () {
        let navigation = $(".header__nav");
        navigation.toggleClass("active");
    });
    //map
    function myMap() {
        var mapCanvas = document.getElementById("map");
        var mapOptions = {
            center: new google.maps.LatLng(51.5, -0.2), zoom: 10
        };
        var map = new google.maps.Map(mapCanvas, mapOptions);
//header__slider
        $(".slides").owlCarousel({
            loop: true,
            margin: 10,
            responsiveClass: true,
            responsive: {
                0: {
                    items: 1,
                    nav: true
                },
                // 600: {
                //     items: 3,
                //     nav: false
                },
                1000: {
                    items: 2,
                    nav: true,
                    loop: false
                }
            }
        });

    }});
