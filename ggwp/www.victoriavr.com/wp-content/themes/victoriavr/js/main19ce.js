(function($){

    /* Menu scroll up */
    var $menuWrapper  = $('.js-top-bar'),
        menuPosition  = $menuWrapper.offset().top,
        lastScrollTop = 0,
        delta         = 5,
        navbarHeight  = $menuWrapper.outerHeight(),
        didScroll;

    $(window).on("scroll load resize", function(event){
        didScroll = true;

        if ($(this).scrollTop() > 50 ) {
            $menuWrapper.addClass('smaller');
        } else {
            $menuWrapper.removeClass('smaller');
        }

    });

})(jQuery);

jQuery(document).ready(function($) {

    var $popup               = $('.js-popup'),
        $closePopup          = $('.js-close-popup'),
        $openPopup           = $('.js-open-popup'),
        $popupOutsideContent = $('.js-popup-outside-content');
        $popupContent        = $('.js-popup-content');

    $openPopup.on('click', function(e) {
        e.preventDefault();

        var $this     = $(this),
            field     = $this.attr('data-acf-field'),
            id        = $this.attr('data-page-id');

        $.ajax({
            url: load_popups.ajaxurl,
            type: 'POST',
            dataType: 'json',
            data: {
                action    : 'load_popups_function',
                'field'   : field,
                'id'      : id,
            },
            beforeSend: function() {
                $popupContent.empty();
                $popup.addClass('visible');
            },
            success: function (returnedContent) {

                var $content = $(returnedContent.content);

                $popupContent.append($content);

                setTimeout(function() {
                    $popupOutsideContent.addClass('visible');
                }, 100);

            }
        });
    });

    $closePopup.on('click', function() {
        closePopup();
    });

    $popup.click(function (e) {
        if (!$(e.target).parents().andSelf().is('.popup__inside-wrapper')) {
            closePopup();
        }
    });

    function closePopup() {
        $popup.removeClass('visible');

        setTimeout(function() {
            $popupOutsideContent.removeClass('visible');
        }, 100);

        // Cookie na popup
        document.cookie = "popupStatus%3dclosed%3b%20path%3d/index.html";
    }

    // var $jsPresalePopup = $('.js-presale-popup');
    // $jsPresalePopup.on('click', function(e) {
    //     e.preventDefault();
    //     $popup.addClass('visible');
    //
    //     setTimeout(function() {
    //         $popupOutsideContent.addClass('visible');
    //     }, 100);
    // });



    // Mobile Menu
    var $mobileMenu      = $('.js-mobile-menu'),
        $openMobileMenu  = $('.js-mobile-menu-button'),
        $closeMobileMenu = $('.js-close-mobile-menu'),
        $mobileMenuItem  = $('.mobile-menu-wrapper'),
        $body            = $('body');

    $openMobileMenu.on('click', function() {
        $mobileMenu.addClass('visible');
        $body.addClass('no-scroll');
    });

    $closeMobileMenu.on('click', function() {
        closeMobileMenu();
    })

    $mobileMenuItem.on('click', function() {
        closeMobileMenu();
    });

    function closeMobileMenu() {
        $mobileMenu.removeClass('visible');
        $body.removeClass('no-scroll');
    }


    // FAQ
    var $faqTitle = $('.js-faq-title');
    $faqTitle.on('click', function() {
        var $this = $(this);
        $this.toggleClass('active');
        $this.next().slideToggle();
    });



    // Scroll To
	$('a[href*="#"]:not([href="#"])').click(function(e) {
		// var href = $(this).attr('href');
		if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
			var target = $(this.hash);
			target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
			if (target.length) {
				$('html, body').animate({
					scrollTop: target.offset().top - 80
				}, 1000);
			}
			e.preventDefault();
		}
	});

    if ($popup.length) {

        function getCookie(name) {
            var dc = document.cookie;
            var prefix = name + "=";
            var begin = dc.indexOf("; " + prefix);
            if (begin == -1) {
                begin = dc.indexOf(prefix);
                if (begin != 0) return null;
            }
            else
            {
                begin += 2;
                var end = document.cookie.indexOf(";", begin);
                if (end == -1) {
                    end = dc.length;
                }
            }
            return decodeURI(dc.substring(begin + prefix.length, end));
        }
        function checkCookie() {
            var myCookie = getCookie("popupStatus");
            if (myCookie == null) {

                setTimeout(function() {
                    $popup.addClass('visible');

                    setTimeout(function() {
                        $popupOutsideContent.addClass('visible');
                    }, 300);

                }, 1000);

            }
        }
        checkCookie();

    }



    // Změna obrázku podle času
    window.setInterval(SetImage, 60*60*10);   /* set this to at least 10 min */

    var $dayImage = $('.js-image-day'),
        $nightImage = $('.js-image-night');

    function SetImage(){
        var now = new Date();

        var dayTime = new Date();
        dayTime.setHours(5);
        dayTime.setMinutes(0);

        var nightTime = new Date();
        nightTime.setHours(22);
        nightTime.setMinutes(30);

        $dayImage.removeClass('visible');
        $nightImage.removeClass('visible');

        if (dayTime < now  && now < nightTime) {
            // document.body.setAttribute('data-daytime','');
            $dayImage.addClass('visible');
        } else{
            $nightImage.addClass('visible');
            // document.body.setAttribute('data-nighttime','');

        }
    }

    SetImage();










    // Partners popup

    var $partnersPopup = $('.js-partners-popup'),
        $openPartnersPopup = $('.js-open-partners-popup');
    $openPartnersPopup.on('click', function() {
        var $this = $(this),
            data = $this.data('index');

        $partnersPopup.removeClass('visible');
        $('.js-partners-popup[data-index="' + data +'"]').addClass('visible');
    });

    var $closePartnersPopup = $('.js-close-partners-popup');
    $closePartnersPopup.on('click', function() {
        $(this).parents('.js-partners-popup').removeClass('visible');
    });
});
