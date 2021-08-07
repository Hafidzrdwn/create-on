const menuToggle = document.querySelector('.menu-toggle input');
const nav = document.querySelector('nav ul');
const navbar = document.querySelector('nav');
const navLinks = document.querySelectorAll('.nav-link'); 

menuToggle.addEventListener('click', function () {
   nav.classList.toggle('slide'); 
});

window.addEventListener('scroll', function () {
   navbar.classList.toggle('sticky', window.scrollY > 0)
})

navLinks.forEach((navLink)=>{
   navLink.addEventListener('click',function(){
      navLink.classList.add('clicked');
   })
})

const btnItem = document.querySelectorAll("ul.button-filter > li")
const cardItem = document.querySelectorAll(".courses-card-wrapper .course-card");

btnItem.forEach(btn =>{
   btn.addEventListener("click", function(){
      btnItem.forEach(btn =>{
         btn.className = ""
      })
      btn.className = "active"

      // Filtering
      cardItem.forEach(card => {
      card.style.display = "none";
      if(card.getAttribute("data-filter") == btn.textContent || btn.textContent == "All Courses"){
         card.style.display ="flex";
      }
   })
   })
})

// Reviews Page
const loadMoreReviews = document.querySelector("a.btnMoreReview");
const reviewCards = document.querySelectorAll(".review-card");

loadMoreReviews.addEventListener("click", (e)=>{
   e.preventDefault();
   reviewCards.forEach((reviewCard,index) => {
      if(index > 5){
            reviewCard.style.display = "flex"
            setTimeout(() => {
               reviewCard.style.transform = "scale(1)"
            }, 10);  
      }
   });
});


