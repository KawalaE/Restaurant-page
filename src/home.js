import './style.css';
import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';
let content = document.querySelector('#content');
import Logo from './assets/pictures/logo.png'
import Icon from './assets/pictures/sushi-icon.png'
import Footer  from './assets/pictures/github-mark.svg'

const myIcon = new Image();
myIcon.src = Icon;

const FooterIcon = new Image();
FooterIcon.src = Footer;

export function createElement(type, text, addClass, parent){
    const el = document.createElement(type);
    el.innerText = text;
    el.classList.add(addClass);
    parent.appendChild(el);
    return el;
}

function initializeBackground(){
    content.classList.add('home-background');
} 
function setPageIcon(icon){
    let headTitle = document.querySelector('head');
    let setFavicon = document.createElement('link');
    setFavicon.setAttribute('rel', 'shortcut icon');
    setFavicon.setAttribute('href', icon);
    headTitle.appendChild(setFavicon);
}
function initializeNavigation(){
    setPageIcon(myIcon.src);
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
    let homeInfo = createElement('div', '', 'home-info', homeBox);

    homeInfo.textContent = `Sushi House is a popular sushi 
    restaurant known for its exquisite Japanese cuisine and 
    exceptional dining experience. Located in the heart of the 
    city, Sushi House offers a wide range of traditional and 
    contemporary sushi creations, prepared with the freshest 
    ingredients and expert craftsmanship.`
}
function initializeFooter(){
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

