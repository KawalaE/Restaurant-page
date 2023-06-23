import './home'
import './style.css'
import { createHomePage } from './home'
import { createContactPage } from './contact';
import { createMenuPage } from './menu';

createHomePage();
const content = document.getElementById('content');
let menuButton;
let homeButton;
let contactButton;

function buttonSelection(){
    menuButton = document.querySelector('.menu-button');
    homeButton = document.querySelector('.home-button');
    contactButton = document.querySelector('.contact-button');
}
buttonSelection();

function removeAllChildNodes(parent){
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}

function monitorNavigationButtons(){
    
    homeButton.addEventListener("click", ()=>{
        removeAllChildNodes(content);
        createHomePage();
        buttonSelection();
        monitorNavigationButtons();
        console.log('home');
    });
    menuButton.addEventListener("click", ()=>{
        removeAllChildNodes(content);
        createMenuPage();
        buttonSelection();
        monitorNavigationButtons();
        console.log('menu');
    });
    contactButton.addEventListener("click", ()=>{
        removeAllChildNodes(content);
        createContactPage();
        buttonSelection();
        monitorNavigationButtons();
        console.log('contact');
    });
}

monitorNavigationButtons();