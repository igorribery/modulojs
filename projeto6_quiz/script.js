const qs = (el) => document.querySelector(el);
const qsa = (el) => document.querySelectorAll(el);

// Initial Data
let currentQuestion = 0;
let correctAnswers = 0;

showQuestion();


// Events
qs('.scoreArea button').addEventListener('click', resetEvent);


// Functions


function showQuestion() {
    if(questions[currentQuestion]) {
        let q = questions[currentQuestion];
        
        // barrinha verde de progresso
        let pct = Math.floor((currentQuestion / questions.length) * 100);
        qs('.progress--bar').style.width = `${pct}%`;
        
        qs('.scoreArea').style.display = 'none';
        qs('.questionArea').style.display = 'block';
        qs('.question').innerHTML = q.question;

        let optionsHtml = '';
        for(let i in q.options) {
            optionsHtml += `<div data-op="${i}" class="option"><span>${parseInt(i)+1}</span> ${q.options[i]}</div>`;
        }

        qs('.options').innerHTML = optionsHtml;

        qsa('.options .option').forEach(item => {
            item.addEventListener('click', optionClickEvent);
        });
    } else {
        finishQuiz();
    }
}

function optionClickEvent(e) {
    let clickedOption = parseInt(e.target.getAttribute('data-op'));

    if(questions[currentQuestion].answer === clickedOption) {
        correctAnswers++;
    }

    currentQuestion++;
    showQuestion();
};

function finishQuiz() {
    let points = Math.floor((correctAnswers / questions.length) * 100);

    if(points < 30) {
        qs('.scoreText1').innerHTML = 'Tá ruim em!?';
        qs('.scorePct').style.color = '#FF0000';
    
    } else if(points >=30 && points < 70) {
        
        qs('.scoreText1').innerHTML = 'Muito bom!';
        qs('.scorePct').style.color = '#FFFF00';
    
    } else if(points >= 70) {
        
        qs('.scoreText1').innerHTML = 'Parabéns!';
        qs('.scorePct').style.color = '#0D630D';
    }


    qs('.scorePct').innerHTML = `Acertou ${points}%`;
    qs('.scoreText2').innerHTML = `Você respondeu ${questions.length} e acertou ${correctAnswers}.`;
    qs('.scoreArea').style.display = 'block';
    qs('.questionArea').style.display = 'none';    
    qs('.progress--bar').style.width = '100%';
};

function resetEvent() {
    correctAnswers = 0;
    currentQuestion = 0;
    showQuestion();
}
