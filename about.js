AOS.init({
    offset: 200,
    duration: 800,
});

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
    const counters = document.querySelectorAll(".counter");

counters.forEach((counter) => {
  counter.innerText = "0";
  const updateCounter = () => {
    const target = +counter.getAttribute("data-target");
    const count = +counter.innerText;
    const increment = target / 200;
    if (count < target) {
      counter.innerText = `${Math.ceil(count + increment)}`;
      setTimeout(updateCounter, 1);
    } else counter.innerText = target;
  };
  updateCounter();
});

  