import React from 'react';
import ReactDOM from 'react-dom';
import src1 from './assets/1.png'
import src2 from './assets/2.png'
import src3 from './assets/3.png'


const  arr = [src1,src2,src3]
let index = 0;
let timer = null
const content = document.getElementById('root')

function render(){
    ReactDOM.render(
        <img src={arr[index]} alt=""/>,
        content
    )
}


function start(){
    stop();
    timer = setInterval(() => {
        console.log(index)
        index = (index + 1) % 3
        render()
    }, 2000);
}

function stop(){
    clearInterval(timer)
}
render();

start();


content.onmouseenter = function(){
    stop()
}
content.onmouseleave = function(){
    start();
}