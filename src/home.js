import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';
import Drink1 from './assets/images/blue.png';
import Drink2 from './assets/images/green.png';
import Drink3 from './assets/images/pink.png';
import Drink4 from './assets/images/small-pink.png';
import Drink5 from './assets/images/small-yellow.png';
import './style.css';
let pageContent = document.querySelector('#content');

function createElement(type, text, addClass, parent){
    const el = document.createElement(type);
    el.innerText = text;
    el.classList.add(addClass);
    parent.appendChild(el);
    return el;
}
function initializeSwiper(){
    const swiper = new Swiper(".swiper", {
        effect: "coverflow",
        grabCursor: true,
        centeredSlides: true,
        slidesPerView: 'auto',
        coverflowEffect: {
          rotate: 0,
          stretch: 0,
          depth: 200,
          modifier: 1,
          slideShadows: true,
        },
        pagination: {
          el: ".swiper-pagination",
        },
        loop: true,
        autoplay: {
            delay: 1,
            disableOnInteraction: false
        },
        speed: 1000,
        spaceBetween:10,
      });
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
    //let infoButton = createElement('button', 'Learn more', 'button2', description);
    let slider = createElement('div', '', 'slider', midContent);
    descriptionTitle.textContent = "Mixology Manor - Your Spirited Playground!";
    descriptionContent.textContent = ` Step into The Mixology Manor, 
    a vibrant and captivating cocktail bar where mixology 
    takes center stage. Our bar is a fusion of creativity, 
    innovation, and a hint of mystery. As you enter, you'll be greeted by skilled mixologists, 
    true artists of the craft, who will take you on a journey of unique flavors 
    and unforgettable experiences.`;
    
    
    const drink1 = new Image();
    drink1.src = Drink1;

    const drink2 = new Image();
    drink2.src = Drink2;

    const drink3 = new Image();
    drink3.src = Drink3;

    const drink4 = new Image();
    drink4.src = Drink4;

    const drink5 = new Image();
    drink5.src = Drink5;

    let swiperContainer = createElement('div', '', 'swiper', slider);
    let swiperWrapper= createElement('div', '', 'swiper-wrapper', swiperContainer);
    let swiperSlide_1 = createElement('div','', 'swiper-slide', swiperWrapper);
    swiperSlide_1.appendChild(drink1);

    let swiperSlide_2 = createElement('div','', 'swiper-slide', swiperWrapper);
    swiperSlide_2.appendChild(drink2);

    let swiperSlide_3 = createElement('div','', 'swiper-slide', swiperWrapper);
    swiperSlide_3.appendChild(drink3);

    let swiperSlide_4 = createElement('div','', 'swiper-slide', swiperWrapper);
    swiperSlide_4.appendChild(drink4);

    let swiperSlide_5 = createElement('div','', 'swiper-slide', swiperWrapper);
    swiperSlide_5.appendChild(drink5);
    initializeSwiper();
}
function initializehomePage(){
    generateHomeBackground();
    createNavigatorBar();
    generateHomeContent();
    
}

initializehomePage();
export default createElement;
