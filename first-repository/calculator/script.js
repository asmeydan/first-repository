var screen = document.getElementById("screen");
let a;
let b;
let c = 0;
let d = 0;

let numbers = [];


function reset(){
    screen.innerHTML = "";
    numbers = [];
    c = 0;
}

function equal(){
    numbers.push(screen.innerHTML);
    console.log("asm");
    for (let i = 0; i < numbers.length; i++){
        c += parseInt(numbers[i]);
    }
    screen.innerHTML = c
}

function plus(){
    numbers.push(screen.innerHTML);
    screen.innerHTML = "+"
}

function one(){
    if( screen.innerHTML != "+"){
        screen.innerHTML += 1;
    }
    else{
        screen.innerHTML = 1;
    }
}
function two(){
    if( screen.innerHTML != "+"){
        screen.innerHTML += 2;
    }
    else{
        screen.innerHTML = 2;
    }
}
function three(){
    if( screen.innerHTML != "+"){
        screen.innerHTML += 3;
    }
    else{
        screen.innerHTML = 3;
    }
}
function four(){
    if( screen.innerHTML != "+"){
        screen.innerHTML += 4;
    }
    else{
        screen.innerHTML = 4;
    }
}
function five(){
    if( screen.innerHTML != "+"){
        screen.innerHTML += 5;
    }
    else{
        screen.innerHTML = 5;
    }
}
function six(){
    if( screen.innerHTML != "+"){
        screen.innerHTML += 6;
    }
    else{
        screen.innerHTML = 6;
    }
}
function seven(){
    if( screen.innerHTML != "+"){
        screen.innerHTML += 7;
    }
    else{
        screen.innerHTML = 7;
    }
}
function eight(){
    if( screen.innerHTML != "+"){
        screen.innerHTML += 8;
    }
    else{
        screen.innerHTML = 8;
    }
}
function nine(){
    if( screen.innerHTML != "+"){
        screen.innerHTML += 9;
    }
    else{
        screen.innerHTML = 9;
    }
}
function zero(){
    if( screen.innerHTML != "+"){
        screen.innerHTML += 0;
    }
    else{
        screen.innerHTML = 0;
    }
}