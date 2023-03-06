const mobileMenu = document.getElementById("mobile-menu");
const nav = document.getElementById("navbar");
const closeMenu = document.getElementById("close-menu");

if(mobileMenu) {
    mobileMenu.addEventListener("click", () => {
        nav.classList.add("active");
    })
}

if(closeMenu) {
    closeMenu.addEventListener("click", () => {
        nav.classList.remove("active");
    })
}


// Get the button
let mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}


