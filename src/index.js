import "./styles.css";
import createHome from './home.js';
import createMenu from './menu.js';
import createAbout from './about.js';

const content = document.querySelector("#content");

const homeBtn = document.querySelector(".home-btn");
const menuBtn = document.querySelector(".menu-btn");
const aboutBtn = document.querySelector(".about-btn");
const buttons = [homeBtn, menuBtn, aboutBtn];

function loadPage(page, activeBtn){
    buttons.forEach(btn => btn.classList.remove("active"));
    activeBtn.classList.add("active");

    content.innerHTML = "";
    content.append(page());


}

// INITIAL PAGE
loadPage(createHome, homeBtn);

homeBtn.addEventListener("click", ()=>{
    loadPage(createHome, homeBtn);
});

aboutBtn.addEventListener("click", ()=>{
    loadPage(createAbout, aboutBtn);
});

menuBtn.addEventListener("click", ()=>{
    loadPage(createMenu, menuBtn);
});

