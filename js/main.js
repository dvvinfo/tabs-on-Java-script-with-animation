// Создаем функцию которая скрывает табы кроме перого
// Create a function that hides the tabs except the first
let tab = document.querySelectorAll('.info-header-tab'),
info = document.querySelector('.info-header'),
tabContent = document.querySelectorAll('.info-tabcontent');

function hideTabContent(a){
   for (let i = a; i <tabContent.length; i++) {
       tabContent[i].classList.remove('show');
       tabContent[i].classList.add('hide');
   } 
}

hideTabContent(1);

// Создаем функцию которая показывет табы
// Create a function that shows tabs
function showTabContent(b) {
    if (tabContent [b].classList.contains('hide')){
        tabContent[b].classList.remove('hide');
       tabContent[b].classList.add('show');

    }
}

// Создаем обработчик событий при клике на табы
// Create an event handler when clicking on tabs
info.addEventListener('click',function(event){
    let tardent = event.target;
    if (tardent && tardent.classList.contains('info-header-tab')) {
        for(let i = 0; i < tab.length; i++) {
           if (tardent == tab[i]) {
            hideTabContent(0);
            showTabContent(i);
            break;
           } 
        }
    }

    });