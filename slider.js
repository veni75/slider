'use strict';
import images from './image.js';

const slider = document.querySelector('.slider');
const prev = document.querySelector('.slider__prev');
const next = document.querySelector('.slider__next');
const img = document.querySelector('img');
const title = document.querySelector('.slider__image--title');
const number = document.querySelector('.slider__image--number');
const marker = document.querySelector('.slider__image--marker');
let interval;

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

const startSlider = (time) => {
    interval = setInterval(function () {
        let actual = images.current;
        actual++;
        if (actual === 5) {
            actual = 1;
        }
        attributeSet(actual);
    }, time);
}

const stopSlider = () => {
    clearInterval(interval);
}

const sliderHeight = (height) => {    
    slider.style.height = `${height}px`;
    img.style.height = `${height}px`;
    prev.style.top = `${height/2+50}px`;
    prev.style.left = `-${height/2+50}px`;
    next.style.top = `-${height/2}px`;
}

const listenerSet = () => {
    sliderHeight(500);
    attributeSet(1);
    prev.addEventListener('click', () => prevImg());
    next.addEventListener('click', () => nextImg());
    img.addEventListener('mouseover', stopSlider);
    img.addEventListener('mouseleave', () => startSlider(3000));
    for (let i = 0; i < marker.children.length; i++) {
        marker.children[i].addEventListener('click', () => appearImg(i));
    }
}
listenerSet();


