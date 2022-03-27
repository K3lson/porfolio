ScrollReveal({ reset: true });

ScrollReveal().reveal(".about", {
    duration: 1500,
    origin: "top",
    distance: "200px",
    easing: "cubic-bezier(0.5, 0, 0, 0.5)",
    rotate: {
    x: 20,
    z: -0
    }
    });
 ScrollReveal().reveal(".tools", {
    duration: 1500,
    origin: "top",
    distance: "200px",
    easing: "cubic-bezier(0.5, 0, 0, 0.5)",
    rotate: {
    x: 20,
    z: -0
    }
    });   
    ScrollReveal().reveal(".bigBox", {
    duration: 1500,
    origin: "top",
    distance: "200px",
    easing: "cubic-bezier(0.5, 0, 0, 0.5)",
    rotate: {
    x: 5,
    z: -0
    }
    });
    ScrollReveal().reveal(".contact", {
    duration: 1500,
    origin: "top",
    distance: "200px",
    easing: "cubic-bezier(0.5, 0, 0, 0.5)",
    rotate: {
    x: 5,
    z: -0
    }
    });      




function toggle() {
    var sec = document.getElementById('sec');
    var nav = document.getElementById('navigation');
    sec.classList.toggle('active');
    nav.classList.toggle('active');
}

$(document).ready(function(){
    $('.list').click(function(){
        const value = $(this).attr('data-filter');
        if(value == 'all') {
            $('.itemBox').show('1000');
        }else {
            $('.itemBox').not('.'+value).hide('1000');
            $('.itemBox').filter('.'+value).show('1000');
        }
    })
})
//add active class on selected item

$('.list').click(function(){
    $(this).addClass('active').siblings().removeClass('active');
})