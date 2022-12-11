//製作問答程式
var questions= [ //陣列裡面放物件
    {
        question : "香蕉甚麼顏色?\n(a)紅色\n(b)綠色\n(c)黃色", //物件屬性
        answer :"c",                                           //物件屬性
    },
    {
        question : "草梅甚麼顏色?\n(a)紅色\n(b)紫色\n(c)黃色", //物件屬性
        answer :"a",                                           //物件屬性
    },
]
var score = 0;
for(var i = 0; i < questions.length; i++){
    var input = prompt(questions[i].question); 
    if(input == questions[i].answer){
        score++;
        alert("答對了");
    }else{
        alert("答錯了");
    }
}
alert("答對"+ score +"題");