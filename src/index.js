import './../node_modules/@splidejs/splide/dist/css/splide.min.css'
import './../node_modules/bootstrap/dist/css/bootstrap.css'
import './style/style.css'
import Splide from '@splidejs/splide'
import main from '../script/view/main.js'

new Splide('.splide', {
    perPage: 9,
    gap: '1rem',
    autoplay: 'true',
    perMove: 1,
    breakpoints: {
        '1300': {
            perPage: 8,
            gap: '1rem'
        },
        '1000': {
            perPage: 7,
            gap: '1rem'
        },
        '800': {
            perPage: 5,
            gap: '1rem'
        },
        '600': {
            perPage: 4,
            gap: '1rem',
        },
        '400': {
            perPage: 3,
            gap: '1rem',
        },
        '300': {
            perPage: 2,
            gap: '1rem'
        }
    }
}).mount();

document.addEventListener('DOMContentLoaded', main);