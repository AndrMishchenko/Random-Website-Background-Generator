let cont = document.querySelector('.wrapper');
for(let i = 0; i < 170; i++){
    let createBox = document.createElement('div');
    createBox.classList.add('square');
    cont.appendChild(createBox)
}

const red = Math.floor(Math.random() * 256);
const green = Math.floor(Math.random() * 256);
const blue = Math.floor(Math.random() * 256);

const randomColor = `rgd(${red}, ${green}, ${blue})`;

function create(){
    anime({
        targets: '.square',
        translateX: function(){
            return anime.random(-window.innerWidth, window.innerWidth);
        },
        translateY: function(){
            return anime.random(-window.innerWidth, window.innerWidth);
        },
        scale: function(){
            return anime.random(1,3)
        },
        backgroundColor: function() {
            return `rgb(${anime.random(0, 255)}, ${anime.random(0, 255)}, ${anime.random(0, 255)})`;
        },
    })
}

create();

const circle = () => {
    let circleBtn = document.getElementById('circleBtn')
    cont.classList.toggle('circle')
}