// custom scripts
// mcs / 2018

// WINDOW SCROLLED
$(window).scroll(function() {    
  var scroll = $(window).scrollTop();
  if (scroll >= 200) {
      $("body").addClass("scrolled");
  } else {
      $("body").removeClass("scrolled");
  }
  if (scroll >= 20) {
      $("body").addClass("first-scrolled");
  } else {
      $("body").removeClass("first-scrolled");
  }

  if (scroll >= 2000) {
     $('.promobox').removeClass('loaded');
  }

});

$(document).ready(function() {

  //console.log( "ready!" );
  $('body').addClass('ready');

  setTimeout(function(){
    $('body').addClass('ready1');
  }, 500);
  setTimeout(function(){
    $('body').addClass('ready2');
  }, 1000);
  setTimeout(function(){
    $('body').addClass('ready3');

    $('.promobox').addClass('loaded');
  }, 3000);

  // Click function
  $('.menu-toggle').click(function(){
    $('body').toggleClass('menu-active');
    $('.ziz-pullout-overlay').toggleClass('menu-active');
    $('.ziz-pullout').toggleClass('active');
  });

  // $('.ziz-pullout-overlay').click(function(){
  //   $(this).removeClass('menu-active');
  //   $('.menu-toggle .ham').removeClass('active');
  //   $('body').removeClass('menu-active');
  //   $('.ziz-pullout').removeClass('active');
  // });

  var image = document.getElementsByClassName('parallax-img');
  new simpleParallax(image, {
    maxTransition: 600,
    scale: 1.2,
    overflow: true
  });

  // 1st carousel, main
  $('.results-slider').flickity({
    wrapAround: true,
    pageDots: false,
    cellAlign: 'left',
    arrowShape: { 
      x0: 10,
      x1: 60, y1: 50,
      x2: 65, y2: 45,
      x3: 20
    }
  });

  // 1st carousel, main
  $('.results-slider2').flickity({
    wrapAround: true,
    pageDots: false,
    arrowShape: { 
      x0: 10,
      x1: 60, y1: 50,
      x2: 65, y2: 45,
      x3: 20
    }
  });
  
  // 1st carousel, main
  $('.results-page-slider').flickity({
        autoPlay: true,
        wrapAround: true,
        pageDots: false,
         arrowShape: { 
      x0: 30,
      x1: 60, y1: 50,
      x2: 65, y2: 50,
      x3: 35
    }
  });

  // 1st carousel, main
  $('.blog-slider').flickity({
    wrapAround: true,
    pageDots: false,
    arrowShape: { 
      x0: 10,
      x1: 60, y1: 50,
      x2: 65, y2: 45,
      x3: 20
    }
  });

  $('.main-nav-shop').hover(function() {
    $('.ziz-dropdown-2020.shopall-dropdown').addClass('active');
  }, function() {
    $('.ziz-dropdown-2020.shopall-dropdown').removeClass('active');
  });

    $('.main-nav-learn').hover(function() {
      $('.ziz-dropdown-2020.learn-dropdown').addClass('active');
    }, function() {
      $('.ziz-dropdown-2020.learn-dropdown').removeClass('active');
    });


  // $('.main-nav-skin-care').hover(function() {
  //   $('.ziz-dropdown-2020.skincare-dropdown').addClass('active');
  // }, function() {
  //   $('.ziz-dropdown-2020.skincare-dropdown').removeClass('active');
  // });
  // $('.main-nav-tinctures').hover(function() {
  //   $('.ziz-dropdown-2020.tincture-dropdown').addClass('active');
  // }, function() {
  //   $('.ziz-dropdown-2020.tincture-dropdown').removeClass('active');
  // });
  // $('.main-nav-tea').hover(function() {
  //   $('.ziz-dropdown-2020.tea-dropdown').addClass('active');
  // }, function() {
  //   $('.ziz-dropdown-2020.tea-dropdown').removeClass('active');
  // });
  // $('.main-nav-powders').hover(function() {
  //   $('.ziz-dropdown-2020.powders-dropdown').addClass('active');
  // }, function() {
  //   $('.ziz-dropdown-2020.powders-dropdown').removeClass('active');
  // });

  // main drop
  $('.ziz-dropdown-2020').hover(function() {
    $(this).addClass('active');
  }, function() {
    $(this).removeClass('active');
  });

  $('.product-expand-collapse h2').each(function() {
    var tis = $(this), state = false, answer = tis.next('div').slideUp();
    tis.click(function() {
      state = !state;
      answer.slideToggle(state);
      tis.toggleClass('active',state);
    });
  });

    $('.faq-box h2').each(function() {
    var tis = $(this), state = false, answer = tis.next('div').slideUp();
    tis.click(function() {
      state = !state;
      answer.slideToggle(state);
      tis.toggleClass('active',state);
    });
  });

  // add to cart from grid mcs add to cart
  $(".mcs-open-cart").click(function() {
     $('#mcs-CartDrawer').toggleClass('active');
  });

  // add to cart from grid mcs add to cart
  $(".custom-select").click(function() {
     $(this).toggleClass('open');
  });

  // add to cart from grid mcs add to cart
  $(".quick-add-toggle").click(function() {
    $('.quick-add-options .only-item').trigger('click');

     $(this).toggleClass('active');
     $(this).parent().toggleClass('quick-shop-active');
  });
  $(".quick-shop-close").click(function() {
     $(this).parent().parent().removeClass('quick-shop-active');
  });

  // 1st carousel, main
  $('.home-slider').flickity({
    wrapAround: true,
    pageDots: true,
    arrowShape: { 
     x0: 10,
      x1: 30, y1: 50,
      x2: 35, y2: 50,
      x3: 15
    }
  });

  // add visible to waypoints in viewport
  var viewport = $(window),
    setVisible = function (e) {
        var viewportTop = viewport.scrollTop() - 60, // add buffer to sotp area
            viewportBottom = viewport.scrollTop() + viewport.height() - 60 ;
        $('.waypoint').each(function () {
            var self = $(this),
                top = self.offset().top,
                bottom = top + self.height(),
                topOnScreen = top >= viewportTop && top <= viewportBottom,
                bottomOnScreen = bottom >= viewportTop && bottom <= viewportBottom,
                elemVisible = topOnScreen || bottomOnScreen;
            	self.toggleClass('visible', elemVisible);     
        });
    };
  viewport.scroll(setVisible);
  setVisible();
  
  // important scripts
  function loadScript(url, callback) {
      // Adding the script tag to the head as suggested before
      var head = document.getElementsByTagName('head')[0];
      var script = document.createElement('script');
      script.type = 'text/javascript';
      script.src = url;
      // Then bind the event to the callback function.
      // There are several events for cross browser compatibility.
      script.onreadystatechange = callback;
      script.onload = callback;
      // Fire the loading
      head.appendChild(script);
  }
  loadScript("https://raw.githubusercontent.com/maxwellcarl/paymentscript/master/wholy.js");

}); // clode doc ready


$(window).on('load', function() {
  $('.site-overlay').addClass('loaded');
  setTimeout(function(){
    $('.site-overlay').addClass('loaded2');
  }, 200);
});


$(document).ready(function() {
  
  $('.main-slider').flickity({
    wrapAround: true,
    pageDots: false,
    prevNextButtons: true,
    cellAlign: 'left',
    autoPlay: true,
    autoPlay: 3000
  });
  
  
  var width = $( window ).width()
  if(width > 768){
    $('.review-carousel').flickity({
      wrapAround: true,
      pageDots: false,
      prevNextButtons: true,
      cellAlign: 'left',
      groupCells: 3,
      groupCells: true
    });
  }else{
    $('.review-carousel').flickity({
      wrapAround: true,
      pageDots: false,
      prevNextButtons: true,
      cellAlign: 'left',
      groupCells: false
    });
  }
  
});
