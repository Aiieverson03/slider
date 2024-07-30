const leftArrow = document.querySelector('#left-arrow');
const rightArrow = document.querySelector('#right-arrow');
const toScroll = document.querySelector('.img-container');
const pictures = [...document.querySelectorAll('.scrollable')];
console.log(pictures)
const subscribe = document.querySelector('#subscribe');
console.log(toScroll);


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
    console.log(scrollAmount);
    console.log(-((pictures.length -1)*100));

    
    toScroll.style.transform = `translateX(${scrollAmount}%)`;
    toScroll.style.transition = 'transform 0.5s ease-in-out';

}

function scrollToRight(e) {
    if (scrollAmount === 0) {
        return
    }
    scrollAmount += 100;
    toScroll.style.transform = `translateX(${scrollAmount}%)`;
}
