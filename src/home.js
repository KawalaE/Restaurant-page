/**
 * This file will create homepage as a 
 * function that will be invoked via Event Listiner
 * that is inside index.js file as well as it will be
 * a default page.
 */
import './style.css';
function generateHomePage(){
    let pageContent = document.querySelector('#content');
    pageContent.classList.add('background');
    let circle = document.createElement('div');
    circle.classList.add('circle');

    pageContent.appendChild(circle)
    console.log('here');
}
generateHomePage();