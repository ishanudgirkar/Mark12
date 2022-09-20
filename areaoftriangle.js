const baseOfTriangle = document.querySelector('#triangle-base');
const heightOfTriangle = document.querySelector('#triangle-height');
const outputEl = document.querySelector('#output-box');
const calculateBtn = document.querySelector('#calculate-area');

function calculateArea(){

    // const base = Number(baseOfTriangle.value);
    // const height = Number(heightOfTriangle.value);
    if(baseOfTriangle.value && heightOfTriangle.value){
        if(Number(baseOfTriangle.value) === 0 || Number(heightOfTriangle.value) === 0){
            outputEl.innerText = "How can be a base OR height of a triangle a zero entity ? 🤨";
        }else{
        if(Number(baseOfTriangle.value) < 0 || Number(heightOfTriangle.value) < 0){
            outputEl.innerText = "How can be a base OR height of a triangle a negative entity ? 😒";
        }else{
    const Area = Number(0.5) * Number(baseOfTriangle.value) * Number(heightOfTriangle.value);
    outputEl.innerText = "Area Of Triangle is " + Area + " units";
    }}}else{
        outputEl.innerText = "Please Enter base & height ";
    }

}


calculateBtn.addEventListener("click",calculateArea);