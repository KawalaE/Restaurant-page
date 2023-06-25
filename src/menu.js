import './style.css';
import {
  food1, food2, food3, food4, food5, food6,
  initializeFooter, initializeNavigation, createElement,
} from './home';

const content = document.getElementById('content');

function createMenuItem(title, image, text, menuContent) {
  const menuBox = createElement('div', '', 'menu-box', menuContent);
  const menuItem = createElement('div', '', 'menu-item', menuBox);
  const foodImg = createElement('div', '', 'menu-img', menuItem);
  const menuText = createElement('div', '', 'menu-text', menuItem);
  const foodTitle = createElement('div', title, 'menu-title', menuText);
  const foodInfo = createElement('div', '', 'menu-info', menuText);
  foodImg.append(image);
  foodInfo.textContent = text;
}

function createMenu() {
  const menuContent = createElement('div', '', 'menu-content', content);
  const salmonDishDescription = `Fresh, premium salmon marinated to 
    perfection. Served over seasoned sushi rice with a colorful medley 
    of vegetables. Topped with creamy avocado, savory seaweed salad,
    and a drizzle of soy sauce dressing. Customize with optional 
    extras. Enjoy the vibrant flavors of our Salmon Poke Bowl.`;

  const rollsDishDescription = `Indulge in the perfect combination of 
    flavors and textures with our Philadelphia Rolls. These delectable 
    sushi rolls feature a luscious filling of fresh salmon and creamy 
    cream cheese, encased in a delicate layer of sushi rice and seaweed.`;

  const sashimiDishDescription = `Fresh, thinly sliced sashimi served with
    vibrant red tobiko. Experience the pure flavors of premium fish 
    complemented by the briny pop of fish eggs. Savor the elegance of 
    our Sashimi with Red Tobiko.`;

  const ramenDishDescription = `A comforting bowl of ramen featuring tender
    Brussels sprouts, a perfectly cooked egg, and a flavorful broth. 
    Experience the satisfying blend of silky noodles, hearty vegetables,
    and creamy egg. Enjoy our Brussels Egg Ramen.`;

  const samplerDishDescription = `Immerse yourself in the delectable
    world of sushi with our Sushi Sampler. This enticing set features a 
    tantalizing assortment of 12 handcrafted sushi pieces that will 
    take your taste buds on a journey of flavors.`;

  const sushiSetDescription = `Our irresistible platter of 23 exquisite
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

export default function createMenuPage() {
  initializeNavigation();
  createMenu();
  initializeFooter();
}
