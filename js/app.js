let icon = document.querySelector('#bars');
let navigation = document.querySelector('.navigation');

icon.addEventListener('click', () => {
    if(navigation.hasAttribute('justify-content: center')) {
        navigation.setAttribute('style', 'justify-content: flex-end;');
    }    
}, false);
