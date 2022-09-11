var base = document.querySelector("#base");
var height = document.querySelector("#height");
var areaCalculateBtn = document.querySelector("#calculateArea");
var areaOutput = document.querySelector("#area-output");



function calculateAreaclickHandler(){
    var baseValue = base.value;
    var heightValue = height.value;

    var area=0
    if( baseValue <= 0 || height <= 0 || baseValue == '' || heightValue == '') 
    {
        areaOutput.classList.add("output-err");
        areaOutput.innerText="Enter valid inputs to calculate area of triangle";
    }
    else{
        var mulBH=baseValue * heightValue;
        area=(1/2) * mulBH;
        areaOutput.classList.remove("output-err");
        areaOutput.innerText="Area of a triangle "+ area + " units";
    }
}


areaCalculateBtn.addEventListener('click',calculateAreaclickHandler)