/*===== MENU SHOW Y HIDDEN =====*/ 
const navMenu = document.getElementById('nav-menu'),
      toggleMenu = document.getElementById('nav-toggle'),
      closeMenu = document.getElementById('nav-close')

/*SHOW*/ 
toggleMenu.addEventListener('click', ()=>{
    navMenu.classList.toggle('show')
})

/*HIDDEN*/
closeMenu.addEventListener('click', ()=>{
    navMenu.classList.remove('show')
})

/*===== ACTIVE AND REMOVE MENU =====*/
const navLink = document.querySelectorAll('.nav__link');   

function linkAction(){
  /*Active link*/
  navLink.forEach(n => n.classList.remove('active'));
  this.classList.add('active');
  
  /*Remove menu mobile*/
  navMenu.classList.remove('show')
}
navLink.forEach(n => n.addEventListener('click', linkAction));



    /* Testimonial One */
    $(function(){
   
     if ($("body").hasClass("rtl-layout")) {
        $(".owl-team").owlCarousel({
            items: 3,
            margin: 30,
            dots: true,
            nav: true,
            loop: true,
            autoplay: true,
            smartSpeed: 1000,
            navSpeed: true,
            autoplayHoverPause: true,
            responsiveClass: true,
            rtl: callback,
            responsive: {
                992: {
                    items: 4,
                },
                600: {
                    items: 2,
                },
                320: {
                    items: 1,
                },
            }
        });
        $(".owl-testimonial").owlCarousel({
        autoplay: 1000,
        smartSpeed: 1500,
        margin: 30,
        slideBy: 1,
        autoplayHoverPause: true,
        loop: true,
        dots: true,
        nav: true,
        responsive: {
            1200: {
                items: 4
            },
            992: {
                items: 3
            },
            600: {
                items: 2
            },
            320: {
                items: 1
            },
        }
    });
    }


//counter design

document.addEventListener("DOMContentLoaded", () => {
	function counter(id, start, end, duration){
		let obj = document.getElementById(id),
		current = start,
		range = end - start,
		increment = end > start ? 1: -1,
		step = Math.abs(Math.floor(duration / range)),
		timer = setInterval(() => {
			current += increment;
			obj.textContent = current;
			if(current == end){
				clearInterval(timer);
			}
		}, step);
	}
	counter("count1", 0, 1287, 3000);
	counter("count2", 100, 5786, 2500);
	counter("count3", 0, 1440, 3000);
	counter("count4", 0, 7110, 3000);

});

