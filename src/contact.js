import './style.css'
import { createElement } from "./home";
import { initializeBackground } from "./home";
import { setPageIcon } from "./home";
import { initializeNavigation } from "./home";
import { initializeFooter } from "./home";

import Logo from './assets/pictures/logo.png'
import Icon from './assets/pictures/sushi-icon.png'
import Footer from './assets/pictures/github-mark.svg'

const FooterIcon = new Image();
FooterIcon.src = Footer;

const myIcon = new Image();
myIcon.src = Icon;

export function createContactPage(){
    initializeBackground();
    initializeNavigation();
    initializeFooter();
}
