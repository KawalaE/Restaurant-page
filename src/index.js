import './home'
import './style.css'
import  createElement from './home'
import Logo from './assets/pictures/logo.png'
/**
 * This file should contain tab switching
 */

let content = document.querySelector('#content');
function initializeNavigation(){
    const myLogo = new Image();
    myLogo.src = Logo;
    let topBar = createElement('div', '', 'navigation-bar', content);
    let logo = createElement('div', '', 'logo', topBar);
    logo.appendChild(myLogo);
    let navigation = createElement('div', '', 'navigation', topBar);
    let homeButton = createElement('button','Home', 'navigator-button', navigation);
    let menuButton = createElement('button', 'Menu', 'navigator-button', navigation);
    let contactButton = createElement('button', 'Contact', 'navigator-button', navigation);

}
initializeNavigation();
