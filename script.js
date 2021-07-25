const menuToggle = document.querySelector('.menu-toggle input');
const nav = document.querySelector('nav ul');
const navbar = document.querySelector('nav');


menuToggle.addEventListener('click', function () {
   nav.classList.toggle('slide'); 
});

window.addEventListener('scroll', function () {
   navbar.classList.toggle('sticky', window.scrollY > 0)
})

$('.nav-link').on('click', function (e) {

   let tujuan = $(this).attr('href');

   let elemenTujuan = $(tujuan);

   $('html,body').animate({
      scrollTop: elemenTujuan.offset().top - 100
   },1000)

   e.preventDefault();
});