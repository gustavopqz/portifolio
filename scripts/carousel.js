//Get elemets
const carousel = document.getElementById('carousel')
const carousel_slide = document.getElementById('carousel_slide')
const carousel_images = Array.from(document.querySelectorAll('#carousel_slide img'))
const presentation = document.querySelector('#enterprises .presentation h2')
const window_width = window.innerWidth
const arrow_left = document.getElementById('arrow_left')
const arrow_right = document.getElementById('arrow_right')
const arrow_left_mobile = document.getElementById('arrow_left_mobile')
const arrow_right_mobile = document.getElementById('arrow_right_mobile')

//Counter
let counter = 1;
const size = carousel_images[0].clientWidth + 16;

//Carousel
carousel_slide.style.transition = 'transform .2s ease-in-out'
carousel_slide.style.transform = 'translateX(' + ( -size * counter ) + 'px)'

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
    if(counter >= carousel_images.length - 1){
        counter = carousel_images.length - 2;
        return;
    }
    if(auto == true){
        counter++;
        carousel_slide.style.transition = 'transform .2s ease-in-out'
        carousel_slide.style.transform = 'translateX(' + ( -size * counter ) + 'px)'
    }
}, 5000);

//Arrows
function arrowLeft(){
        auto = false
        counter--;
        if(counter < 0){
            counter = 0;
            return;
        }
        carousel_slide.style.transition = 'transform .2s ease-in-out'
        carousel_slide.style.transform = 'translateX(' + ( -size * counter ) + 'px)'
}
arrow_left.addEventListener('click', arrowLeft)
arrow_left_mobile.addEventListener('click', arrowLeft)

function arrowRight(){
    auto = false
    counter++;
    if(counter >= carousel_images.length - 1){
        counter = carousel_images.length - 2;
        return;
    }
    carousel_slide.style.transition = 'transform .2s ease-in-out'
    carousel_slide.style.transform = 'translateX(' + ( -size * counter ) + 'px)'
}
arrow_right.addEventListener('click', arrowRight)
arrow_right_mobile.addEventListener('click', arrowRight)