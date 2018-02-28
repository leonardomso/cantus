const icon = document.querySelector('.menu__icon');
const navigation = document.querySelector('.menu__navigation');
const logo = document.querySelector('.logo');

icon.addEventListener('click', showMenu, false);

function showMenu(e) {
    console.log(e.target)
};

function setOn() {
    navigation.setAttribute('style', 'justify-content: flex-end;');
}

function setOff() {
    navigation.setAttribute('style', 'justify-content: center;');
}
