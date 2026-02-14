const { all } = require("mathjs");

let started= false;
let level= 0;
let h2= document.querySelector("h2");
let color= ["pink","blue","orange","purple"];

document.addEventListener("keypress", function(){
    if(started==false){
        started=true;

        levelUp();
    }
})

function flash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    },250);
}

function levelUp(){
    level++;
    h2.innerText=`Level ${level}`;

    let num=Math.floor(Math.random()*4);
    let randomColor=color[num];
    let radBtn=document.querySelector(`.${randomColor}`);

    console.log(num);
    console.log(randomColor);
    console.log(radBtn);

    flash(radBtn);
}

let allbtns= document.querySelector(".second");
for(btns of allbtns){
    btns.addEventListener("click", )
}