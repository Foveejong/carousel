import "./styles.css";
import sunsetBridge from "../img/benny-hassum-3orl_TPUh0U-unsplash.jpg";
import sunsetBridgePOV from "../img/benny-hassum-M-5r4OXOSsg-unsplash.jpg";
import seaside from "../img/hannah-lee-G1jt0l9I2d0-unsplash.jpg";
import seawaves from "../img/nico-smit-EywKSwYHP5E-unsplash.jpg";
import sunset from "../img/spencer-samaroo-PTHv3CFOMQY-unsplash.jpg";

function domController() {
    const carousel = new Carousel();

    const img1 = document.querySelector("#img1");
    const img2 = document.querySelector("#img2");
    const img3 = document.querySelector("#img3");
    const img4 = document.querySelector("#img4");
    const img5 = document.querySelector("#img5");
    const left = document.querySelector(".left");
    const right = document.querySelector(".right");

    img1.src = sunset;
    img2.src = sunsetBridge;
    img3.src = sunsetBridgePOV;
    img4.src = seaside;
    img5.src = seawaves;

    left.addEventListener("click", () => carousel.previous())
    right.addEventListener("click", () => carousel.next())
}

class Carousel {
    constructor() {
        this.index = 1;
    }

    increaseIndex = () => {
        this.index += 1;
    }

    decreaseIndex = () => {
        this.index -= 1;
    }

    next = () => {
        if (this.index === 5) this.index = 0;

        // increment current to shift to next slide
        this.index += 1; 
        let currentImg = `img${this.index}`;
        console.log(currentImg);
        this.scrollto(document.querySelector(`#${currentImg}`))
    }

    previous = () => {
        if (this.index === 1) this.index = 5;

        // increment current to shift to next slide
        this.index -= 1; 
        let currentImg = `img${this.index}`
        console.log(currentImg);
        this.scrollto(document.querySelector(`#${currentImg}`))
    }

    scrollto = function(img) {
        img.scrollIntoView();
    }
}

domController();