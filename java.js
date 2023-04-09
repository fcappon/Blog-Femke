const languageSelect = document.getElementById('language-select');
languageSelect.addEventListener('change', function() {
  document.body.setAttribute('data-language', this.value);
});

/* DIGITAL CLOCKS */

const locations = document.querySelectorAll("section.times div")

const updateTimes = function(){
    locations.forEach(location => {
        const output = location.querySelector("output")
        const timezone = location.getAttribute("data-timezone")
        
        
        const now = luxon.DateTime.now().setZone(timezone)
    
        output.innerHTML = now.toFormat("HH:mm:ss")
    })
}

updateTimes()

setInterval(function(){
    updateTimes()
},1000)

/* BACK TO TOP ARROW */

// Get the button:
let mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
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