/**
 * This file will create homepage as a 
 * function that will be invoked via Event Listiner
 * that is inside index.js file as well as it will be
 * a default page.
 */
import './style.css';
let pageContent = document.querySelector('#content');

function createElement(type, text, addClass, parent){
    const el = document.createElement(type);
    el.innerText = text;
    el.classList.add(addClass);
    parent.appendChild(el);
    return el;
}
function createNavigatorBar(){
    let universalHeader = createElement('div', '', 'header', pageContent);
    let logo = createElement('div', 'Mixology Manor', 'logo', universalHeader);
    let nav = createElement('div', '', 'navigation', universalHeader);
    let homeBtn = createElement('button', 'Home', 'button', nav);
    let menuBtn = createElement('button', 'Menu', 'button', nav);
    let contactBtn = createElement('button', 'Contact', 'button', nav);
} 

function generateHomeBackground(){
    let pageContent = document.querySelector('#content');
    pageContent.classList.add('background');
    let circle = createElement('div', '', 'circle',pageContent);
   
}
function generateHomeContent(){
    let midContent = createElement('div', '', 'content', pageContent);
    let description = createElement('div', '', 'leftSide', midContent);
    let descriptionTitle = createElement('h2', '', 'desc-title', description);
    let descriptionContent =createElement('div', '', 'desc', description);
    let slider = createElement('div', '', 'slider', midContent);
    descriptionTitle.textContent = "Mixology Manor - Your Spirited Playground!";
    descriptionContent.textContent = ` Step into The Mixology Manor, 
    a vibrant and captivating cocktail bar where mixology 
    takes center stage. Our bar is a fusion of creativity, 
    innovation, and a hint of mystery. As you enter, you'll be greeted by skilled mixologists, 
    true artists of the craft, who will take you on a journey of unique flavors 
    and unforgettable experiences.`
}
function initializehomePage(){
    generateHomeBackground();
    createNavigatorBar();
    generateHomeContent();
    
}
initializehomePage();
export default createElement;
