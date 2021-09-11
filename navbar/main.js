const toggleBtn = document.querySelector('.navbar_toggleBtn');
const menu = document.querySelector('.nav_menu');
const icon = document.querySelector('.nav_icon');

toggleBtn.addEventListener('click', () => {
    menu.classList.toggle('active');
    icon.classList.toggle('active');
})