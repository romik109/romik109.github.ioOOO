const trafficLightEl = document.querySelector('#trafficLight');
const trafficLightEl2= document.querySelector('#trafficLight2');
const trafficLightEl3 = document.querySelector('#trafficLight3');
const trafficLightEl4 = document.querySelector('#trafficLight4');

//Корректная работа одинарного светофора
function makeGreen() {
    trafficLightEl.style.background = ('green');
    trafficLightEl.removeEventListener('click', makeGreen);
    trafficLightEl.addEventListener('click', makeYellow);
}

function makeYellow() {
    trafficLightEl.style.background = ('yellow');
    trafficLightEl.removeEventListener('click', makeYellow);
    trafficLightEl.addEventListener('click', makeRed);
}

function makeRed() {
    trafficLightEl.style.background = ('red');
    trafficLightEl.removeEventListener('click', makeRed);
    trafficLightEl.addEventListener('click', makeGreen);
}

trafficLightEl.addEventListener('click', makeGreen);

// Для тройного светофора , не разобрался как сделать .  
// Оставляю свои попытки, в надежде получить комментарий как можно дальше продолжить
function makeGreenZ() {
    trafficLightEl2.style.background = ('green');
    trafficLightEl2.removeEventListener('click', makeGreenZ);
    trafficLightEl2.addEventListener('click', makeYellowZ);
}

function makeYellowZ() {
    trafficLightEl3.style.background = ('yellow');
    trafficLightEl3.removeEventListener('click', makeYellowZ);
    trafficLightEl3.addEventListener('click', makeRedZ);
}

function makeRedZ() {
    trafficLightEl4.style.background = ('red');
    trafficLightEl4.removeEventListener('click', makeRedZ);
    trafficLightEl4.addEventListener('click', makeGreenZ);
}

trafficLightEl2.addEventListener('click', makeGreenZ);