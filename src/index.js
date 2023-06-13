import './home'

/**
 * This file should contain tab switching
 */

function createElement(type, text, addClass, parent){
    const el = document.createElement(type);
    el.innerText = text;
    el.classList.add(addClass);
    parent.appendChild(el);
    return el;
}

function navigatorBar(){
    let pageContent = document.querySelector('#content');
    let universalHeader = createElement('div', '', 'header', pageContent);
    let logo = createElement('div', 'Mixology Manor', 'logo', universalHeader);
    let nav = createElement('div', '', 'navigation', universalHeader);
    let homeBtn = createElement('button', 'Home', 'button', nav);
    let menuBtn = createElement('button', 'Menu', 'button', nav);
    let contactBtn = createElement('button', 'Contact', 'button', nav);
} 
navigatorBar()