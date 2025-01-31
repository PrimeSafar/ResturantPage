// Import functions to load Home, Menu, and Content sections
import { loadHome } from './Home/home.js';
import { loadMenu } from './Menu/menu.js';
import { loadContent } from './Content/content.js';
// import './style.css'; // Example CSS import
// import '/src/Home/home.css'
// import '/src/Menu/menu.css'
// import '/src/Content/content.css'


console.log("index.js loaded");

// Wait until the DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    const homeButton = document.querySelector('.nav-btnHome');
    const menuButton = document.querySelector('.nav-btnMenu');
    const contentButton = document.querySelector('.nav-btnCont');

    // Add event listeners to the buttons
    homeButton.addEventListener('click', () => loadHome());
    menuButton.addEventListener('click', () => loadMenu());
    contentButton.addEventListener('click', () => loadContent());
});
