//問答程式
var question = [
    {
        question:"香蕉甚麼顏色?\n(a)黃色\n(b)綠色\n(c)橘色",
        answer: "a",
    },
    {
        question: "草莓甚麼顏色?\n(a)紅色\n(b)綠色\n(c)紫色",
        answer: "a",
    }
]
var count = 0;
for(var i=0; i< question.length; i++){
    var answer = prompt(question[i].question);
    if(answer == question[i].answer){
        count++;
        alert("答對");
    }else{
        alert("答錯");
    }
}
alert("答對"+count+"題");