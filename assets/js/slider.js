
  (function($, window, document) {

    // The $ is now locally scoped 

   $(document).ready(function() {
    
    $('.center').slick({
     centerMode: true,
      initialSlide: 2,
      autoplay: true,   
     slidesToShow: 3,
     slidesToScroll: 1, 
     focusOnSelect: true,
     variableWidth: true,
     variableheight: true,
     arrows: true,
      prevArrow: '<div class="arrow-prev"><span class="fa fas fa-angle-left"></span><span class="sr-only">Prev</span></div>',

nextArrow: '<div class="arrow-next"><span class="fa fas fa-angle-right"></span><span class="sr-only">Next</span></div>',
     responsive: [
     
    {
      breakpoint: 280,
      settings: {
        arrows: false,
        centerMode: false,
       
     slidesToScroll: 1,
        slidesToShow: 4
      }
    }
    ]
  });

 



  });
   // The rest of the code goes here!

  })(jQuery, window, document);
  // The global jQuery object is passed as a parameter