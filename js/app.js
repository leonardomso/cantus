let icon = document.querySelector('#bars');
let navigation = document.querySelector('.navigation');

icon.addEventListener('click', () => {
    navigation.setAttribute('style', 'justify-content: flex-end;');
}, false);

function setOn() {
    navigation.setAttribute('style', 'justify-content: flex-end;');
}

function setOff() {
    navigation.setAttribute('style', 'justify-content: center;');
}
