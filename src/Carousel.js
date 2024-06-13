class Carousel {
    constructor() {
        this.index = 1;
    }

    increaseIndex = () => {
        this.index += 1;
    };

    decreaseIndex = () => {
        this.index -= 1;
    };

    next = () => {
        if (this.index === 5) this.index = 0;

        // increment current to shift to next slide
        this.index += 1;

        // choose current image
        let currentImg = `img${this.index}`;
        const currentImgDom = document.querySelector(`#${currentImg}`);
        const currentCircle = document.querySelector(`.c${this.index}`);
        currentCircle.style.backgroundColor = 'white';
        this.scrollto(currentImgDom);
    };

    previous = () => {
        if (this.index === 1) this.index = 6;

        // increment current to shift to next slide
        this.index -= 1;
        let currentImg = `img${this.index}`;
        const currentImgDom = document.querySelector(`#${currentImg}`);
        const currentCircle = document.querySelector(`.c${this.index}`);
        currentCircle.style.backgroundColor = 'white';
        this.scrollto(currentImgDom);
    };

    scrollto = (img) => {
        img.scrollIntoView();
        this.index = Number(img.id[img.id.length - 1]);
    };
}

export default Carousel;
