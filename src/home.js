import './style.css';
import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';
import Logo from './assets/pictures/logo.png';
import Icon from './assets/pictures/sushi-icon.png';
import Footer from './assets/pictures/github-mark.svg';
import sliderImageFirst from './assets/pictures/food/food_1.jpg';
import sliderImageSecond from './assets/pictures/food/food_2.jpg';
import sliderImageThird from './assets/pictures/food/food_3.jpg';
import sliderImageFourth from './assets/pictures/food/food_4.jpg';
import sliderImageFifth from './assets/pictures/food/food_5.jpg';
import sliderImageSixth from './assets/pictures/food/food_6.jpg';

const content = document.querySelector('#content');

export const food1 = new Image();
food1.src = sliderImageFirst;

export const food2 = new Image();
food2.src = sliderImageSecond;

export const food3 = new Image();
food3.src = sliderImageThird;

export const food4 = new Image();
food4.src = sliderImageFourth;

export const food5 = new Image();
food5.src = sliderImageFifth;

export const food6 = new Image();
food6.src = sliderImageSixth;

const myIcon = new Image();
myIcon.src = Icon;

export const FooterIcon = new Image();
FooterIcon.src = Footer;

export function createElement(type, text, addClass, parent) {
  const el = document.createElement(type);
  el.innerText = text;
  el.classList.add(addClass);
  parent.appendChild(el);
  return el;
}

export function initializeBackground() {
  content.classList.add('home-background');
}
export function setPageIcon() {
  const headTitle = document.querySelector('head');
  const setFavicon = document.createElement('link');
  setFavicon.setAttribute('rel', 'shortcut icon');
  setFavicon.setAttribute('href', myIcon.src);
  headTitle.appendChild(setFavicon);
}
export function initializeNavigation() {
  setPageIcon();
  const myLogo = new Image();
  myLogo.src = Logo;
  const topBar = createElement('div', '', 'navigation-bar', content);
  const logo = createElement('div', '', 'logo', topBar);
  logo.appendChild(myLogo);
  const navigation = createElement('div', '', 'navigation', topBar);
  const homeButton = createElement('button', 'Home', 'home-button', navigation);
  const menuButton = createElement('button', 'Menu', 'menu-button', navigation);
  const contactButton = createElement('button', 'Contact', 'contact-button', navigation);
  homeButton.classList.add('home-button');
  menuButton.classList.add('menu-button');
  contactButton.classList.add('contact-button');
}

function initializeHomeContent() {
  const homeContent = createElement('div', '', 'home-content', content);
  const homeBox = createElement('div', '', 'home-box', homeContent);
  const slogan = createElement('div', '', 'home-slogan', homeBox);
  const homeInfo = createElement('div', '', 'home-info', homeBox);

  slogan.textContent = '"Delight in Every Bite at Sushi House!"';
  homeInfo.textContent = `Sushi House is a popular sushi 
    restaurant known for its exquisite Japanese cuisine and 
    exceptional dining experience. Located in the heart of the 
    city, Sushi House offers a wide range of traditional and 
    contemporary sushi creations, prepared with the freshest 
    ingredients and expert craftsmanship.`;

  const swiper = createElement('div', '', 'swiper-container', homeBox);
  const swiperWrapper = createElement('div', '', 'swiper-wrapper', swiper);
  const swiperSlideFirst = createElement('div', '', 'swiper-slide', swiperWrapper);
  swiperSlideFirst.append(food1);
  const swiperSlideSecond = createElement('div', '', 'swiper-slide', swiperWrapper);
  swiperSlideSecond.append(food2);
  const swiperSlideThird = createElement('div', '', 'swiper-slide', swiperWrapper);
  swiperSlideThird.append(food3);
  const swiperSlideFourth = createElement('div', '', 'swiper-slide', swiperWrapper);
  swiperSlideFourth.append(food4);
  const swiperSlideFifth = createElement('div', '', 'swiper-slide', swiperWrapper);
  swiperSlideFifth.append(food5);
  const swiperSlideSixth = createElement('div', '', 'swiper-slide', swiperWrapper);
  swiperSlideSixth.append(food6);

  const swiperInstance = new Swiper('.swiper-container', {
    effect: 'coverflow',
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
      slideShadows: true,
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    loop: true,
    autoplay: {
      delay: 2000,
    },
  });
}
export function initializeFooter() {
  const footer = createElement('div', '', 'footer', content);
  const footerContent = createElement('div', 'Created by KawalaE', 'footer-content', footer);
  const githubMark = document.createElement('a');
  footer.appendChild(githubMark);
  githubMark.href = 'https://github.com/KawalaE/Restaurant-page';
  const githubMarkImg = createElement('img', '', 'github-logo', githubMark);
  githubMarkImg.src = FooterIcon.src;
}
export function createHomePage() {
  setPageIcon(myIcon.src);
  initializeBackground();
  initializeNavigation();
  initializeHomeContent();
  initializeFooter();
}
