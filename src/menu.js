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
    let menuText = createElement('div', '', 'menu-text', menuItem);
    let foodTitle = createElement('div', 'Salmon Poke Bowl', 'menu-title', menuText);
    let foodInfo = createElement('div', '', 'menu-info', menuText);
    foodImg.append(food1);
    foodInfo.textContent = `Fresh, premium salmon marinated to
     perfection. Served over seasoned sushi rice with a colorful 
     medley of vegetables. Topped with creamy avocado, savory seaweed
    salad, and a drizzle of soy sauce dressing. Customize with optional extras.
     Enjoy the vibrant flavors of our Salmon Poke Bowl.`
}

export function createMenuPage(){
    initializeBackground();
    initializeNavigation();
    createMenu();
    initializeFooter();
}
