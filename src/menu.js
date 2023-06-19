import './style.css'

import { createElement, initializeBackground } from "./home";
import { initializeNavigation } from "./home";
import { initializeFooter } from "./home";
import { food1, food2, food3, food4, food5, food6 } from './home';

const content = document.getElementById('content');
function createMenu(){
    let menuContent = createElement('div', '', 'menu-content', content);
    let menuBox = createElement('div', '', 'menu-box', menuContent)
    let menuItem = createElement('div', '', 'menu-item', menuBox);
    let foodImg = createElement('div', '', 'menu-img', menuItem);
    let foodInfo = createElement('div', '', 'menu-info', menuItem)
}

export function createMenuPage(){
    initializeBackground();
    initializeNavigation();
    createMenu();
    initializeFooter();
}
