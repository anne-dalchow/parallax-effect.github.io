const title = document.querySelector('.title');
const levelFive = document.querySelector('.level-five');
const levelFour = document.querySelector('.level-four');
const levelThree = document.querySelector('.level-three');
const levelTwo = document.querySelector('.level-two');
const levelOne = document.querySelector('.level-one');
const leafRight = document.querySelector('.leaf-right');
const leafLeft = document.querySelector('.leaf-left');
const flimmer = document.querySelector('.flimmer');


document.addEventListener('scroll',function(){
    let value = window.scrollY;
    let valueX = window.scrollX;
    title.style.marginTop = value * 1 + 'px';
    leafLeft.style.marginLeft = -value * 0.6 + 'px';
    leafRight.style.marginLeft = value * 0.6 + 'px';
    levelTwo.style.marginBottom = -value * 0.6 + 'px';
    levelThree.style.marginBottom = -value * 0.6 + 'px';
    levelFive.style.marginBottom = value * 0.6 + 'px';
    levelFour.style.marginBottom = -value * 0.6  + 'px';
    flimmer.style.marginBottom = -value * 1.5  + 'px';

})