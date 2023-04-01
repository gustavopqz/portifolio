//Get elemets
const carousel = document.getElementById('carousel')
const carousel_slide = document.getElementById('carousel_slide')
const carousel_images = document.querySelectorAll('#carousel_slide img')
const presentation = document.querySelector('#enterprises .presentation h2')
const window_width = window.innerWidth

//Counter
let counter = 0;
const size = carousel_images[0].clientWidth + 16;

//Carousel
presentation.addEventListener('click', ()=>{
    counter++;
    if(counter >= carousel_images.length - 1){
        counter = carousel_images.length - 2;
        return;
    }
    carousel_slide.style.transition = 'transform .4s ease-in-out'
    carousel_slide.style.transform = 'translateX(' + ( -size * counter ) + 'px)'
})

carousel_slide.addEventListener('transitionend', ()=>{
    if(carousel_images[counter].id === 'first_clone'){
        carousel_slide.style.transition = 'none'
        counter = 0;
        carousel_slide.style.transform = 'translateX(' + ( -size * counter ) + 'px)'
    }
})

setInterval(() => {
    counter++;
    carousel_slide.style.transition = 'transform .4s ease-in-out'
    carousel_slide.style.transform = 'translateX(' + ( -size * counter ) + 'px)'
}, 3000);