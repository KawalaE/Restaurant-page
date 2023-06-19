import './style.css'

import { createElement, initializeBackground } from "./home";
import { initializeNavigation } from "./home";
import { initializeFooter } from "./home";
import { food1, food2, food3, food4, food5, food6 } from './home';

const content = document.getElementById('content');


function createMenuItem(title, image, text, menuContent){
    let menuBox = createElement('div', '', 'menu-box', menuContent);
    let menuItem = createElement('div', '', 'menu-item', menuBox);
    let foodImg = createElement('div', '', 'menu-img', menuItem);
    let menuText = createElement('div', '', 'menu-text', menuItem);
    let foodTitle = createElement('div', title, 'menu-title', menuText);
    let foodInfo = createElement('div', '', 'menu-info', menuText);
    foodImg.append(image);
    foodInfo.textContent = text;
}

function createMenu(){  
    let menuContent = createElement('div', '', 'menu-content', content);
    let salmonDishDescription = `Fresh, premium salmon marinated to 
    perfection. Served over seasoned sushi rice with a colorful medley 
    of vegetables. Topped with creamy avocado, savory seaweed salad,
    and a drizzle of soy sauce dressing. Customize with optional 
    extras. Enjoy the vibrant flavors of our Salmon Poke Bowl.`;

    let rollsDishDescription = `Indulge in the perfect combination of 
    flavors and textures with our Philadelphia Rolls. These delectable 
    sushi rolls feature a luscious filling of fresh salmon and creamy 
    cream cheese, encased in a delicate layer of sushi rice and seaweed.
    Each bite offers a delightful blend of savory salmon, rich cream 
    cheese, and the subtle umami flavors of the sushi rice and seaweed.`;

    let sashimiDishDescription = `Fresh, thinly sliced sashimi served with
    vibrant red tobiko. Experience the pure flavors of premium fish 
    complemented by the briny pop of fish eggs. Savor the elegance of 
    our Sashimi with Red Tobiko.`;

    let ramenDishDescription = `A comforting bowl of ramen featuring tender
    Brussels sprouts, a perfectly cooked egg, and a flavorful broth. 
    Experience the satisfying blend of silky noodles, hearty vegetables,
    and creamy egg. Enjoy our Brussels Egg Ramen.`;

    let samplerDishDescription = `Immerse yourself in the delectable
    world of sushi with our Sushi Sampler. This enticing set features a 
    tantalizing assortment of 12 handcrafted sushi pieces that will 
    take your taste buds on a journey of flavors.`;

    let sushiSetDescription =` Our irresistible platter of 23 exquisite
    sushi rolls. Indulge in a variety of flavors and textures expertly 
    crafted by our sushi chefs. It's a delightful feast that will leave
    you craving more. Join us for a memorable sushi experience today!`;

    createMenuItem('Salmon Poke Bowl', food1, salmonDishDescription, menuContent);
    createMenuItem('Philadelphia Rolls', food2, rollsDishDescription, menuContent);
    createMenuItem('Sashimi with Red Tobioko', food3, sashimiDishDescription, menuContent);
    createMenuItem('Brussels Egg Ramen', food4, ramenDishDescription, menuContent);
    createMenuItem('Sushi Sampler Set', food5, samplerDishDescription, menuContent);
    createMenuItem('Sushi Delight Set', food6, sushiSetDescription, menuContent);
    
}

export function createMenuPage(){
    initializeBackground();
    initializeNavigation();
    createMenu();
    initializeFooter();
}
