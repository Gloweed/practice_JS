"use strict"

// Получить контейнер меню
const menuContainer = document.querySelector('.headline__menu');

// Добавить обработчик клика на весь контейнер
menuContainer.addEventListener('click', function (event) {
    // Получить кликнутый элемент
    const clickedElement = event.target;

    // Убедиться, что клик произошел по элементу <a>
    if (clickedElement.tagName.toLowerCase() === 'a') {
        // Сохранить в localStorage информацию о переходе
        localStorage.setItem('lastActiveItem', clickedElement.getAttribute('href'));
    }
});

// При загрузке страницы устанавливать активный класс на основании localStorage
window.addEventListener('DOMContentLoaded', function () {
    const lastActiveItemHref = localStorage.getItem('lastActiveItem');
    if (lastActiveItemHref) {
        const lastActiveItem = document.querySelector(`.headline__item[href="${lastActiveItemHref}"]`);
        if (lastActiveItem) {
            // Удалить класс со всех элементов меню
            const allMenuItems = document.querySelectorAll('.headline__item');
            allMenuItems.forEach(item => item.classList.remove('headline__item_active'));
            // Добавить класс на кликнутый элемент
            lastActiveItem.classList.add('headline__item_active');
        }
    }
});

const headerArrow = document.querySelector('.header__icon');
const pointScroll = document.querySelector('.content');

function downArrow() {
    pointScroll.scrollIntoView({
        block: 'start',
        behavior: 'smooth',
    });
}

headerArrow.addEventListener('click', downArrow);