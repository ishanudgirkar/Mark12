const sides = document.querySelectorAll('.side-input');
const hypotenuseBtn = document.querySelector('#hypotenuse-btn');
const outputEl = document.querySelector('#output');

function calculateSumOfSquares(a,b){
    const sumOfSquares = a*a + b*b ;

    // console.log(sumOfSquares);
   
    return sumOfSquares;

}

function calculateHypotenuse(){
    if(sides[0].value && sides[1].value){
        if(Number(sides[0].value) === 0 || Number(sides[1].value) === 0){
            outputEl.innerText = "Sides of triangle  can't be zero 🤗 !"
        }else{
        if(Number(sides[0].value) < 0 || Number(sides[1].value) < 0 ){
            outputEl.innerText = "Sides can't be negative ! 🤐"
        }else{
    const sumOfSquares = calculateSumOfSquares(Number(sides[0].value),Number(sides[1].value));
    const lengthOfHypotenuse = Math.sqrt(sumOfSquares);
    outputEl.innerText = "The length of hypotenuse is " + lengthOfHypotenuse;
     }}}else{
    outputEl.innerText = "Please Enter both base and the height !"
} 
}

hypotenuseBtn.addEventListener("click",calculateHypotenuse);
