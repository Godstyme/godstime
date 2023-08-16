const currentYear = new Date().getFullYear()
document.querySelector('#tradeMarkTime').innerHTML = currentYear;

const scrollUp = document.querySelector("#scroll-up");



function startDownload() {
  window.open("https://drive.google.com/file/d/13_VaDowHUqnw2iM2T2BGibpLIMeAqxSu/view?usp=drive_link")
}

(function() {
  // https://dashboard.emailjs.com/admin/account
  emailjs.init('it1GJ3eOA4nxg6AYP');
})();
window.onload = function() {
  document.getElementById('contact-form').addEventListener('submit', function(event) {
      event.preventDefault();
      
      // generate a five digit number for the contact_number variable
      this.contact_number.value = Math.random() * 100000 | 0;

      // these IDs from the previous steps
      emailjs.sendForm('service_xhro42j', 'template_jym64h3', this)
          .then(function() {
              // console.log('SUCCESS!');
              alert("Thanks for reaching out to us :)")
          }, function(error) {
              console.log('FAILED...', error);
          });
  });
}
// (function(){
//   emailjs.init("it1GJ3eOA4nxg6AYP")
// })();

// function sendMail(){
//   let fullName = document.getElementById("exampleInputName").value;
//   let email = document.getElementById("exampleInputEmail").value;
//   let message = document.getElementById("message").value;

//   var contactParams = {
//     from_name: fullName,
//     from_email: email,
//     message: message
//   };
//   emailjs.send("service_xhro42j","template_jym64h3",contactParams).then(
//     function(res){})
// }



scrollUp.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth",
  });
});