// toggle icon navbar
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}

// scroll sections active link
let sections = document.querySelectorAll('section');

//scroll reveal
ScrollReveal({ 
    reset: true,
    distance: '80px',
    duration: 1200,
    delay: 150
 });

 ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
 ScrollReveal().reveal('.home-img, .services-container, .projects-box, .contact-info, .contact form', { origin: 'bottom' });
 ScrollReveal().reveal('.home-content h1, .about-img', { origin: 'left' });
 ScrollReveal().reveal('.home-content p, .about-content', { origin: 'right' });

// Get the button:
let mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');
    });

    let header = document.querySelector('header');

    header.classList.toggle('stickly', window.scrollY > 100);

    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
};

function scrollFunction() {
    
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

function sendmail(){
  var firstname = document.getElementById("firstname").value;
  var lastname = document.getElementById("lastname").value;
  var email = document.getElementById("email").value;
  var subject = document.getElementById("subject").value;
  var message = document.getElementById("message").value;

  if (email == ""){
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: "You haven't entered your Email",
      background: '#87ceeb',
    })
  } else if (!email.match(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)){
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: "Please enter a valid email address",
      background: '#87ceeb',
    })
  } else if (subject == ""){
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: "Please enter a Subject",
      background: '#87ceeb',
    })
  } else if (message == ""){
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: "Please enter a Message",
      background: '#87ceeb',
    })
  } else {
    window.open('mailto:akindu.20211364@iit.ac.lk?subject='+subject+'&body='+message);
    Swal.fire({
      icon: 'success',
      title: 'Thank You! ' + firstname + ' ' + lastname,
      text: "I'll reach out to you soon!",
      background: '#87ceeb',
    })
    
    document.getElementById("contact-form").reset();
  }
}