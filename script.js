// ===============================
// Scroll Progress Bar
// ===============================

window.addEventListener("scroll", () => {

    const scrollTop = document.documentElement.scrollTop;
    const scrollHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;

    const progress = (scrollTop / scrollHeight) * 100;

    document.getElementById("progressbar").style.width =
        progress + "%";

});


// ===============================
// Smooth Navigation Active Link
// ===============================

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 150;

        if (pageYOffset >= sectionTop) {

            current = section.getAttribute("id");

        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {

            link.classList.add("active");

        }

    });

});


// ===============================
// Scroll Reveal Animation
// ===============================

const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.classList.add("show");

        }

    });

}, {

    threshold: 0.2

});

document.querySelectorAll(
".about-card,.skill-card,.project,.timeline-box,form,.box"
).forEach(el => {

    el.classList.add("hidden");

    observer.observe(el);

});


// ===============================
// Mobile Menu
// ===============================

const menuBtn = document.querySelector(".menu-btn");
const nav = document.querySelector("nav");

menuBtn.addEventListener("click", () => {

    nav.classList.toggle("showMenu");

});


// ===============================
// Back To Top Button
// ===============================

const topButton = document.createElement("button");

topButton.innerHTML = "↑";

topButton.id = "topBtn";

document.body.appendChild(topButton);

window.addEventListener("scroll", () => {

    if (window.scrollY > 400) {

        topButton.style.display = "block";

    }

    else {

        topButton.style.display = "none";

    }

});

topButton.onclick = () => {

    window.scrollTo({

        top:0,

        behavior:"smooth"

    });

};


// ===============================
// Typing Text Animation
// ===============================

const typing = document.querySelector(".typing");

const words = [

    "Full Stack Developer",

    "Software Engineer",

    "Cloud Enthusiast",

    "Java Developer",

    "Python Programmer"

];

let wordIndex = 0;

setInterval(() => {

    wordIndex++;

    if(wordIndex >= words.length){

        wordIndex = 0;

    }

    typing.textContent = words[wordIndex];

},2500);


// ===============================
// Navbar Background
// ===============================

window.addEventListener("scroll",()=>{

    const header=document.querySelector("header");

    if(window.scrollY>60){

        header.style.background="rgba(6,8,22,.95)";

    }

    else{

        header.style.background="rgba(255,255,255,.05)";

    }

});


// ===============================
// Button Ripple Effect
// ===============================

document.querySelectorAll("button,.btn,.btn2").forEach(btn=>{

btn.addEventListener("click",function(e){

const circle=document.createElement("span");

const x=e.clientX-this.offsetLeft;

const y=e.clientY-this.offsetTop;

circle.style.left=x+"px";

circle.style.top=y+"px";

circle.classList.add("ripple");

this.appendChild(circle);

setTimeout(()=>{

circle.remove();

},600);

});

});