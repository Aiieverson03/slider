const leftArrow = document.querySelector('#left-arrow');
const rightArrow = document.querySelector('#right-arrow');
const slider = document.querySelector('.slider');
const toScroll = document.querySelector('.img-container');
const pictures = [...document.querySelectorAll('.scrollable')];
console.log(pictures[0].getBoundingClientRect())
const subscribe = document.querySelector('#subscribe');
console.dir(toScroll);


let scrollAmount = 0;

subscribe.addEventListener('click', scrollToLeft);

rightArrow.addEventListener('click', scrollToLeft)
leftArrow.addEventListener('click', scrollToRight)


function scrollToLeft(e) {
    if (scrollAmount <= -((pictures.length -1) * 100)) {
        return
    }
    console.log(pictures.length);
    scrollAmount -= 100;
    
    toScroll.style.transform = `translateX(${scrollAmount}%)`;
    toScroll.style.transition = 'transform 0.5s ease-in-out';
    console.log("test")
    console.log(pictures[0].getBoundingClientRect().left)
    console.log(pictures[0])
    console.log(toScroll.getBoundingClientRect().left)
    console.log(slider.getBoundingClientRect().left)
    
}

function scrollToRight(e) {
    if (scrollAmount === 0) {
        return
    }
    scrollAmount += 100;
    toScroll.style.transform = `translateX(${scrollAmount}%)`;
    toScroll.style.transition = 'transform 0.5s ease-in-out';
    console.log("test")
    console.log(pictures[0].getBoundingClientRect().left)
    console.log(toScroll.getBoundingClientRect().left)
    console.log(slider.getBoundingClientRect().left)
}
