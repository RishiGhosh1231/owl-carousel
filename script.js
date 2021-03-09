$('.owl-carousel').owlCarousel({
    loop:true,
    margin:100,
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
            nav:true
        },
        600:{
            items:3,
            nav:false
        },
        1000:{
            items:4,
            nav:true,
            loop:false
        }
    }
});

function changeBackground(currentImage){
    const src = currentImage.src;
    const body = document.getElementsByTagName('body')[0];
    body.style.backgroundImage = "linear-gradient(rgba(0,0,0,0.6),rgba(0,0,0,0.6),rgba(0,0,0,0.6),rgba(0,0,0,0.6)), url('"+src+"')";
}