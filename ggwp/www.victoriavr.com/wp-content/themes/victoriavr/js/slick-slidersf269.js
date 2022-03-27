jQuery(document).ready(function($) {

    // HP partners
    $hpPartners = $('.js-hp-cta');
    if ($hpPartners.length) {

        $hpPartners.slick({
            autoplay       : true,
            slidesToShow   : 5,
            slidesToScroll : 1,
            arrows         : false,
            fade           : false,
            dots           : false,
            speed          : 1000,
            adaptiveHeight : true,
            variableWidth  : true,
            swipeToSlide   : true,
            infinite       : true,
            centerMode     : false,
            // prevArrow : $('.slick-prev'),
            // nextArrow : $('.slick-next'),
            // appendArrows: $('.js-slick-arrows'),
            // dotsClass : 'slick-dots slick-dots--white'
            // responsive     : [
            //     {
            //         breakpoint     : 1024,
            //         settings : {
            //             slidesToShow   : 2.25,
            //             slidesToScroll : 1,
            //         }
            //     },
            //     {
            //         breakpoint     : 600,
            //         settings : {
            //             slidesToShow   : 1.5,
            //             slidesToScroll : 1,
            //         }
            //     },
            //     {
            //         breakpoint     : 400,
            //         settings : {
            //             slidesToShow   : 1.25,
            //             slidesToScroll : 1,
            //         }
            //     }
            // ]
        });
    };


    // Terms
    $faqTermList = $('.js-faq-term-list');
    if ($faqTermList.length) {

        $faqTermList.slick({
            autoplay       : false,
            slidesToShow   : 5,
            slidesToScroll : 1,
            arrows         : false,
            fade           : false,
            dots           : false,
            speed          : 1000,
            adaptiveHeight : false,
            variableWidth  : true,
            swipeToSlide   : true,
            infinite       : false,
            mobileFirst : true,
            // centerMode : true,
            // prevArrow : $('.slick-prev'),
            // nextArrow : $('.slick-next'),
            // appendArrows: $('.js-slick-arrows'),
            // dotsClass : 'slick-dots slick-dots--white'
            responsive     : [
                {
                    breakpoint     : 660,
                    settings : 'unslick',
                },
            ]
        });
    };

    //
    //
    // // Roadmap
    // $roadmap = $('.js-roadmap');
    // if ($roadmap.length) {
    //
    //     $roadmap.slick({
    //         autoplay       : false,
    //         slidesToShow   : 3,
    //         slidesToScroll : 1,
    //         arrows         : true,
    //         fade           : false,
    //         dots           : false,
    //         speed          : 1000,
    //         adaptiveHeight : false,
    //         variableWidth  : false,
    //         swipeToSlide   : true,
    //         infinite       : false,
    //         // prevArrow : $('.slick-prev'),
    //         // nextArrow : $('.slick-next'),
    //         // appendArrows: $('.js-slick-arrows'),
    //         // dotsClass : 'slick-dots slick-dots--white'
    //         // responsive     : [
    //         //     {
    //         //         breakpoint     : 840,
    //         //         settings : {
    //         //             slidesToShow   : 3.5,
    //         //             slidesToScroll : 1,
    //         //         }
    //         //     },
    //         //     {
    //         //         breakpoint     : 600,
    //         //         settings : {
    //         //             slidesToShow   : 2.75,
    //         //             slidesToScroll : 1,
    //         //         }
    //         //     },
    //         //     {
    //         //         breakpoint     : 400,
    //         //         settings : {
    //         //             slidesToShow   : 2.25,
    //         //             slidesToScroll : 1,
    //         //         }
    //         //     }
    //         // ]
    //     });
    // };

});
