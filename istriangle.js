const inputs = document.querySelectorAll('.angle-input');
const isTriangleBtn = document.querySelector('#is-triangle-btn');
const outputEl = document.querySelector('#output');

function calculateSumOfAngles(angle1 , angle2 ,angle3){

    const sumOfAngles = angle1 + angle2 + angle3;
    // console.log(sumOfAngles);
    return sumOfAngles;

}

function isTriangle(){
    if(inputs[0].value && inputs[1].value && inputs[2].value){
    const sumOfAngles = calculateSumOfAngles(Number(inputs[0].value ),Number(inputs[1].value ),Number(inputs[2].value ));
    if(sumOfAngles === 180){
        outputEl.innerText = "Yay ! The angles form a triangle !" ;
    }else{
        outputEl.innerText = "Oh no ! The angles don't form a triangle !" ;
    }
}else{
    outputEl.innerText = "Please enter all the angles ! 🤔"
}
    
}

isTriangleBtn.addEventListener("click",isTriangle)