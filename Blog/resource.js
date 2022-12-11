//建立Blog名稱
var ask = prompt("請輸入您的暱稱");
var h1 = document.getElementById("title");
console.log(h1);
h1.innerText = ask+"的部落格";
//取得內容元素
var text = document.getElementById("text");
var content = document.getElementById("content");
var button = document.getElementById("btn");
var list = document.getElementById("list");
//innerHTML: 第一層<div>的內部html
button.addEventListener("click",function(){
    //重複儲存上次的內容
    list.innerHTML = list.innerHTML + `
    <div class="article">
        <h2>${text.value}</h2>
        <p>${content.value}</p>
        <hr/>
    </div>
    `;
    text.value = ""; //清除內容
    content.value = ""; //清除內容
})
