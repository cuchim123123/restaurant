import "./styles.css";
import createHome from './home.js';
import createMenu from './menu.js';
import createAbout from './about.js';

const content = document.querySelector("#content");

const homeBtn = document.querySelector(".home-btn");
const menuBtn = document.querySelector(".menu-btn");
const aboutBtn = document.querySelector(".about-btn");

function loadPage(page){
    content.innerHTML = "";
    content.append(page());
}

// INITIAL PAGE
loadPage(createHome);

homeBtn.addEventListener("click", ()=>{
    loadPage(createHome);
});

aboutBtn.addEventListener("click", ()=>{
    loadPage(createAbout);
});

menuBtn.addEventListener("click", ()=>{
    loadPage(createMenu);
});