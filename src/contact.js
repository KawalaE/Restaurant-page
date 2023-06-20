import './style.css'
import { createElement} from "./home";
import { initializeBackground } from "./home";
import { initializeNavigation } from "./home";
import { initializeFooter} from "./home";
import Map from './assets/pictures/map.png';

const myMap= new Image();
myMap.src = Map;

let content = document.querySelector('#content');

function initializeContactInfo(){
    const contactBackground = createElement('div', '', 'contact-background', content);
    const contactBox = createElement('div', '', 'contact-box', contactBackground);
    const contactContent = createElement('div', '', 'contact-content', contactBox);
    contactContent.append(myMap);
}
export function createContactPage(){
    initializeBackground();
    initializeNavigation();
    initializeContactInfo();
    initializeFooter();
}
