
AOS.init({
    offset: 200,
    duration: 800,
});

//  function myfunction(){
//      var x = document.getElementById("mynav");
//      if(x.className ===  "nav"){
//          x.className += "responsive";
//      }else{
//          x.className = "nav";
//         }
//     }
// var x = document.getElementById("mynav");
    
// var icon = document.querySelector('.myicon');

// icon.addEventListener('click', function () {

//     if (!x.classList.contains('responsive')) {
//         x.classList.add('responsive');
//     } else if (x.classList.contains('responsive')) {
//         x.classList.remove('responsive','container');
//     }
// })
var hamburger = document.querySelector('.hamburger');

var ul = document.querySelector('ul');

var nav = document.querySelector('nav');

hamburger.addEventListener('click',function(){
        ul.classList.toggle('ham_active');
        nav.classList.toggle('ham_active');

        var ham_child = hamburger.firstElementChild;
        if(ul.classList.contains('ham_active')){

            ham_child.classList.replace('fa-bars','fa-xmark');
        }else{
            ham_child.classList.replace('fa-xmark','fa-bars');
        }
    });
    
    $('.owl-carousel').owlCarousel({
        loop:true,
        margin:10,
        nav:true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:3
            },
            1000:{
                items:5
            }
        }
    })