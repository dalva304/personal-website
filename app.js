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

  