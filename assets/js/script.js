// Passive event listeners
jQuery.event.special.touchstart = {
  setup: function (_, ns, handle) {
    'use strict';
    this.addEventListener('touchstart', handle, {
      passive: !ns.includes('noPreventDefault')
    });
  }
};
jQuery.event.special.touchmove = {
  setup: function (_, ns, handle) {
    'use strict';
    this.addEventListener('touchmove', handle, {
      passive: !ns.includes('noPreventDefault')
    });
  }
};

// Preloader js
$(window).on('load', function () {
  'use strict';
  $('.preloader').fadeOut(0);
});

$(document).ready(function () {
  'use strict';

  // Shuffle js filter and masonry
  var containerEl = document.querySelector('.shuffle-wrapper');
  if (containerEl) {
    var Shuffle = window.Shuffle;
    var myShuffle = new Shuffle(document.querySelector('.shuffle-wrapper'), {
      itemSelector: '.shuffle-item',
      buffer: 1
    });

    jQuery('input[name="shuffle-filter"]').on('change', function (evt) {
      var input = evt.currentTarget;
      if (input.checked) {
        myShuffle.filter(input.value);
      }
    });
  }

  $('.portfolio-single-slider').slick({
    infinite: true,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 2000

  });

  $('.clients-logo').slick({
    infinite: true,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 2000
  });

  $('.testimonial-slider').slick({
    slidesToShow: 1,
    infinite: true,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 2000
  });

  //  Count Up
  function counter() {
    var oTop;
    if ($('.count').length !== 0) {
      oTop = $('.count').offset().top - window.innerHeight;
    }
    if ($(window).scrollTop() > oTop) {
      $('.count').each(function () {
        var $this = $(this),
          countTo = $this.attr('data-count');
        $({
          countNum: $this.text()
        }).animate({
          countNum: countTo
        }, {
          duration: 1000,
          easing: 'swing',
          step: function () {
            $this.text(Math.floor(this.countNum));
          },
          complete: function () {
            $this.text(this.countNum);
          }
        });
      });
    }
  }
  $(window).on('scroll', function () {
    counter();
  });

  // Turn cloaked e-mail addresses into clickable mailto links
  let emailSpans = document.getElementsByClassName("cloaked-e-mail");

  for (let emailSpan of emailSpans) {
    let emailLink = document.createElement("a");
    let emailAddress = emailSpan.attributes.getNamedItem("data-user").value.split('').reverse().join('') + "@" + emailSpan.attributes.getNamedItem("data-domain").value.split('').reverse().join('');
    emailLink.href = "mailto:" + emailAddress;
    emailLink.innerText = emailAddress;
    emailSpan.parentElement.insertBefore(emailLink, emailSpan);
    emailSpan.parentElement.removeChild(emailSpan)
  }

  $("#BtnEN").click(function(){
    $(".fr").css("display", "none")
    $(".en").css("display", "inline-block")
  });
  $("#BtnFR").click(function(){
    $(".en").css("display", "none")
    $(".fr").css("display", "inline-block")
  });

	// map initialize
	$(map);
});


/////// Card Slider
// var bg = document.querySelector('.item-bg');
var items = document.querySelectorAll('.news__item');
var item = document.querySelector('.news__item');

function cLog(content) {
    console.log(content)
}

if($(window).width() > 800) {
    $(document).on("mouseover", ".news__item", function (_event, _element) {

        var newsItem = document.querySelectorAll('.news__item');
        newsItem.forEach(function (element, index) {
            // element.addEventListener('mouseover', function () {
            //     var x = this.getBoundingClientRect().left;
            //     var y = this.getBoundingClientRect().top;
            //     var width = this.getBoundingClientRect().width;
            //     var height = this.getBoundingClientRect().height;

            //     // $('.item-bg').addClass('active');
            //     $('.news__item').removeClass('active');
            //     // $('.news__item').removeClass('active');


            //     // bg.style.width = width + 'px';
            //     // bg.style.height = height + 'px';
            //     // bg.style.transform = 'translateX(' + x + 'px ) translateY(' + y + 'px)';
            // });

            element.addEventListener('mouseleave', function () {
                // $('.item-bg').removeClass('active');
                $('.news__item').removeClass('active');
            });

        });

    });
}
var swiper = new Swiper(".carouselSwiper", {
  direction: "vertical",
  slidesPerView: 1,
  spaceBetween: 30,
  simulateTouch: false,
  effect: "fade",

  autoplay: {
    delay: 4500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },

});

var swiper = new Swiper('.news-slider', {
    effect: 'coverflow',
    grabCursor: true,
    loop: true,
    centeredSlides: true,
    keyboard: true,
    spaceBetween: 0,
    slidesPerView: 'auto',
    speed: 300,
    coverflowEffect: {
        rotate: 0,
        stretch: 0,
        depth: 0,
        modifier: 3,
        slideShadows: false
    },
    breakpoints: {
        480: {
            spaceBetween: 0,
            centeredSlides: true
        }
    },
    simulateTouch: true,
    navigation: {
        nextEl: '.news-slider-next',
        prevEl: '.news-slider-prev'
    },
    pagination: {
        el: '.news-slider__pagination',
        clickable: true
    },
    on: {
        init: function () {
            var activeItem = document.querySelector('.swiper-slide-active');

            var sliderItem = activeItem.querySelector('.news__item');

            $('.swiper-slide-active .news__item').addClass('active');

            // var x = sliderItem.getBoundingClientRect().left;
            // var y = sliderItem.getBoundingClientRect().top;
            // var width = sliderItem.getBoundingClientRect().width;
            // var height = sliderItem.getBoundingClientRect().height;


            // $('.item-bg').addClass('active');

            // bg.style.width = width + 'px';
            // bg.style.height = height + 'px';
            // bg.style.transform = 'translateX(' + x + 'px ) translateY(' + y + 'px)';
        }
    }
});

swiper.on('touchEnd', function () {
    $('.news__item').removeClass('active');
    $('.swiper-slide-active .news__item').addClass('active');
});

swiper.on('slideChange', function () {
    $('.news__item').removeClass('active');
});

swiper.on('slideChangeTransitionEnd', function () {
    $('.news__item').removeClass('active');
    var activeItem = document.querySelector('.swiper-slide-active');

    var sliderItem = activeItem.querySelector('.news__item');

    $('.swiper-slide-active .news__item').addClass('active');

    // var x = sliderItem.getBoundingClientRect().left;
    // var y = sliderItem.getBoundingClientRect().top;
    // var width = sliderItem.getBoundingClientRect().width;
    // var height = sliderItem.getBoundingClientRect().height;


    // $('.item-bg').addClass('active');

    // bg.style.width = width + 'px';
    // bg.style.height = height + 'px';
    // bg.style.transform = 'translateX(' + x + 'px ) translateY(' + y + 'px)';
});

var gallery = document.querySelector('#gallery');
var getVal = function (elem, style) { return parseInt(window.getComputedStyle(elem).getPropertyValue(style)); };
var getHeight = function (item) { return item.querySelector('.content').getBoundingClientRect().height; };
var resizeAll = function () {
    var altura = getVal(gallery, 'grid-auto-rows');
    var gap = getVal(gallery, 'grid-row-gap');
    gallery.querySelectorAll('.gallery-item').forEach(function (item) {
        var el = item;
        el.style.gridRowEnd = "span " + Math.ceil((getHeight(item) + gap) / (altura + gap));
    });
};
gallery.querySelectorAll('img').forEach(function (item) {
    item.classList.add('byebye');
    if (item.complete) {
        console.log(item.src);
    }
    else {
        item.addEventListener('load', function () {
            var altura = getVal(gallery, 'grid-auto-rows');
            var gap = getVal(gallery, 'grid-row-gap');
            var gitem = item.parentElement.parentElement;
            gitem.style.gridRowEnd = "span " + Math.ceil((getHeight(gitem) + gap) / (altura + gap));
            item.classList.remove('byebye');
        });
    }
});
window.addEventListener('resize', resizeAll);
gallery.querySelectorAll('.gallery-item').forEach(function (item) {
    item.addEventListener('click', function () {        
        item.classList.toggle('full');        
    });
});


