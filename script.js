document.body.style.backgroundColor = "green";
document.body.style.alignContent = "center";
document.getElementById("body").style.backgroundColor = "grey";
document.getElementById("body").style.textAlign = "center";
document.getElementById("body").style.width = "25%";
document.getElementById("body").style.marginInline = "40%";
document.getElementById("body").style.marginTop = "10%";
document.getElementById("header").style.fontSize = "3rem";
document.getElementById("btn").style.textAlign = "start";
document.getElementById("btn").style.marginLeft = "10px";
document.getElementById("btn").style.fontWeight = "bold";
let inputP;
let inputR;
let inputT;
let btn = document.getElementById("btn");
function simpleInterest(){
    inputP = document.getElementById("P").value;
    inputR = document.getElementById("R").value;
    inputT = document.getElementById("T").value;
    btn.innerHTML += (inputP * inputR * inputT)/100;
}