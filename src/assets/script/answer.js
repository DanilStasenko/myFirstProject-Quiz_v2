const answers = {
    '1': '1',
    '2': '3',
    '3': '1',
    '4': '2',
    '5': '1'
}

const forms = document.querySelectorAll('.question__form');
forms.forEach( form => form.addEventListener('click', handleFormClick) );

function handleFormClick(event) {
    event.preventDefault();

    const currentAnswer = event.target.getAttribute('for');
    if (!currentAnswer) return;

    const answerKey = currentAnswer.charAt(0);
    const answerValue = currentAnswer.charAt(currentAnswer.length - 1);
    const answerData = {
        [answerKey]: answerValue
    }
    
    for (const [key, value] of Object.entries(answerData)) {
        const correct = document.querySelector(`#correct-${key}`);
        const text = document.querySelector(`#correct-${key}-text`);
        const incorrect = document.querySelector(`#incorrect-${key}`);
        
        value == answers[key] ? showCorrect(correct, incorrect, text) : showIncorrect(correct, incorrect, text);
    }

}

function showCorrect(correct, incorrect, text) {
    incorrect.style.display = 'none';
    correct.style.display = 'block';
    text.style.display = 'block';
}

function showIncorrect(correct, incorrect, text) {
    correct.style.display = 'none';
    text.style.display = 'none';
    incorrect.style.display = 'block';
}
