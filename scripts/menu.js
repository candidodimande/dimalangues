var menu_button = document.querySelector ('.menu-button')
var menu = document.querySelector('.active-menu')
var menu_list = document.querySelector('.menu-list')

menu_button.addEventListener('click', function(){
    menu.classList.toggle('show-menu')
    menu_list.classList.toggle('show-menu-list')
});