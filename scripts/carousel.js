//Get elemets
const carousel = document.getElementById('carousel')
const carousel_slide = document.getElementById('carousel_slide')
const carousel_images = Array.from(document.querySelectorAll('#carousel_slide img'))
const presentation = document.querySelector('#enterprises .presentation h2')
const window_width = window.innerWidth
const arrow_left = document.getElementById('arrow_left')
const arrow_right = document.getElementById('arrow_right')

//Counter
let counter = 0;
const size = carousel_images[0].clientWidth + 16;

//Carousel
carousel_slide.addEventListener('transitionend', ()=>{
    //Next
    if(counter >= carousel_images.length - 1){
        counter = carousel_images.length - 2;
        return;
    }
    if(carousel_images[counter].id === 'first_clone'){
        carousel_slide.style.transition = 'none'
        counter = 1;
        carousel_slide.style.transform = 'translateX(' + ( -size * counter ) + 'px)'
    }

    //Before
    if(counter <= 0){
        carousel_slide.style.transition = 'none'
        counter = carousel_images.length - 3;
        carousel_slide.style.transform = 'translateX(' + ( -size * counter ) + 'px)'
        return;
    }
})

let auto = true

setInterval(() => {
    if(auto == true){
        counter++;
        carousel_slide.style.transition = 'transform .4s ease-in-out'
        carousel_slide.style.transform = 'translateX(' + ( -size * counter ) + 'px)'
    }
}, 3000);

//Arrows
arrow_left.addEventListener('click', ()=>{
    auto = false
    counter--;
    if(counter < 0){
        counter = 0;
        return;
    }
    carousel_slide.style.transition = 'transform .4s ease-in-out'
    carousel_slide.style.transform = 'translateX(' + ( -size * counter ) + 'px)'
})

arrow_right.addEventListener('click', ()=>{
    auto = false
    counter++;
    if(counter >= carousel_images.length - 1){
        counter = carousel_images.length - 2;
        return;
    }
    carousel_slide.style.transition = 'transform .4s ease-in-out'
    carousel_slide.style.transform = 'translateX(' + ( -size * counter ) + 'px)'
})