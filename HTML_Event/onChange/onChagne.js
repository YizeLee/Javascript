function select(){
    var data = document.getElementById("dropdown").value;
    document.getElementById("show").innerHTML = "您選擇為:" + data;
    document.getElementById("img").src = "./img/" + data + ".png";
}