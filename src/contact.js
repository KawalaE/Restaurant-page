import './style.css';
import {
  createElement, initializeBackground, initializeNavigation, initializeFooter,
} from './home';
import Map from './assets/pictures/map.png';

const myMap = new Image();
myMap.src = Map;

const content = document.querySelector('#content');
function initializeContactInfo() {
  const contactBackground = createElement('div', '', 'contact-background', content);
  const contactBox = createElement('div', '', 'contact-box', contactBackground);
  const contactContent = createElement('div', '', 'contact-content', contactBox);
  contactContent.append(myMap);
  const contactText = createElement('div', '', 'contact-text', contactContent);
  const contactTitle = createElement('div', '', 'contact-title', contactText);
  contactTitle.textContent = 'Come pay us a visit!';
  const contactDetails = createElement('div', '', 'contact-detail', contactText);
  contactDetails.textContent = 'Phone Number: +1 (555) 123-4567 \r\n';
  contactDetails.textContent += 'Street: 457 Elmwood Avenue \r\n';
  contactDetails.textContent += 'City: Springfield \r\n';
  contactDetails.textContent += 'State: Massachusetts \r\n';
  contactDetails.textContent += 'ZIP Code: 01108 \r\n';
  contactDetails.textContent += 'Country: United States \r\n';
}
export default function createContactPage() {
  initializeBackground();
  initializeNavigation();
  initializeContactInfo();
  initializeFooter();
}
