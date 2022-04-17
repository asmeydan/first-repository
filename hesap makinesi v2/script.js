var ekran = document.getElementById("ekran");
var artı = document.getElementsByClassName("key");
let a;
let b;
let c = 0;
let d = 0;

let sayilar = [];


function reset(){
    ekran.innerHTML = "";
    sayilar = [];
    c = 0;
}

function equal(){
    sayilar.push(ekran.innerHTML);
    console.log("asm");
    for (let i = 0; i < sayilar.length; i++){
        c += parseInt(sayilar[i]);
    }
    ekran.innerHTML = c
}

function plus(){
    sayilar.push(ekran.innerHTML);
    ekran.innerHTML = "+"
}

function one(){
    if( ekran.innerHTML != "+"){
        ekran.innerHTML += 1;
    }
    else{
        ekran.innerHTML = 1;
    }
}
function two(){
    if( ekran.innerHTML != "+"){
        ekran.innerHTML += 2;
    }
    else{
        ekran.innerHTML = 2;
    }
}
function three(){
    if( ekran.innerHTML != "+"){
        ekran.innerHTML += 3;
    }
    else{
        ekran.innerHTML = 3;
    }
}
function four(){
    if( ekran.innerHTML != "+"){
        ekran.innerHTML += 4;
    }
    else{
        ekran.innerHTML = 4;
    }
}
function five(){
    if( ekran.innerHTML != "+"){
        ekran.innerHTML += 5;
    }
    else{
        ekran.innerHTML = 5;
    }
}
function six(){
    if( ekran.innerHTML != "+"){
        ekran.innerHTML += 6;
    }
    else{
        ekran.innerHTML = 6;
    }
}
function seven(){
    if( ekran.innerHTML != "+"){
        ekran.innerHTML += 7;
    }
    else{
        ekran.innerHTML = 7;
    }
}
function eight(){
    if( ekran.innerHTML != "+"){
        ekran.innerHTML += 8;
    }
    else{
        ekran.innerHTML = 8;
    }
}
function nine(){
    if( ekran.innerHTML != "+"){
        ekran.innerHTML += 9;
    }
    else{
        ekran.innerHTML = 9;
    }
}
function zero(){
    if( ekran.innerHTML != "+"){
        ekran.innerHTML += 0;
    }
    else{
        ekran.innerHTML = 0;
    }
}