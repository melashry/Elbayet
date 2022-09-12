/*
    Description: This is Bootstrap4 html5 template
    Version: 1.0

*/

(function ($) {
	"use Strict";


    //Hide Loading Box (Preloader)
    $(window).on('load',function(){
        setTimeout(function(){ // allowing 3 secs to fade out loader
        $('.page-loader').fadeOut('slow');
        },3500);
    });
/*---------------------------------
    Mean Menu Active
-----------------------------------*/
jQuery('.header-menu-area nav').meanmenu({
    meanMenuContainer: '.mobile-menu',
    meanScreenWidth: "991"
})

/*---------------------------------
    Sticky Menu Active
-----------------------------------*/
$(window).on('scroll',function() {
if ($(this).scrollTop() >50){  
    $('.header-sticky').addClass("is-sticky");
  }
  else{
    $('.header-sticky').removeClass("is-sticky");
  }
});  
/*---------------------------- 
    Sidebar Search Active
-----------------------------*/
function sidebarSearch() {
    var searchTrigger = $('li .sidebar-trigger-search'),
        endTriggersearch = $('button.search-close'),
        container = $('.main-search-active');

    searchTrigger.on('click', function() {
        container.addClass('inside');
    });

    endTriggersearch.on('click', function() {
        container.removeClass('inside');
    });

};
sidebarSearch();
/*----------------------------
    ** Owl Active **
------------------------------ */
/*----------
     Hero Slider Active
------------------------------*/
$('.hero-slider').owlCarousel({
    smartSpeed: 1000,
    nav: true,
    loop: true,
    rtl:true,
    autoplay: false,
    navText: ['<i class="fas fa-angle-left"></i>', '<i class="fas fa-angle-right"></i>'],
    responsive: {
        0: {
            items: 1,
            autoplay: true,
            nav: false
        },
        600: {
            items: 1
        },
        1000: {
            items: 1
        }
    }
})
/*------- 
    Product Slider Active 
----------------------------------*/
 $('.product-slider').owlCarousel({
    smartSpeed: 1000,
    nav: true,
    rtl:true,
    navText: ['<span class="fs1" data-icon="&#x34;"></span>', '<span class="fs1" data-icon="&#x35;"></span>'],
    responsive: {
        0: {
            items: 1,
            nav: false
        },
        480: {
            items: 2
        },
        768: {
            items: 2
        },
        992: {
            items: 3
        },
        1200: {
            items: 4
        }
    }
})
/*------- 
    Deal Product Slider Active 
----------------------------------*/
 $('.deal-produt-slider').owlCarousel({
    smartSpeed: 1000,
    nav: true,
    navText: ['<span class="fs1" data-icon="&#x34;"></span>', '<span class="fs1" data-icon="&#x35;"></span>'],
    responsive: {
        0: {
            items: 1,
            nav: false
        },
        480: {
            items: 1
        },
        768: {
            items: 1
        },
        992: {
            items: 1
        },
        1200: {
            items: 1
        }
    }
})
/*------- 
    Blog Slider Active 
----------------------------------*/
 $('.blog-slider').owlCarousel({
    smartSpeed: 1000,
    nav: true,
    navText: ['<span class="fs1" data-icon="&#x34;"></span>', '<span class="fs1" data-icon="&#x35;"></span>'],
    responsive: {
        0: {
            items: 1
        },
        480: {
            items: 1
        },
        768: {
            items: 2
        },
        992: {
            items: 3
        },
        1200: {
            items: 3
        }
    }
})
/*--------------------------------
loading blog
---------------------------------*/
"use strict";

const card = document.querySelector(".card");
const cardImageWrapper = document.querySelector(".img-cont");
const cardAvatarWrapper = document.querySelector(".user-avatar-cont");
const cardImageElement =
  '<img class="img" src="https://images.unsplash.com/photo-1594398028856-f253a046f417?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1189&q=80" alt="Food image" />';
const cardAvatarElement =
  '<img src="https://i.ibb.co/JzNYHV9/image-1.jpg" alt="User Image" class="user-avatar-img" />';

const setPlaceholder = () => {
  if (!card.classList.contains("card--skeleton"));
  card.classList.add("card--skeleton");
  cardImageWrapper.innerHTML = "";
  cardAvatarWrapper.innerHTML = "";
};

const unsetPlaceholder = () => {
  if (
    card.classList.contains("card--skeleton") &&
    cardImageWrapper.children.length === 0 &&
    cardAvatarWrapper.children.length === 0
  ) {
    card.classList.remove("card--skeleton");
    cardImageWrapper.innerHTML += cardImageElement;
    cardAvatarWrapper.innerHTML += cardAvatarElement;
  }
};

const reload = (ms) => {
  ms = ms || 3000;

  setPlaceholder();

  setTimeout(() => {
    unsetPlaceholder();
  }, ms);
};

document.addEventListener("DOMContentLoaded", function () {
  reload(2000);
});


/*------- 
    List Product Slider Active 
----------------------------------*/
 $('.list-product-slider').owlCarousel({
    smartSpeed: 1000,
    nav: false,
    navText: ['<span class="fs1" data-icon="&#x34;"></span>', '<span class="fs1" data-icon="&#x35;"></span>'],
    responsive: {
        0: {
            items: 1
        },
        480: {
            items: 1
        },
        768: {
            items: 2
        },
        992: {
            items: 1
        },
        1200: {
            items: 1
        }
    }
})
/*------- 
    Modal Slider Active 
----------------------------------*/
 $('.single-slide-menu').owlCarousel({
        smartSpeed: 1000,
        nav: false,
        responsive: {
            0: {
                items: 3
            },
            450: {
                items: 3
            },
            768: {
                items: 4
            },
            1000: {
                items: 4
            },
            1200: {
                items: 4
            }
        }
    });
//$('.modal').on('shown.bs.modal', function (e) {
//    $('.single-slide-menu').resize();
//})
    
$('.single-slide-menu a').on('click',function(e){
  e.preventDefault();

  var $href = $(this).attr('href');

  $('.single-slide-menu a').removeClass('active');
  $(this).addClass('active');

  $('.product-details-large .tab-pane').removeClass('active show');
  $('.product-details-large '+ $href ).addClass('active show');

})
/*-----------------------------------------------
  17.  product-details-slider
-------------------------------------------------*/
  $('.slider-box').owlCarousel({
      loop: true,
      margin:20,
      nav:true,
      navText: [ '<span class="fs1" data-icon="&#x34;"></span>', '<span class="fs1" data-icon="&#x35;"></span>' ],
      items:3,
      responsive:{
        0:{
          items:1
        },
        600:{
          items:2
        },
        800:{
          items:2
        },
        1024:{
          items:3
        },
        1200:{
          items:3
        },
        1400:{
          items:3
        },
        1920:{
          items:3
        }
      }
    });
/*------- 
    Countdown Product Slider Active 
----------------------------------*/
 $('.countdown-product-slider').owlCarousel({
    smartSpeed: 1000,
    nav: false,
    navText: ['<span class="fs1" data-icon="&#x34;"></span>', '<span class="fs1" data-icon="&#x35;"></span>'],
    responsive: {
        0: {
            items: 1
        },
        480: {
            items: 1
        },
        768: {
            items: 2
        },
        992: {
            items: 3
        },
        1200: {
            items: 3
        }
    }
})
/*------- 
    Testimonial Slider Active 
----------------------------------*/
 $('.testimonial-slider').owlCarousel({
    smartSpeed: 1000,
    nav: false,
    rtl:true,
    navText: ['<span class="fs1" data-icon="&#x34;"></span>', '<span class="fs1" data-icon="&#x35;"></span>'],
    responsive: {
        0: {
            items: 1
        },
        480: {
            items: 1
        },
        768: {
            items: 1
        },
        992: {
            items: 1
        },
        1200: {
            items: 1
        }
    }
})

/*----------------------------------
     upload image
-----------------------------------*/
function readURL(input) {
    if (input.files && input.files[0]) {
        var reader = new FileReader();
        reader.onload = function(e) {
            $('#imagePreview').css('background-image', 'url('+e.target.result +')');
            $('#imagePreview').hide();
            $('#imagePreview').fadeIn(650);
        }
        reader.readAsDataURL(input.files[0]);
    }
}
$("#imageUpload").change(function() {
    readURL(this);
});
/*----------------------------------
     multi select option
-----------------------------------*/

/*----------------------------------- 
    Count Down Active 
----------------------------------*/ 
$('[data-countdown]:not(.pro-countdown-1)').each(function() {
	var $this = $(this), finalDate = $(this).data('countdown');
	$this.countdown(finalDate, function(event) {
		$this.html(event.strftime('<div class="single-countdown-box"><span>%D</span>Day</div><div class="single-countdown-box"><span>%H</span>Hours</div><div class="single-countdown-box"><span>%M</span>Mins</div><div class="single-countdown-box"><span>%S</span>Secs</div>'));
	});
});
/*----------------------------------- 
    Count Down Active 
----------------------------------*/ 
$('[data-countdown].pro-countdown-1').each(function() {
	var $this = $(this), finalDate = $(this).data('countdown');
	$this.countdown(finalDate, function(event) {
		$this.html(event.strftime('<div class="single-countdown-box-1"><span>%D</span>Day</div><div class="single-countdown-box-1"><span>%H</span>Hours</div><div class="single-countdown-box-1"><span>%M</span>Mins</div><div class="single-countdown-box-1"><span>%S</span>Secs</div>'));
	});
});
/*--------
    Brand Active
----------------------------------*/
 $('.brand-active').owlCarousel({
        smartSpeed: 1000,
        nav: false,
        rtl:true,
        navText: ['<span class="fs1" data-icon="&#x34;"></span>', '<span class="fs1" data-icon="&#x35;"></span>'],
        responsive: {
            0: {
                items: 2
            },
            450: {
                items: 3
            },
            768: {
                items: 4
            },
            1000: {
                items: 5
            },
            1200: {
                items: 6
            }
        }
})
/*--------
    Blog Slider Active
----------------------------------*/
    var blogSlider = $('.blog-image-gallery');
    blogSlider.slick({
        arrows: true,
        autoplay: true,
        autoplaySpeed: 2000,
        dots: false,
        pauseOnFocus: true,
        pauseOnHover: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScoll: 1,
        prevArrow: '<button type="button" class="slick-prev"> <i class="fa fa-angle-left"></i> </button>',
        nextArrow: '<button type="button" class="slick-next"><i class="fa fa-angle-right"></i></button>',
        
    });
/*----------------------------------
    ScrollUp Active
-----------------------------------*/
$.scrollUp({
    scrollText: '<i class="fa fa-angle-double-up"></i>',
    easingType: 'linear',
    scrollSpeed: 900,
    animation: 'fade'
});
/*------------------------------ 
    Nice Select Active
---------------------------------*/
$('select').niceSelect();
/*--------------------------------
    Price Slider Active
-------------------------------- */
var sliderrange = $('#slider-range');
var amountprice = $('#amount');
$(function() {
    sliderrange.slider({
        range: true,
        min: 20,
        max: 100,
        values: [0, 100],
        slide: function(event, ui) {
            amountprice.val("$" + ui.values[0] + " - $" + ui.values[1]);
        }
    });
    amountprice.val("$" + sliderrange.slider("values", 0) +
        " - $" + sliderrange.slider("values", 1));
});
/*----------------------------------- 
    Single Product Slide Menu Active 
--------------------------------------*/  
$('.product-details-images').each(function(){
        var $this = $(this);
        var $thumb = $this.siblings('.product-details-thumbs');
        $this.slick({
            arrows: false,
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: false,
            autoplaySpeed: 5000,
            dots: false,
            infinite: true,
            centerMode: false,
            centerPadding: 0,
            asNavFor: $thumb,
            rtl:true
        });
    });
    $('.product-details-thumbs').each(function(){
        var $this = $(this);
        var $details = $this.siblings('.product-details-images');
        $this.slick({
            slidesToShow: 4,
            slidesToScroll: 1,
            autoplay: false,
            autoplaySpeed: 5000,
            dots: false,
            infinite: true,
            focusOnSelect: true,
            centerMode: true,
            centerPadding: 0,
            rtl:true,
            prevArrow: '<span class="slick-prev"><i class="fa fa-angle-left"></i></span>',
            nextArrow: '<span class="slick-next"><i class="fa fa-angle-right"></i></span>',
            asNavFor: $details,
            responsive: [
            {
              breakpoint: 1024,
              settings: {
              }
            },
            {
              breakpoint: 600,
              settings: {
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 2,
              }
            }
          ]
            
        });
    });
 /* Product Details 2 Images Slider */
    $('.product-details-images-2').each(function(){
        var $this = $(this);
        var $thumb = $this.siblings('.product-details-thumbs-2');
        $this.slick({
            arrows: false,
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: false,
            autoplaySpeed: 5000,
            dots: false,
            infinite: true,
            centerMode: false,
            centerPadding: 0,
            asNavFor: $thumb,
        });
    });
    $('.product-details-thumbs-2').each(function(){
        var $this = $(this);
        var $details = $this.siblings('.product-details-images-2');
        $this.slick({
            arrows: true,
            slidesToShow: 3,
            slidesToScroll: 1,
            autoplay: false,
            autoplaySpeed: 5000,
            vertical:true,
            verticalSwiping:true,
            dots: false,
            infinite: true,
            focusOnSelect: true,
            centerMode: false,
            centerPadding: 0,
            prevArrow: '<span class="slick-prev"><i class="fa fa-angle-up"></i></span>',
            nextArrow: '<span class="slick-next"><i class="fa fa-angle-down"></i></span>',
            asNavFor: $details,
            responsive: [
            {
              breakpoint: 1200,
              settings: {
                slidesToShow: 2,
              }
            },
            {
              breakpoint: 991,
              settings: {
                slidesToShow: 4,
              }
            },
            {
              breakpoint: 767,
              settings: {
                slidesToShow: 4,
              }
            },
            {
              breakpoint: 479,
              settings: {
                slidesToShow: 2,
              }
            }
        ]
        });
    });
/*------------------------------ 
    Toggle Function Active
---------------------------------*/   
/*--- showlogin toggle function ----*/
    $('#showlogin').on('click', function() {
        $('#checkout-login').slideToggle(900);
    });

 /*--- showlogin toggle function ----*/
    $('#showcoupon').on('click', function() {
        $('#checkout_coupon').slideToggle(900);
    });
/*--- showlogin toggle function ----*/
    $('#cbox').on('click', function() {
        $('#cbox-info').slideToggle(900);
    });

 /*--- showlogin toggle function ----*/
    $('#ship-box').on('click', function() {
        $('#ship-box-info').slideToggle(1000);
    });
/* --------------------------------------------------------
    FAQ Accordion 
* -------------------------------------------------------*/ 
  $('.card-header a').on('click', function() {
    $('.card').removeClass('actives');
    $(this).parents('.card').addClass('actives');
  });
/* --------------------------------------------------------
    Venobox Active
* -------------------------------------------------------*/  
  $('.venobox').venobox({
        border: '10px',
        titleattr: 'data-title',
        numeratio: true,
        infinigall: true
    });  
/*----------------------------------
    EasyZoom Active       
------------------------------------*/   
var $easyzoom = $('.easyzoom').easyZoom();  
/* --------------------------------------------------------
    Instafeed Active
* -------------------------------------------------------*/ 
if($('#instagram-feed').length) {
    var feed = new Instafeed({
        get: 'user',
        userId: 6665768655,
        accessToken: '6665768655.1677ed0.313e6c96807c45d8900b4f680650dee5',
        target: 'instagram-feed',
        resolution: 'thumbnail',
        limit: 6,
        template: '<li><a href="{{link}}" target="_new"><img src="{{image}}" /></a></li>',
    });
    feed.run();
}
/*------------------------
	Sticky Sidebar Active
-------------------------*/
$('#sticky-sidebar').theiaStickySidebar({
  // Settings
  additionalMarginTop: 80
})

})(jQuery);