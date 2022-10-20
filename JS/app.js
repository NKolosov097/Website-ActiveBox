//  function MyFn() {

//     const header = document.getElementsByClassName("jsHeader")[0];
//     header.classList.add("fixed");

// }; 

$(function() { 

    /* Fixed Header */
    const header = $(".jsHeader");
    const intro = $(".jsIntro");
    let introHeight = intro.innerHeight();
    let scrollPosition = $(window).scrollTop();

    let nav = $(".jsNav");
    let navToggle = $(".jsNavToggle");

    checkScroll(scrollPosition, introHeight)
    
    $(window).on("scroll resize", function() {
        introHeight = intro.innerHeight();
        scrollPosition = $(this).scrollTop();
        
        checkScroll(scrollPosition, introHeight);
    });

    function checkScroll(scrollPosition, introHeight) {
        if (scrollPosition > introHeight) {
            header.addClass("fixed");
        } else {
            header.removeClass("fixed");
        }
    }

    /* Smooth scroll */
    $("[data-scroll]").on("click", function(event) {
        event.preventDefault(); 

        let elementId = $(this).data('scroll');
        let elementOffset = $(elementId).offset().top;

        nav.removeClass("show");

        $("html, body").animate({
            scrollTop: elementOffset - 80
        }, 700); //здесь значение указывается в милли сек

    });


    /* Navigation Toggle */
    navToggle.on("click", function(event) {
        event.preventDefault();

        nav.toggleClass("show");
    });


    /* Reviews: https://kenwheeler.github.io/slick/ */
    let slider = $(".reviewsSlider");

    slider.slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: true,
        arrows: false,
        dots: true 
    });
});