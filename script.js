function scrollToSection(sectionId) {
    if (sectionId === 'home') {
      // Scroll to the top of the page
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      // Scroll to the specified section using smooth scrolling behavior
      document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' });
    }
  }

  emailjs.init("jnjKOAUhR17iXnEhb");
const button = document.querySelector('.submit');
const form = document.querySelector('.inputsContainer');
const customerName = document.getElementById('name');
const customerEmeil = document.getElementById('email');
const customerMessage = document.getElementById('message');


form.addEventListener ("submit", function (e) {
  e.preventDefault()
console.log(e)
emailjs.send("service_j3exofk", "template_o1t5b3i", {
  to_name: "ARCH_BASEMENT",
  from_name: customerName.value + " (" + email.value + ")",
  message: customerMessage.value,
})
.then(function(response) {
  console.log("Email sent successfully!", response.status, response.text);
}, function(error) {
  console.log("Email failed to send!", error);
});


      }
)



const navToggle = document.querySelector(".nav-toggle");
const links = document.querySelector(".links");

const scrols1 = document.querySelector(".scrols1");
const scrols2 = document.querySelector(".scrols2");
const scrols3 = document.querySelector(".scrols3");
const scrols4 = document.querySelector(".scrols4");
const scrols5 = document.querySelector(".scrols5");


navToggle.addEventListener("click", function () {
  // console.log(links.classList);
  // console.log(links.classList.contains("random"));
  // console.log(links.classList.contains("links"));
  // if (links.classList.contains("show-links")) {
  //   links.classList.remove("show-links");
  // } else {
  //   links.classList.add("show-links");
  // }
  links.classList.toggle("show-links");

  navToggle.style.transform = 'rotate(90deg)';
});

scrols1.addEventListener("click", function() {
  links.classList.toggle("show-links"); 
})

scrols2.addEventListener("click", function() {
  links.classList.toggle("show-links"); 
})

scrols3.addEventListener("click", function() {
  links.classList.toggle("show-links"); 
})

scrols4.addEventListener("click", function() {
  links.classList.toggle("show-links"); 
})

scrols5.addEventListener("click", function() {
  links.classList.toggle("show-links"); 
})



