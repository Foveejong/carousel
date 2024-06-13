import './styles.css';
import Carousel from './Carousel';
import sunsetBridge from '../img/benny-hassum-3orl_TPUh0U-unsplash.jpg';
import sunsetBridgePOV from '../img/benny-hassum-M-5r4OXOSsg-unsplash.jpg';
import seaside from '../img/hannah-lee-G1jt0l9I2d0-unsplash.jpg';
import seawaves from '../img/nico-smit-EywKSwYHP5E-unsplash.jpg';
import sunset from '../img/spencer-samaroo-PTHv3CFOMQY-unsplash.jpg';

function domController() {
    const carousel = new Carousel();

    const img1 = document.querySelector('#img1');
    const img2 = document.querySelector('#img2');
    const img3 = document.querySelector('#img3');
    const img4 = document.querySelector('#img4');
    const img5 = document.querySelector('#img5');
    const c1 = document.querySelector('.c1');
    const c2 = document.querySelector('.c2');
    const c3 = document.querySelector('.c3');
    const c4 = document.querySelector('.c4');
    const c5 = document.querySelector('.c5');
    const left = document.querySelector('.left');
    const right = document.querySelector('.right');

    img1.src = sunset;
    img2.src = sunsetBridge;
    img3.src = sunsetBridgePOV;
    img4.src = seaside;
    img5.src = seawaves;

    initBtn(carousel, c1);
    initBtn(carousel, c2);
    initBtn(carousel, c3);
    initBtn(carousel, c4);
    initBtn(carousel, c5);

    left.addEventListener('click', () => {
        resetCircles();
        carousel.previous();
    });
    right.addEventListener('click', () => {
        resetCircles();
        carousel.next();
    });
}

function resetCircles() {
    const list = [...document.querySelectorAll('.circle')];
    list.forEach((el) => {
        el.style.backgroundColor = '';
    });
}

function initBtn(carousel, circle) {
    circle.addEventListener('click', (e) => {
        resetCircles();
        circle.style.backgroundColor = 'white';
        const circleData = e.target.getAttribute('data');

        carousel.scrollto(document.querySelector(`#${circleData}`));
    });
}

domController();
