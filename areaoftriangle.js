const baseOfTriangle = document.querySelector('#triangle-base');
const heightOfTriangle = document.querySelector('#triangle-height');
const outputEl = document.querySelector('#output-box');
const calculateBtn = document.querySelector('#calculate-area');

function calculateArea(){

    const base = Number(baseOfTriangle.value);
    const height = Number(heightOfTriangle.value);
    if(base && height){
    const Area = Number(0.5) * base * height;
    outputEl.innerText = "Area Of Triangle is " + Area + " units";
    }else{
        outputEl.innerText = "Please Enter base & height ";
    }

}


calculateBtn.addEventListener("click",calculateArea);