const header = document.querySelector("header");
window.addEventListener("scroll", function(){
    header.classList.toggle("sticky", window.scrollY > 100);
});

let menu = document.querySelector('#menu-icon');
let navlist = document.querySelector('.navlist');

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navlist.classList.toggle('open');
}

window.onscroll = () => {
    menu.classList.remove('bx-x');
    navlist.classList.remove('open');
}

// Get all the "read more" buttons
const readButtons = document.querySelectorAll('.read');

// Add event listener to each button
readButtons.forEach(button => {
  button.addEventListener('click', () => {
    // Toggle the display of the description
    const description = button.nextElementSibling;
    description.style.display = description.style.display === 'none' ? 'block' : 'none';
  });
});
