const quizForm = document.querySelector('.quiz-form')
const submitAnswerBtn = document.querySelector('#submit-answer-btn');
const outputEl = document.querySelector('#output');
const correctAnswers = ["90°","right angled"];

function calculateScore(params) {

    let score = 0;
    let index = 0;
    const formResults = new FormData(quizForm);
    for(let value of formResults.values()){
        if(value === correctAnswers[index]){
            score += 1 ;
        }
        index += 1;
    }
    // console.log(score);
    outputEl.innerText = "Your score is "+ score;
}

submitAnswerBtn.addEventListener('click',calculateScore);