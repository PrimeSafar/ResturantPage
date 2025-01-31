/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/Content/content.js":
/*!********************************!*\
  !*** ./src/Content/content.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   loadContent: () => (/* binding */ loadContent)\n/* harmony export */ });\nfunction loadContent() {\n    console.log('Contact Us section loaded');\n\n    // Remove any existing dynamic CSS link\n    const oldLink = document.getElementById('dynamic-css');\n    if (oldLink) oldLink.remove();\n\n    // Change content in the center text section\n    const content = document.querySelector('.CenterText');\n    content.innerHTML = '';  // Title for the Contact Us page\n\n    // Create the contact us form dynamically\n    const contactForm = document.createElement('div');\n    contactForm.classList.add('contact-us');\n    \n    // Contact Us Form Header\n    const header = document.createElement('h2');\n    header.innerText = 'We’d Love to Hear from You!';\n    contactForm.appendChild(header);\n    \n    const infoText = document.createElement('p');\n    infoText.innerText = 'Whether you have a question, want to make a reservation, or just want to share your experience, feel free to reach out.';\n    contactForm.appendChild(infoText);\n    \n    // Contact details section (email, phone, location)\n    const contactDetails = document.createElement('div');\n    contactDetails.classList.add('contact-details');\n\n    const emailItem = document.createElement('div');\n    emailItem.classList.add('contact-item');\n    emailItem.innerHTML = `<h3>Email:</h3><p><a href=\"mailto:info@restaurant99.com\">info@restaurant99.com</a></p>`;\n    contactDetails.appendChild(emailItem);\n\n    const phoneItem = document.createElement('div');\n    phoneItem.classList.add('contact-item');\n    phoneItem.innerHTML = `<h3>Phone:</h3><p><a href=\"tel:+1234567890\">+1 (234) 567-890</a></p>`;\n    contactDetails.appendChild(phoneItem);\n\n    const locationItem = document.createElement('div');\n    locationItem.classList.add('contact-item');\n    locationItem.innerHTML = `<h3>Location:</h3><p>Restaurant99, 123 Flavor Street, City, Country, 56789</p>`;\n    contactDetails.appendChild(locationItem);\n\n    contactForm.appendChild(contactDetails);\n\n    // Contact form\n    const form = document.createElement('form');\n    form.action = '/submit_contact';  // Adjust according to your back-end processing\n    form.method = 'POST';\n    \n    const nameGroup = document.createElement('div');\n    nameGroup.classList.add('form-group');\n    nameGroup.innerHTML = `<label for=\"name\">Your Name:</label><input type=\"text\" id=\"name\" name=\"name\" required>`;\n    form.appendChild(nameGroup);\n\n    const emailGroup = document.createElement('div');\n    emailGroup.classList.add('form-group');\n    emailGroup.innerHTML = `<label for=\"email\">Your Email:</label><input type=\"email\" id=\"email\" name=\"email\" required>`;\n    form.appendChild(emailGroup);\n\n    // const phoneGroup = document.createElement('div');\n    // phoneGroup.classList.add('form-group');\n    // phoneGroup.innerHTML = `<label for=\"phone\">Your Phone Number:</label><input type=\"tel\" id=\"phone\" name=\"phone\" placeholder=\"(xxx) xxx-xxxx\">`;\n    // form.appendChild(phoneGroup);\n\n    // const reservationGroup = document.createElement('div');\n    // reservationGroup.classList.add('form-group');\n    // reservationGroup.innerHTML = `<label for=\"reservation-date\">Preferred Reservation Date:</label><input type=\"date\" id=\"reservation-date\" name=\"reservation_date\">`;\n    // form.appendChild(reservationGroup);\n\n    const messageGroup = document.createElement('div');\n    messageGroup.classList.add('form-group');\n    messageGroup.innerHTML = `<label for=\"message\">Message:</label><textarea id=\"message\" name=\"message\" required></textarea>`;\n    form.appendChild(messageGroup);\n\n    const submitButton = document.createElement('button');\n    submitButton.classList.add('contButton')\n    submitButton.type = 'submit';\n    submitButton.innerText = 'Send Message';\n    form.appendChild(submitButton);\n\n    contactForm.appendChild(form);\n\n    // Append the Contact Us form to the content\n    content.appendChild(contactForm);\n\n    // Dynamically load the Content section's CSS\n    const link = document.createElement('link');\n    link.id = 'dynamic-css';\n    link.rel = 'stylesheet';\n    link.href = './Content/content.css';  // Path to Content section's CSS\n    document.head.appendChild(link);\n\n    // Dynamically load the Content section's JS\n    const script = document.createElement('script');\n    script.src = './Content/content.js';  // Path to Content section's JS\n    document.body.appendChild(script);\n}\n\n\n//# sourceURL=webpack:///./src/Content/content.js?");

/***/ }),

/***/ "./src/Home/home.js":
/*!**************************!*\
  !*** ./src/Home/home.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   loadHome: () => (/* binding */ loadHome)\n/* harmony export */ });\nfunction loadHome() {\n    console.log('Home section loaded');\n\n    // Remove any existing dynamic CSS link\n    const oldLink = document.getElementById('dynamic-css');\n    if (oldLink) oldLink.remove();\n\n    // Change content in the center text section\n    const content = document.querySelector('.CenterText');\n    content.innerHTML = `Welcome to <span class=\"CenterRes\">Restaurant99!</span> <br> \n                         Enjoy fresh flavors, warm hospitality, <br> and a dining experience made just for you.`;\n\n    // Dynamically load the Home section's CSS\n    const link = document.createElement('link');\n    link.id = 'dynamic-css';\n    link.rel = 'stylesheet';\n    link.href = './Home/home.css';  // Path to Home section's CSS\n    document.head.appendChild(link);\n\n    // Dynamically load the Home section's JS (optional here, just for clarity)\n    const script = document.createElement('script');\n    script.src = './Home/home.js';  // Path to Home section's JS\n    \n    document.body.appendChild(script);\n}\n\n\n//# sourceURL=webpack:///./src/Home/home.js?");

/***/ }),

/***/ "./src/Menu/menu.js":
/*!**************************!*\
  !*** ./src/Menu/menu.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   loadMenu: () => (/* binding */ loadMenu)\n/* harmony export */ });\nfunction loadMenu() {\n  console.log('Menu section loaded');\n\n  // Remove any existing dynamic CSS link\n  const oldLink = document.getElementById('dynamic-css');\n  if (oldLink) oldLink.remove();\n\n  // Change content in the center text section\n  const content = document.querySelector('.CenterText');\n  content.innerHTML = 'The Menu';  // Example for the Menu page\n\n  // Create wrapper div for pizzas and apply flex display\n  const pizzaWrapper = document.createElement('div');\n  pizzaWrapper.classList.add('pizzaWrapper'); // Add class for styling\n  pizzaWrapper.style.display = 'flex';  \n  pizzaWrapper.style.flexWrap='wrap'       // Set display to flex\n  pizzaWrapper.style.justifyContent = 'space-between';  // Adjust space between pizzas\n\n  // Create MenuDiv for Pizza 1\n  const MenuDiv1 = document.createElement('div');\n  MenuDiv1.classList.add('MenuDiv1');\n  const Pizza1 = document.createElement('img');\n  Pizza1.classList.add('PizzaImg1');\n  Pizza1.src = '/src/photo/pizza1-removebg-preview.png';\n  Pizza1.alt = 'The pizza 1';\n  const TextImg1 = document.createElement('div');\n  TextImg1.classList.add('Text1Img');\n  TextImg1.textContent = 'American Pizza';\n  const price1 = document.createElement('div');\n  price1.classList.add('PricePizza1');\n  price1.textContent = 'Price 9$';\n  const descripPizza1 = document.createElement('div');\n  descripPizza1.textContent = '\"Fresh veggies, and melted cheese on a crispy crust.\"';\n  descripPizza1.classList.add('descripPizza');\n  const merge1 = document.createElement('div');\n  merge1.classList.add('merge');\n  merge1.appendChild(TextImg1);\n  merge1.appendChild(price1);\n  merge1.appendChild(descripPizza1);\n  MenuDiv1.appendChild(merge1);\n  MenuDiv1.appendChild(Pizza1);\n\n  // Create MenuDiv for Pizza 2\n  const MenuDiv2 = document.createElement('div');\n  MenuDiv2.classList.add('MenuDiv2');\n  const Pizza2 = document.createElement('img');\n  Pizza2.classList.add('ImgPizza2');\n  Pizza2.src = '/src/photo/pizza2-removebg-preview.png';\n  Pizza2.alt = 'The pizza 2';\n  const TextImg2 = document.createElement('div');\n  TextImg2.classList.add('TextImg2');\n  TextImg2.textContent = 'Italian Pizza';\n  const price2 = document.createElement('div');\n  price2.textContent = 'Price 12$';\n  price2.classList.add('PricePizza2');\n  const descripPizza2 = document.createElement('div');\n  descripPizza2.textContent = '\"Fresh veggies, savory black olives, mushrooms, and melted cheese.\"';\n  descripPizza2.classList.add('descriptionPizz2');\n  const merge2 = document.createElement('div');\n  merge2.classList.add('merge');\n  merge2.appendChild(TextImg2);\n  merge2.appendChild(price2);\n  merge2.appendChild(descripPizza2);\n  MenuDiv2.appendChild(merge2);\n  MenuDiv2.appendChild(Pizza2);\n\n  // Create MenuDiv for Pizza 3\n  const MenuDiv3 = document.createElement('div');\n  MenuDiv3.classList.add('MenuDiv3');\n  const pizza3 = document.createElement('img');\n  pizza3.src = '/src/photo/pizza3-removebg-preview.png';  // Change the image path if needed\n  pizza3.alt = 'The pizza 3';\n  pizza3.classList.add('PizzaImg3');  // Correct class name\n\n  const TextImg3 = document.createElement('div');\n  TextImg3.classList.add('TextImg3');\n  TextImg3.textContent = 'Seafood Pizza';\n\n  const price3 = document.createElement('div');\n  price3.classList.add('price3');\n  price3.textContent = 'Price 15$';\n\n  const descripPizza3 = document.createElement('div');\n  descripPizza3.classList.add('descripPizza3');\n  descripPizza3.textContent = '\"A delicious combination of shrimp, mussels, and cheese.\"';\n\n  const merge3 = document.createElement('div');\n  merge3.classList.add('merge');\n\n  MenuDiv3.appendChild(pizza3);\n  merge3.appendChild(TextImg3);\n  merge3.appendChild(price3);\n  merge3.appendChild(descripPizza3);\n\n  MenuDiv3.appendChild(merge3);\n  MenuDiv3.appendChild(pizza3);\n\n  // Append pizzas to the pizzaWrapper\n  pizzaWrapper.appendChild(MenuDiv1);\n  pizzaWrapper.appendChild(MenuDiv2);\n  pizzaWrapper.appendChild(MenuDiv3);\n\n  // ** Add Spaghetti items **\n\n  // Create MenuDiv for Spaghetti 1\n  const SpaghettiDiv1 = document.createElement('div');\n  SpaghettiDiv1.classList.add('MenuDiv1');\n  const Spaghetti1 = document.createElement('img');\n  Spaghetti1.classList.add('SpaghettiImg1');\n  Spaghetti1.src = '/src/photo/sp1.png';  // Adjust the image path\n  Spaghetti1.alt = 'Spaghetti 1';\n  const TextImgSpaghetti1 = document.createElement('div');\n  TextImgSpaghetti1.classList.add('Text1ImgSp1');\n  TextImgSpaghetti1.textContent = 'Spaghetti Marinara';\n  const priceSpaghetti1 = document.createElement('div');\n  priceSpaghetti1.classList.add('PriceSpaghetti1');\n  priceSpaghetti1.textContent = 'Price 10$';\n  const descripSpaghetti1 = document.createElement('div');\n  descripSpaghetti1.textContent = '\"Classic spaghetti with marinara sauce and herbs.\"';\n  descripSpaghetti1.classList.add('descripSpaghetti');\n  const mergeSpaghetti1 = document.createElement('div');\n  mergeSpaghetti1.classList.add('merge');\n  mergeSpaghetti1.appendChild(TextImgSpaghetti1);\n  mergeSpaghetti1.appendChild(priceSpaghetti1);\n  mergeSpaghetti1.appendChild(descripSpaghetti1);\n  SpaghettiDiv1.appendChild(mergeSpaghetti1);\n  SpaghettiDiv1.appendChild(Spaghetti1);\n\n  // Create MenuDiv for Spaghetti 2\n  const SpaghettiDiv2 = document.createElement('div');\n  SpaghettiDiv2.classList.add('MenuDiv2');\n  const Spaghetti2 = document.createElement('img');\n  Spaghetti2.classList.add('SpaghettiImg2');\n  Spaghetti2.src = '/src/photo/sp2.png';  // Adjust the image path\n  Spaghetti2.alt = 'Spaghetti 2';\n  const TextImgSpaghetti2 = document.createElement('div');\n  TextImgSpaghetti2.classList.add('TextImgSp2');\n  TextImgSpaghetti2.textContent = 'Spaghetti Bolognese';\n  const priceSpaghetti2 = document.createElement('div');\n  priceSpaghetti2.classList.add('PriceSpaghetti2');\n  priceSpaghetti2.textContent = 'Price 13$';\n  const descripSpaghetti2 = document.createElement('div');\n  descripSpaghetti2.classList.add('descriptionSpaghetti2');\n  descripSpaghetti2.textContent = '\"A creamy carbonara sauce with crispy pancetta.\"';\n  const mergeSpaghetti2 = document.createElement('div');\n  mergeSpaghetti2.classList.add('merge');\n  mergeSpaghetti2.appendChild(TextImgSpaghetti2);\n  mergeSpaghetti2.appendChild(priceSpaghetti2);\n  mergeSpaghetti2.appendChild(descripSpaghetti2);\n  SpaghettiDiv2.appendChild(mergeSpaghetti2);\n  SpaghettiDiv2.appendChild(Spaghetti2);\n\n  // Create MenuDiv for Spaghetti 3\n  const SpaghettiDiv3 = document.createElement('div');\n  SpaghettiDiv3.classList.add('MenuDiv3');\n  const Spaghetti3 = document.createElement('img');\n  Spaghetti3.classList.add('SpaghettiImg3');\n  Spaghetti3.src = '/src/photo/spagitywithmeat-removebg-preview.png';  // Adjust the image path\n  Spaghetti3.alt = 'Spaghetti 3';\n  const TextImgSpaghetti3 = document.createElement('div');\n  TextImgSpaghetti3.classList.add('TextImgSp3');\n  TextImgSpaghetti3.textContent = 'Spaghetti Carbonara';\n  const priceSpaghetti3 = document.createElement('div');\n  priceSpaghetti3.classList.add('PriceSpaghetti3');\n  priceSpaghetti3.textContent = 'Price 14$';\n  const descripSpaghetti3 = document.createElement('div');\n  descripSpaghetti3.classList.add('descripSpaghetti3');\n  descripSpaghetti3.textContent = '\"Spaghetti with rich meat sauce and herbs.\"';\n  const mergeSpaghetti3 = document.createElement('div');\n  mergeSpaghetti3.classList.add('merge');\n  mergeSpaghetti3.appendChild(TextImgSpaghetti3);\n  mergeSpaghetti3.appendChild(priceSpaghetti3);\n  mergeSpaghetti3.appendChild(descripSpaghetti3);\n  SpaghettiDiv3.appendChild(mergeSpaghetti3);\n  SpaghettiDiv3.appendChild(Spaghetti3);\n\n  // Append spaghetti to the pizzaWrapper\n  pizzaWrapper.appendChild(SpaghettiDiv1);\n  pizzaWrapper.appendChild(SpaghettiDiv2);\n  pizzaWrapper.appendChild(SpaghettiDiv3);\n\n  // Add the pizzaWrapper to the content section\n  content.appendChild(pizzaWrapper);\n\n  // Dynamically load the Menu section's CSS\n  const link = document.createElement('link');\n  link.id = 'dynamic-css';\n  link.rel = 'stylesheet';\n  link.href = './Menu/menu.css';  // Path to Menu section's CSS\n  document.head.appendChild(link);\n\n  // Dynamically load the Menu section's JS\n  const script = document.createElement('script');\n  script.src = './Menu/menu.js';  // Path to Menu section's JS\n  document.body.appendChild(script);\n}\n\n\n//# sourceURL=webpack:///./src/Menu/menu.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Home_home_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Home/home.js */ \"./src/Home/home.js\");\n/* harmony import */ var _Menu_menu_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Menu/menu.js */ \"./src/Menu/menu.js\");\n/* harmony import */ var _Content_content_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Content/content.js */ \"./src/Content/content.js\");\n// Import functions to load Home, Menu, and Content sections\n\n\n\n// import './style.css'; // Example CSS import\n// import '/src/Home/home.css'\n// import '/src/Menu/menu.css'\n// import '/src/Content/content.css'\n\n\nconsole.log(\"index.js loaded\");\n\n// Wait until the DOM is ready\ndocument.addEventListener('DOMContentLoaded', () => {\n    const homeButton = document.querySelector('.nav-btnHome');\n    const menuButton = document.querySelector('.nav-btnMenu');\n    const contentButton = document.querySelector('.nav-btnCont');\n\n    // Add event listeners to the buttons\n    homeButton.addEventListener('click', () => (0,_Home_home_js__WEBPACK_IMPORTED_MODULE_0__.loadHome)());\n    menuButton.addEventListener('click', () => (0,_Menu_menu_js__WEBPACK_IMPORTED_MODULE_1__.loadMenu)());\n    contentButton.addEventListener('click', () => (0,_Content_content_js__WEBPACK_IMPORTED_MODULE_2__.loadContent)());\n});\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;