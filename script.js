

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

