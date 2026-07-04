/* Typing Animation */
const words = [
    "Cyber Security Student",
    "Ethical Hacker",
    "Penetration Tester",
    "AI Enthusiast"
];
let wordIndex = 0;
let letterIndex = 0;
let deleting = false;
function typeEffect(){
    const typing = document.getElementById("typing");
    if(!typing) return;
    const current = words[wordIndex];
    if(!deleting){
        typing.textContent = current.substring(0, letterIndex++);
        if(letterIndex > current.length){
            deleting = true;
            setTimeout(typeEffect,1500);
            return;
        }
    }else{
        typing.textContent = current.substring(0, letterIndex--);
        if(letterIndex < 0){
            deleting = false;
            wordIndex = (wordIndex + 1) % words.length;
        }
    }
    setTimeout(typeEffect, deleting ? 50 : 100);
}
typeEffect();
/* Cursor Glow */
const glow = document.querySelector(".cursor-glow");
document.addEventListener("mousemove", (e)=>{
    glow.style.left = e.clientX + "px";
    glow.style.top = e.clientY + "px";
});
// Loader
window.addEventListener("load",()=>{
    const loader=document.getElementById("loader");
    loader.style.opacity="0";
    setTimeout(()=>{
        loader.style.display="none";
    },700);
});

/* Sticky Navbar */
const header = document.querySelector("header");
window.addEventListener("scroll", () => {
    if(window.scrollY > 50){
        header.classList.add("scrolled");
    }else{
        header.classList.remove("scrolled");
    }
});

/* Scroll Progress Bar */
const progressBar = document.getElementById("progress-bar");
window.addEventListener("scroll",()=>{
    const scroll =
        document.documentElement.scrollTop;
    const height =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;
    const progress = (scroll / height) * 100;
    progressBar.style.width = progress + "%";
});
/* Back To Top */
const topBtn = document.getElementById("topBtn");
window.addEventListener("scroll",()=>{
    if(window.scrollY > 400){
        topBtn.style.display = "block";
    }else{
        topBtn.style.display = "none";
    }
});
topBtn.addEventListener("click",()=>{
    window.scrollTo({
        top:0,
        behavior:"smooth"
    });
});