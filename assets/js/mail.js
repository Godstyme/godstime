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