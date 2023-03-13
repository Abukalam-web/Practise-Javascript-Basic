

const adding = document.getElementById("btn1");
adding.addEventListener("click", function(){
    const num1 = document.getElementById("one").value;
    const addNum1 = parseFloat(num1);
    const num2 = document.getElementById("two").value;
    const addNum2 = parseFloat(num2);

    const addTotal = addNum1 + addNum2;
    const addResult = document.getElementById("addresult");
    document.getElementById("addresult").value = addTotal;
});


const minus = document.getElementById("btn2");
minus.addEventListener("click", function(){
    const num3 = document.getElementById("three").value;
    const num3Final = parseFloat(num3);
    const num4 = document.getElementById("four").value;
    const num4Final = parseFloat(num4);
    const minusResult = num3Final - num4Final;
    const minusResultLast = document.getElementById("minus-result");
    document.getElementById("minus-result").value = minusResult;
});

const star = document.getElementById("btn3");
star.addEventListener("click", function(){
    const num5 = document.getElementById("five").value;
    const num5Final = parseFloat(num5);
    const num6 = document.getElementById("six").value;
    const num6Final = parseFloat(num6);
    const starResult = num5Final * num6Final;
    const minusResultLast = document.getElementById("gun-kora");
    document.getElementById("gun-kora").value = starResult;
});

const vag = document.getElementById("btn4");
vag.addEventListener("click", function(){
    const num7 = document.getElementById("seven").value;
    const num7Final = parseFloat(num7);
    const num8 = document.getElementById("eight").value;
    const num8Final = parseFloat(num8);
    const vagResult = num7Final / num8Final;
    const vagResultLast = document.getElementById("vag-kora");
    document.getElementById("vag-kora").value = vagResult;
});


// for digital clock






function showTime(){
    var date = new Date();
    var h = date.getHours(); // 0 - 23
    var m = date.getMinutes(); // 0 - 59
    var s = date.getSeconds(); // 0 - 59
    var ms = date.getMilliseconds();
    var session = "AM";
    
    if(h == 0){
        h = 12;
    }
    
    if(h > 12){
        h = h - 12;
        session = "PM";
    }
    
    h = (h < 10) ? "0" + h : h;
    m = (m < 10) ? "0" + m : m;
    s = (s < 10) ? "0" + s : s;
   
    
    var time = h + ":" + m + ":" + s + ":"   + session;
    document.getElementById("MyClockDisplay").innerText = time;
    document.getElementById("MyClockDisplay").textContent = time;
    
    setTimeout(showTime, 000);
    
}

showTime();

var x = setInterval(function(){
    

var ramadanDate = new Date("mar 23, 2023").getTime();
var currentTime = new Date().getTime();
var timeDiff = ramadanDate - currentTime;

var days = timeDiff/ (1000*24*60*60);
var fDays = Math.floor(days);


var Hours = Math.floor((timeDiff % (1000*60*60*24)) / (1000*60*60));


var minutes = Math.floor((timeDiff % (1000*60*60)) / (1000*60));


var seconds = Math.floor((timeDiff % (1000*60)) / (1000));

fDays = (fDays <10) ? "0" + fDays : fDays;
Hours = (Hours <10) ? "0" + Hours : Hours;
minutes = (minutes <10) ? "0"+ minutes : minutes;
seconds = (seconds <10) ? "0" +seconds : seconds;


var result = fDays+" Days - " + Hours + " Hours - " + minutes+ " minutes - " + seconds+" Seconds"

var displayTimer = document.getElementById("ramadan-time");





displayTimer.innerHTML = result;

},1000);



function remainingMlsec (){
    var ramadanDate = new Date("mar 23, 2023").getTime();
var currentTime = new Date().getTime();
var timeDiff = ramadanDate - currentTime;
var miliRemaing = document.getElementById("mili");

miliRemaing.innerHTML = timeDiff;

}
setInterval(remainingMlsec, 100);
remainingMlsec();




function  w3CourseTime(){
    var startingDate = new Date("mar 12, 2023" ).getTime();

    var  endingDate = new Date().getTime();

    var timeDifference = startingDate + endingDate;

   

    var d1 = Math.floor(timeDifference / (1000*60*60*24));

    var h1 = Math.floor((timeDifference % (1000*60*60*24)) / (60*60*1000));

    var m1 = Math.floor((timeDifference % (1000*60*60)) / (60*1000));

    var s1 = Math.floor((timeDifference % (1000*60)) / (1000));

    h1 = (h1<10) ? "0" + h1 : h1;
    d1 = (d1<10) ? "0" + d1 : d1;
    m1 = (m1<10) ? "0" + m1 : m1;
    s1 = (s1<10) ? "0" +s1 : s1;

    var w3Display = d1 +" Days - " + h1 +" Hours - " + m1 +" Minutes - " +s1 + " Seconds " ;

    var displayTimerW3 = document.getElementById("display-course-time");

    displayTimerW3.innerHTML = w3Display;


   setInterval(w3CourseTime,1000);

}

w3CourseTime();