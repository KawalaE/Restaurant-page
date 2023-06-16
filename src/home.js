import './style.css';

let content = document.querySelector('#content');

function createElement(type, text, addClass, parent){
    const el = document.createElement(type);
    el.innerText = text;
    el.classList.add(addClass);
    parent.appendChild(el);
    return el;
}

function initializeBackground(){
    content.classList.add('home-background');
} 
function createHomePage(){
    initializeBackground();
}

export default createElement;

createHomePage();
