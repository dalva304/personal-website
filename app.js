function myMenuFunction() {
    var menuBth = document.getElementById('myNavMenu');

    if(menuBth.className === "nav-menu") {
        menuBth.className += " responsive"; // Add space before "responsive"
    } else {
        menuBth.className = "nav-menu";
    }
}

const body = document.querySelector("body"),
    toggleSwitch = document.getElementById("toggle-switch");

toggleSwitch.addEventListener("click", () => {
    body.classList.toggle("dark");
});


var intro = {
    strings: ["hi! nice to meet you, i'm diana."].map(function(str) {
      return str.toLowerCase();
    }),
    typeSpeed: 100,
    backSpeed: 50,
    backDelay: 1000,
    loop: false
  };
  
  var typing = new Typed(".typed-text", intro);

// ScrollReveal from the top
const sr = ScrollReveal({
    origin: "top",
    distance: "80px",
    duration: 2000,
    reset: true
});

sr.reveal(".featured-name", { delay: 100 });
sr.reveal(".text-info", { delay: 200 });
sr.reveal(".text-btn", { delay: 200 });
sr.reveal(".social_icons", { delay: 200 });
sr.reveal(".project-box", { interval: 200 });
sr.reveal(".top-header");

// ScrollReveal from the left
const srL = ScrollReveal({
    origin: "left",
    distance: "80px",
    duration: 2000,
    reset: true
});

srL.reveal(".some-element-left");

// ScrollReveal from the right
const srR = ScrollReveal({
    origin: "right",
    distance: "80px",
    duration: 2000,
    reset: true
});

srR.reveal(".some-element-right", { delay: 200 });

