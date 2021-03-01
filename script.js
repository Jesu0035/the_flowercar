"use strict";

window.addEventListener("DOMContentLoaded", interaction); 

function interaction(){
    document.querySelector("#the_car").addEventListener("click", changeColor); 
}

function changeColor(){
    document.querySelector("#the_car").classList.add("house_kf"); 
}