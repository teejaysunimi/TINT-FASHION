const menuBtn = document.querySelector('.menu');
const sidebar = document.querySelector('.sidebar');
const sidebarLinks = sidebar.querySelectorAll('a');
const closeBtn = document.querySelector('closeMenu');

menuBtn.addEventListener('click', function (e) {
  e.preventDefault();
  sidebar.classList.toggle('active');
});
sidebarLinks.forEach(link => {
  link.addEventListener('click', () => {
    sidebar.classList.add('hidden');
});
});