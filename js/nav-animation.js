const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');
const listItem = document.querySelector('.list-item');
const line = document.querySelector('.line');
const logoDiv = document.querySelector('.logoDiv');


hamburger.addEventListener('click', () => {
    navLinks.classList.toggle("open");
    document.querySelector('.line').style.background = 'white';
    document.querySelector('.logoDiv').style.display = 'none';
});
// line.addEventListener('click', () => {
//     line.classList.style.background = "#ffffff";
// });
// document.querySelector('.line').addEventListener('click', () =>{
//     document.querySelector('.line').style.background = 'white';
// })