//index & aboutus : number count aimation
if($("#counter").length>0){
var a = 0;
$(window).scroll(function() {
  var oTop = $('#counter').offset().top - window.innerHeight;
  if (a == 0 && $(window).scrollTop() > oTop) {
    $('.service-span').each(function() {
      var $this = $(this),
        countTo = $this.attr('data-count');
      $({
        countNum: $this.text()
      }).animate({
          countNum: countTo
        },

        {
          duration: 7000,
          easing: 'swing',
          step: function() {
            $this.text(Math.floor(this.countNum));
          },
          complete: function() {
            $this.text(this.countNum);
            //alert('finished');
          }
        });
    });
    a = 1;
  }
});
}

//checkout: add-minus product
$('.btn-number').click(function(e){
    e.preventDefault();
    
    fieldName = $(this).attr('data-field');
    type      = $(this).attr('data-type');
    var input = $("input[name='"+fieldName+"']");
    var currentVal = parseInt(input.val());
    if (!isNaN(currentVal)) {
        if(type == 'minus') {
            
            if(currentVal > input.attr('data-min')) {
                input.val(currentVal - 1).change();
            } 
            if(parseInt(input.val()) == input.attr('data-min')) {
                $(this).attr('disabled', true);
            }

        } else if(type == 'plus') {

            if(currentVal < input.attr('data-max')) {
                input.val(currentVal + 1).change();
            }
            if(parseInt(input.val()) == input.attr('data-max')) {
                $(this).attr('disabled', true);
            }

        }
    } else {
        input.val(0);
    }
});
$('.input-number').focusin(function(){
   $(this).data('oldValue', $(this).val());
});
//checkout : minus product 
$('.input-number').change(function() {
    
    minValue =  parseInt($(this).attr('data-min'));
    maxValue =  parseInt($(this).attr('data-max'));
    valueCurrent = parseInt($(this).val());
    
    name = $(this).attr('name');
    if(valueCurrent >= minValue) {
        $(".btn-number[data-type='minus'][data-field='"+name+"']").removeAttr('disabled')
    } else {
        alert('Sorry, the minimum value was reached');
        $(this).val($(this).data('oldValue'));
    }
    if(valueCurrent <= maxValue) {
        $(".btn-number[data-type='plus'][data-field='"+name+"']").removeAttr('disabled')
    } else {
        alert('Sorry, the maximum value was reached');
        $(this).val($(this).data('oldValue'));
    } 
});
$(window).on("load",function(){

/*--------preloader-------*/
  $('#preloader').delay(100).fadeOut(500);
/*------End----------*/

});
// index : causes slider
$(document).ready(function(){
  if($("#causes-slider").length>0){
    $("#causes-slider").owlCarousel({
        autoplay:true,
        loop:true,
        dots:true,
        navigation:false,
        responsive:{
          0:{
              items:0,
              nav:false
          },
          320:{
            items:1,
            nav:false,
            margin:0
          },
          600:{
              items:2,
              nav:false,
              margin:10
          },
          1000:{
              items:3,
              loop:true,
              nav:false,
              margin:5
          },
          1200:{
              items:3,
              loop:true,
              nav:false,
              margin:30
          },
          1400:{
              items:3,
              loop:true,
              nav:false,
              margin:30
          }
      }
    });
}

//index : upcoming event slider
if($("#event-slider").length>0){
  $("#event-slider").owlCarousel({
      autoplay:true,
      loop:true,
      dots:true,
      navigation:false,
      responsive:{
        0:{
            items:0,
            nav:false
        },
        320:{
          items:1,
          nav:false,
          margin:10
        },
        330:{
          items:2,
          nav:false,
          margin:0
        },
        600:{
            items:3,
            nav:false,
            margin:20
        },
        1000:{
            items:2,
            loop:true,
            nav:false,
            margin:10
        },
        1200:{
            items:2,
            loop:true,
            nav:false,
            margin:30
        },
        1400:{
            items:2,
            loop:true,
            nav:false,
            margin:30
        }
      }
  });
}
//index,aboutus : brand logo slider
if($("#owl-brand-slider").length>0){
  $("#owl-brand-slider").owlCarousel({
    autoplay:true,
    loop: true,
    responsiveClass: true,
    margin: 0,
    dots:true,
    nav:false,
    responsive:{
        0:{
            items:0,
            nav:false
        },
        320:{
          items:1,
          loop:true,
          nav:false,
          dots:true,
          margin:16
        },
        400:{
          items:2,
          loop:true,
          nav:false,
          dots:true,
          margin:0
        },
        600:{
            items:4,
            nav:false,
            dots:true,
            margin:13
        },
        1000:{
            items:5,
            loop:true,
            nav:false,
            dots:true,
            margin:10
        },
        1200:{
            items:6,
            loop:true,
            nav:false,
            dots:true,
            margin:10
        },
        1400:{
            items:6,
            loop:true,
            nav:false,
            margin:10
        }
    }
  });
}//homepage-2 : testimonial slider
if($("#owl-testimonial-slider").length>0){
  $("#owl-testimonial-slider").owlCarousel({
    Autoplay:true,
    loop:true,
    dots:true,
    navigation:false,
    responsive:{
        0:{
            items:0,
            nav:false
        },
        320:{
          items:1,
          loop:true,
          nav:false,
          dots:true,
          margin:0
        },
        400:{
          items:1,
          loop:true,
          nav:false,
          dots:true,
          margin:0
        },
        600:{
            items:2,
            nav:false,
            dots:true,
            margin:20
        },
        1000:{
            items:3,
            loop:true,
            nav:false,
            dots:true,
            margin:30
        },
        1200:{
            items:3,
            loop:true,
            nav:false,
            margin:30
        },
        1400:{
            items:3,
            loop:true,
            nav:false,
            margin:30
        }
    }
  });
}
// hoempage-1 : causes slider
if($("#recent-causes").length>0){
    $("#recent-causes").owlCarousel({
        autoplay:true,
        loop:true,
        dots:true,
        navigation:false,
        responsive:{
          0:{
              items:0,
              nav:false
          },
          320:{
            items:1,
            nav:false,
            margin:0
          },
          600:{
              items:2,
              nav:false,
              margin:10
          },
          1000:{
              items:3,
              loop:true,
              nav:false,
              margin:5
          },
          1200:{
              items:3,
              loop:true,
              nav:false,
              margin:30
          },
          1400:{
              items:3,
              loop:true,
              nav:false,
              margin:30
          }
      }
    });
}
// homepage-1 : volunteer slider
if($("#owl-volunteer-slider").length>0){
    $("#owl-volunteer-slider").owlCarousel({
        autoplay:true,
        loop:true,
        dots:true,
        navigation:false,
        responsive:{
          0:{
              items:0,
              nav:false
          },
          320:{
            items:1,
            nav:false,
            margin:0
          },
          600:{
              items:2,
              nav:false,
              margin:10
          },
          1000:{
              items:3,
              loop:true,
              nav:false,
              margin:5
          },
          1200:{
              items:4,
              loop:true,
              nav:false,
              margin:30
          },
          1400:{
              items:4,
              loop:true,
              nav:false,
              margin:30
          }
      }
    });
}
//Homepage1 : main banner slider homepage1
if($("#main-banner-slider").length>0){
  $("#main-banner-slider").owlCarousel({
      items:1,
      loop:true,
      dots:true,
      margin:0
  });
}
});
//gallery,portfolio-masnory : gallery animation on gallery and gallery-masnory
$(document).ready(function(){
  if($(".popup-gallery").length>0){
    $('.popup-gallery').magnificPopup({
      delegate: 'a',
      type: 'image',
      tLoading: 'Loading image #%curr%...',
      mainClass: 'mfp-img-mobile',
      gallery:{
        enabled: true,
        navigateByImgClick: true,
        preload: [0,1] 
      },
      image:{
        tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
        titleSrc: function(item){
        }
      }
    });
  }
});
    // index,activities : testimonial slider
    if ($('.client-testimonial-carousel').length && $('.client-thumbs-carousel').length) {

    var $sync3 = $(".client-testimonial-carousel"),
      $sync4 = $(".client-thumbs-carousel"),
      flag = false,
      duration = 300;

      $sync3
        .owlCarousel({
          loop:true,
          autoplay:true,
          items: 1,
          margin: 0,
          nav: true,
          navText: [ '<span class="fa fa-angle-left"></span>', '<span class="fa fa-angle-right"></span>' ],
          dots: true,
          autoplay: true,
          autoplayTimeout: 5000
        })
        .on('changed.owl.carousel', function (e) {
          if (!flag) {
            flag = false;
            $sync4.trigger('to.owl.carousel', [e.item.index, duration, true]);
            flag = false;
          }
        });

      $sync4
        .owlCarousel({
          loop:true,
          margin:0,
          items: 1,
          nav: false,
          navText: [ '<span class="icon flaticon-left-arrow-2"></span>', '<span class="icon flaticon-right-arrow-1"></span>' ],
          dots: false,
          center: false,
          autoplay: true,
          autoplayTimeout: 5000,
          responsive: {
            0:{
                    items:1,
                    autoWidth: false
                },
                400:{
                    items:1,
                    autoWidth: false
                },
                600:{
                    items:1,
                    autoWidth: false
                },
                1000:{
                    items:1,
                    autoWidth: false
                },
            1200:{
                    items:1,
                    autoWidth: false
                }
            },
        })
        .on('click', '.owl-item', function () {
      $sync3.trigger('to.owl.carousel', [$(this).index(), duration, true]);
    })
    .on('changed.owl.carousel', function (e) {
      if (!flag) {
        flag = true;    
        $sync3.trigger('to.owl.carousel', [e.item.index, duration, true]);
        flag = false;
      }
    });
      }

      //menu : Hover Dropdown Menu animation
      $('.navbar-nav .dropdown').hover(function(){
      $(this).find('.dropdown-menu').first().stop(true, true).delay(250).slideDown();
      }, 
        function(){
        $(this).find('.dropdown-menu').first().stop(true, true).delay(100).slideUp();});
        $('.navbar .dropdown > a').click(function(){
        location.href = this.href;
      });

//Gallery,portfolio-masnory : filter category wise image show
filterSelection("all")
function filterSelection(c) {
  x = $(".column");
  if(c=="all")
  { 
    $(".column").fadeIn(200,function(){
      $(".column").addClass("showimg");
    }) 
  }
  else
  {
    $(".column.showimg").fadeOut(200,function(){ 
        $(".column.showimg").removeClass('showimg');
        $(".column."+c).fadeIn(200).addClass("showimg"); 
     }); 
    
  }
}

//causes,causes-detail,casuses-detail2 : progressbar animation
if($(".load").length>0){
var delay = 500;
    $(".load").each(function(i){
      $(this).delay( delay*i ).animate( { width: $(this).attr('aria-valuenow') + '%' }, delay );
      $(this).prop('Counter',0).animate({
          Counter: $(this).text()
      }, 
    {
      duration: delay,
      easing: 'swing',
      step: function (now)
      {
        $(this).text();
      }
    });
});
}