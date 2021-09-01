window.addEventListener('DOMContentLoaded', () =>{

    //Инициализация переменных
    var seconds = 00;
    var tens = 00; 
    var appendTens = document.querySelector("#tens");
    var appendSeconds = document.querySelector("#seconds");
    var buttonStart = document.querySelector("#button-start");
    var buttonStop = document.querySelector("#button-stop");
    var buttonReset = document.querySelector("#button-reset");
    var Interval;

    //старт 
    buttonStart.addEventListener("click", ()=>{
        //остановка функции
        clearInterval(Interval);
        //начало 
        Interval = setInterval(startTimer, 10);
    });

    //стоп
    buttonStop.addEventListener("click", ()=>{
        //остановка функции
        clearInterval(Interval);
    });

    //сброс
    buttonReset.addEventListener("click", ()=>{
        //остановка функции
        clearInterval(Interval);
        //обнуление верстки
        tens = "00";
        seconds = "00";
        appendTens.innerHTML = tens;
        appendSeconds.innerHTML = seconds;
    });

    function startTimer(){
        //милисекунды
        tens++;
        //если меньше 9, то мы добавляем 0 
        if(tens < 9){
            appendTens.innerHTML = "0" + tens;
        }
        //если больше 9, то мы не одобавляем 0 
        if(tens > 9){
            appendTens.innerHTML = tens;
        }
        //если больше 99 милисекунд 
        if(tens > 99){
            //прибавляем 1 секунду 
            seconds++;
            //добавляем в верстку секунду
            appendSeconds.innerHTML = "0" + seconds;
            //обнуляем верстку милисекунду
            tens = 0;
            appendTens.innerHTML = "0" + tens;
        }
        //если больше 9, то мы не добавляем ноль 
        if(seconds > 9){
            appendSeconds.innerHTML = seconds;
        }
    }



});