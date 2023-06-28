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

