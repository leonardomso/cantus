const icon = document.querySelector('.menu__icon');
const navigation = document.querySelector('.menu__navigation');
const logo = document.querySelector('.logo');

icon.addEventListener('click', showMenu, false);

function showMenu(e) {
    logo.style.display = 'none';
    icon.style.gridColumn = '2 / 3';
};

function setOn() {
    navigation.setAttribute('style', 'justify-content: flex-end;');
}

function setOff() {
    navigation.setAttribute('style', 'justify-content: center;');
}
