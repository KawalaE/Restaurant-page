import './style.css';
import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';
let content = document.querySelector('#content');
import Logo from './assets/pictures/logo.png'
import Icon from './assets/pictures/sushi-icon.png'
import Footer  from './assets/pictures/github-mark.svg'
import SliderImage_1 from './assets/pictures/food/food_1.jpg'
import SliderImage_2 from './assets/pictures/food/food_2.jpg'
import SliderImage_3 from './assets/pictures/food/food_3.jpg'
import SliderImage_4 from './assets/pictures/food/food_4.jpg'
import SliderImage_5 from './assets/pictures/food/food_5.jpg'
import SliderImage_6 from './assets/pictures/food/food_6.jpg'


export const food1 = new Image();
food1.src = SliderImage_1;

export const food2 = new Image();
food2.src = SliderImage_2;

export const food3 = new Image();
food3.src = SliderImage_3;

export const food4 = new Image();
food4.src = SliderImage_4;

export const food5 = new Image();
food5.src = SliderImage_5;

export const food6 = new Image();
food6.src = SliderImage_6;

const myIcon = new Image();
myIcon.src = Icon;

export const FooterIcon = new Image();
FooterIcon.src = Footer;

export function createElement(type, text, addClass, parent){
    const el = document.createElement(type);
    el.innerText = text;
    el.classList.add(addClass);
    parent.appendChild(el);
    return el;
}

export function initializeBackground(){
    content.classList.add('home-background');
} 
export function setPageIcon(){
    let headTitle = document.querySelector('head');
    let setFavicon = document.createElement('link');
    setFavicon.setAttribute('rel', 'shortcut icon');
    setFavicon.setAttribute('href', myIcon.src);
    headTitle.appendChild(setFavicon);
}
export function initializeNavigation(){
    setPageIcon();
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

function initializeHomeContent(){
    let homeContent = createElement('div', '', 'home-content', content);
    let homeBox = createElement('div', '', 'home-box', homeContent);
    let slogan = createElement('div', '', 'home-slogan', homeBox);
    let homeInfo = createElement('div', '', 'home-info', homeBox);
    
    slogan.textContent = `"Delight in Every Bite at Sushi House!"`;
    homeInfo.textContent = `Sushi House is a popular sushi 
    restaurant known for its exquisite Japanese cuisine and 
    exceptional dining experience. Located in the heart of the 
    city, Sushi House offers a wide range of traditional and 
    contemporary sushi creations, prepared with the freshest 
    ingredients and expert craftsmanship.`

    let swiper = createElement('div', '', 'swiper-container', homeBox);
    let swiperWrapper = createElement('div', '', 'swiper-wrapper', swiper);
    let swiperSlide_1 = createElement('div', '', 'swiper-slide', swiperWrapper);
    swiperSlide_1.append(food1);
    let swiperSlide_2 = createElement('div', '', 'swiper-slide', swiperWrapper);
    swiperSlide_2.append(food2);
    let swiperSlide_3 = createElement('div', '', 'swiper-slide', swiperWrapper);
    swiperSlide_3.append(food3);
    let swiperSlide_4 = createElement('div', '', 'swiper-slide', swiperWrapper);
    swiperSlide_4.append(food4);
    let swiperSlide_5 = createElement('div', '', 'swiper-slide', swiperWrapper);
    swiperSlide_5.append(food5);
    let swiperSlide_6 = createElement('div', '', 'swiper-slide', swiperWrapper);
    swiperSlide_6.append(food6);
    
    var Swiper1 = new Swiper(".swiper-container", {
        effect: "coverflow",
        grabCursor: true,
        centeredSlides: true,
        slidesPerView: 'auto',
        initialSlide: 2,

        coverflowEffect: {
          rotate: 0,
          stretch: 0,
          depth: 28,
          modifier: 4,
          initialSlide: 3,
          slideShadows: true
        },
        pagination: {
          el: ".swiper-pagination",
           clickable: true
        },
        loop: true,
        autoplay: {
            delay: 2000,
        },
    });
}
export function initializeFooter(){
    let footer = createElement('div', '', 'footer',content);
    let footerContent = createElement('div', 'Created by KawalaE', 'footer-content', footer);
    let githubMark = document.createElement('a');
    footer.appendChild(githubMark);
    githubMark.href = 'https://github.com/KawalaE/Restaurant-page';
    let githubMarkImg = createElement('img', '', 'github-logo', githubMark);
    githubMarkImg.src = FooterIcon.src;
}
export function createHomePage(){
    setPageIcon(myIcon.src);
    initializeBackground();
    initializeNavigation();
    initializeHomeContent();
    initializeFooter();
}

