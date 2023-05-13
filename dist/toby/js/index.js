'use strict'

const body = document.querySelector('body');  


function lockScroll() {
    body.style.overflowY = 'hidden';
}

function unlockScroll() {
    body.style.overflowY = 'scroll';
}



// questions list

const helper = () => {
    
    const items = document.querySelectorAll('.questions__item');

    items.forEach(item => {
        item.addEventListener('click', (e) => {
            if (e.target.classList.contains('questions__trigger') || e.target.classList.contains('questions__trigger-item')) {
                item.classList.toggle('questions__item_active');
            }
        })
    })
};

if (body.getAttribute('id') === 'helper') {
    helper();
}



// tabs


function tabs () {
    const tabs = document.querySelectorAll('.profile__tab'),
    tabsParent = document.querySelector('.profile__tabs'),
    tabContent = document.querySelectorAll('.profile__tab-content');


    function hideTabContent(tabContents, activeClass) {
        tabContents.forEach(item => {
            item.classList.remove('show');
            item.classList.add('hide');
            tabs.forEach(tab => tab.classList.remove(activeClass));
        })
    }

    function showTabContent(tabContents, activeClass, tabs, i = 0) {
        tabContents[i].classList.remove('hide');
        tabContents[i].classList.add('show');    
        tabs[i].classList.add(activeClass);
    }

    hideTabContent(tabContent, 'profile__tab_active', tabs);
    showTabContent(tabContent, 'profile__tab_active', tabs);
        

    tabsParent.addEventListener('click', (e) => {
        e.preventDefault();    
        const target = e.target;

        if (target.classList.contains('profile__tab')) {
            tabs.forEach((item, i) => {
                if (target == item) {
                    hideTabContent(tabContent, 'profile__tab_active', tabs);
                    showTabContent(tabContent, 'profile__tab_active', tabs, i);
                }
            })
        }
    })
} 

if (body.getAttribute('id') === 'profile') {
    tabs();
}





// choose places

function choosePlaces() {
    const places = document.querySelectorAll('.choose__block');

    places.forEach(place => {
        place.innerHTML = '1';
        place.addEventListener('click', (e) => {
            if (!e.target.classList.contains('choose__block_busy')) {
                e.target.classList.toggle('choose__block_chosen');
            }
        })
    })
}

if (body.getAttribute('id') === 'pay-and-places') {
    choosePlaces();
}

// show pay section

function showPay() {
    const continueBtn = document.querySelector('.choose__btn_continue'),
          sectionPay = document.querySelector('.pay');

    continueBtn.addEventListener('click', () => {
        sectionPay.classList.toggle('show');
    })
}

if (body.getAttribute('id') === 'pay-and-places') {
    showPay();
}


// MODAL


const modal = document.querySelector('.modal'),
      triggersParent = document.querySelector('.modal__triggers'),
      triggers = document.querySelectorAll('.modal__trigger'),
      modalWindows = document.querySelectorAll('.modal__form'),
      openBtn = document.querySelector('.header__link'),
      closeBtn = document.querySelector('.modal__btn_cancel');


triggersParent.addEventListener('click', (e) => {
    if (e.target.classList.contains('modal__trigger')) {
        triggers.forEach((item, i) => {
            item.classList.remove('modal__trigger_active');
            if (e.target == item) {
                hideModalContent(modalWindows, 'modal__form_active');
                showModalContent(modalWindows, 'modal__form_active', i);
                e.target.classList.add('modal__trigger_active');
            }
        })
    }
})


openBtn.addEventListener('click', (e) => {
    openModal();
    triggers.forEach(item => item.classList.remove('modal__trigger_active'));
    triggers[0].classList.add('modal__trigger_active');
    hideModalContent(modalWindows, 'modal__form_active');
    showModalContent(modalWindows, 'modal__form_active', 0)
})

modal.addEventListener('click', (e) => {
    if (e.target.classList.contains('modal')) {
        closeModal();
    }
})

closeBtn.addEventListener('click', () => {
    closeModal();
})



function showModalContent(windows, activeClass, i) {
    windows[i].classList.add(activeClass);
}

function hideModalContent(windows, activeClass) {
    windows.forEach((item, i) => {
        item.classList.remove(activeClass);
    })
}

function openModal(window = modal, classActive = 'modal_active') {
    window.classList.add(`${classActive}`);
    lockScroll();
}

function closeModal(window = modal, classActive = 'modal_active') {
    window.classList.remove(`${classActive}`);
    unlockScroll();
}







