const qs = (el) => document.querySelector(el);
const qsa = (el) => document.querySelectorAll(el);

// Initial Data

let currentQuestion = 0;
let correctAnswers = 0;

showQuestion();
// Events

qs('.scoreArea button').addEventListener('click', resetButton);

// functions

function showQuestion() {
    if(questions[currentQuestion]) {
        let q = questions[currentQuestion];

        let greenBar = Math.floor((currentQuestion / questions.length) * 100);
        qs('.progress--bar').style.width = `${greenBar}%`;

        qs('.question').innerHTML = q.question;
        qs('.scoreArea').style.display = 'none';
        qs('.questionArea').style.display = 'block';

        let optionHtml = ''
        for(let i in q.options) {
            optionHtml += `<div data-op="${i}" class="option"><span>${parseInt(i)+1}</span> ${q.options[i]}</div>`;
        }
        qs('.options').innerHTML = optionHtml;
        qsa('.option').forEach(item => {
            item.addEventListener('click', clickEventOption);
        });
    } else {
        finishQuiz();
    }
}
function clickEventOption(e) {
    let clickedOption = parseInt(e.target.getAttribute('data-op'));

    if(questions[currentQuestion].answer === clickedOption) {
        correctAnswers++;
    }
    currentQuestion++;
    showQuestion();
}

function finishQuiz() {
    let points = Math.floor((correctAnswers / questions.length) * 100);

    if(points <30) {
        qs('.scoreText1').innerHTML = 'Tá ruim hein?';
        qs('.scorePct').style.color = 'red';

    } else if(points >= 30 && points <70) {
        qs('.scoreText1').innerHTML = 'Muito bom!';
        qs('.scorePct').style.color = 'yellow';

    } else if(points >= 70){
        qs('.scoreText1').innerHTML = 'Parabéns!';
        qs('.scorePct').style.color = 'green';
    }

    qs('.scoreArea').style.display = 'block';
    qs('.questionArea').style.display = 'none';
    qs('.progress--bar').style.width = `100%`;
    qs('.scorePct').innerHTML = `Acertou ${points}%`;
    qs('.scoreText2').innerHTML = `Você respondeu ${questions.length} e acertou ${correctAnswers}.`;
}

function resetButton() {
    correctAnswers = 0;
    currentQuestion = 0;
    showQuestion();
}


