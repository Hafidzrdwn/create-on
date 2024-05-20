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

if (loadMoreReviews) {
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
}

// HOME ALERT
const formContact = document.querySelector(".form-contact");
if (formContact) {
   formContact.addEventListener("submit", (e) => {
      e.preventDefault();
   
      // mailto
      const name = document.querySelector(".contact-name").value;
      const email = document.querySelector(".contact-email").value;
      const message = document.querySelector(".contact-msg").value;
   
      if (!name.trim() || !email.trim()) {
         Swal.fire({
            title: "Error",
            text: "Mohon isi form dengan benar!",
            icon: "error",
            button: "OK",
            confirmButtonColor: "#2447F9",
         });
         return false
      }
   
      Swal.fire({
         title: "Redirect Warning",
         text: "Anda akan dialihkan ke aplikasi email anda!",
         icon: "info",
         button: "OK",
         showCancelButton: true,
         reverseButtons: true,
         confirmButtonColor: "#2447F9",
         cancelButtonColor: "#34364A",
      }).then((result) => {
         if (result.isConfirmed) {
            window.location.href = `mailto:createon@gmail.com?subject=Contact%20from%20${name}&body=${message}`;
         }
      });
   
      formContact.reset();
   });
}

// search 
const search = document.getElementById("search");

search.addEventListener("keyup", (e) => {
   const searchValue = e.target.value.toLowerCase();
   const courseCard = document.querySelectorAll(".course-card");

   courseCard.forEach((card) => {
      const title = card.querySelector(".course-description h1").textContent.toLowerCase();

      if (title.includes(searchValue)) {
         card.style.display = "flex";
      } else {
         card.style.display = "none";
      }
   });
});

