$(document).ready(function () {
    // Navbar Scroll
    $(window).on("scroll", function () {
        var scroll = $(window).scrollTop();
        if(scroll >= 50) {
            $(".sticky").addClass("stickyadd");
        } else {
            $(".sticky").removeClass("stickyadd");
        }
    });
  
  

       // Links-tap From Mobile
      const card = document.querySelector(".card");
      const cardtoggle = document.querySelector(".toggle");
      cardtoggle.onclick = function () {
        card.classList.toggle("active");
      };

      // Swiper-1
     
         // Swiper-1
      const swiper = new Swiper(".swiper", {
        loop: true,
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
      });
    
    // swiper-2
        const swiper2 = new Swiper(".swiper-1", {
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
            },
         breakpoints: {    
    280: {
    slidesPerView: 1,
    slidesPerGroup: 1,
    spaceBetween: 20
             },

           480: {
    slidesPerView: 1,
    slidesPerGroup: 1,
    spaceBetween: 20
             },      
             
    767: {
     slidesPerView: 2,
  
    spaceBetween: 20
    },
    991: {
      slidesPerView: 3,
      spaceBetween: 30,
        slidesPerGroup: 1,
             },
    
     1200: {
      slidesPerView: 4,
      spaceBetween: 30,
      slidesPerGroup: 1,
    },
    
    
  }
      });
       
    
    
});
    
