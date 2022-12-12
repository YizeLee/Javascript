var information = prompt("請輸入您的訊息");
function display(){
    document.getElementById("show").innerHTML=`<h1>${information}</h1>`;
}
function color(){
    document.getElementById("show").innerHTML=`<h1 style=color:blue;>${information}</h1>`; 
}
function hide(){
    document.getElementById("show").innerHTML=``; 
}