'use strict';
//import images from './image.js';

const images = {
    1: {
        url: 'images/buzavirág.jpg',
        title: 'buzavirag',
        number: '1 / 4',
    },
    2: {
        url: 'images/levendula3.jpg',
        title: 'levendula',
        number: '2 / 4',
    },
    3: {
        url: 'images/mimoza1.jpg',
        title: 'mimoza',
        number: '3 / 4',
    },
    4: {
        url: 'images/orchidea2.jpg',
        title: 'orchidea',
        number: '4 / 4',
    },
    current: 1,
}

const prev = document.querySelector('.prev');
const next = document.querySelector('.next');
const img = document.querySelector('img');
const title = document.querySelector('.title');
const number = document.querySelector('.number');
const marker = document.querySelector('.marker');

const attributeSet = (actual) => {
    img.setAttribute('src', images[actual].url);
    title.textContent = images[actual].title;
    number.textContent = images[actual].number;
    for (let i = 0; i < marker.children.length; i++) {
        (marker.children[i].className = '');
    }
    marker.children[actual - 1].className = 'gray';
    images.current = actual;
}

const prevImg = () => {
    let actual = images.current;
    actual--;
    if (actual === 0) {
        actual = 4;
    }
    attributeSet(actual);
}

const nextImg = () => {
    let actual = images.current;
    actual++;
    if (actual === 5) {
        actual = 1;
    }
    attributeSet(actual);
}

const appearImg = (i) => {
    img.setAttribute('src', images[i + 1].url);
    title.textContent = images[i + 1].title;
    number.textContent = images[i + 1].number;
    for (let i = 0; i < marker.children.length; i++) {
        (marker.children[i].className = '');
    }
    marker.children[i].className = 'gray';
    images.current = i;
}

prev.addEventListener('click', () => prevImg());
next.addEventListener('click', () => nextImg());

const goSelf = (time) => {
    setInterval(function () {
        let actual = images.current;
        actual++;
        if (actual === 5) {
            actual = 1;
        }
        attributeSet(actual);
    }, time);
}

goSelf(3000);

for (let i = 0; i < marker.children.length; i++) {
    marker.children[i].addEventListener('click', () => appearImg(i));
}
