// header menu items active:
var menu = document.querySelectorAll('.menu_btn');
var  sidebar_wrapper = document.querySelector('.sidebar_wrapper');
var bar = document.querySelector('.fa-signal');
var cros_icon = document.querySelector('.cros_icon');
var left_part = document.querySelector('#left_part');
var search_wrapper = document.querySelector('.search_wrapper');
var search_btn = document.querySelector('.fa-search');
// search cress icon:
var search_cros_icon = document.querySelector('.search_cros_icon');




menu.forEach(function(value){
    value.addEventListener("click", function(){
        document.querySelector('.unorder_main .nav_link_active').classList.remove('nav_link_active');
        value.classList.add('nav_link_active');
    })
})

// site bar show hide function:

bar.addEventListener("click", function(){
    sidebar_wrapper.classList.toggle('side_effect');
})

cros_icon.addEventListener('click',function(){
    sidebar_wrapper.classList.toggle('side_effect');
})

left_part.addEventListener('click',function(){
    sidebar_wrapper.classList.toggle('side_effect');
})

// search bar show and hide:
search_btn.addEventListener("click",function(){
    search_wrapper.classList.toggle('search_active');
})

search_cros_icon.addEventListener("click", function(){
    search_wrapper.classList.toggle('search_active');
})



// slick slider
$('.sliderContainer').slick({
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 2000,
    arrows:true,
    nextArrow:'.next',
    prevArrow:'.prev'
  });