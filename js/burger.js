let burgerMenu = document.querySelector('#burger'),
    menuList = document.querySelector('#header-ul');

function openMenu() {
    menuList.classList.toggle('m-hidden')
}

burgerMenu.addEventListener('click', openMenu)