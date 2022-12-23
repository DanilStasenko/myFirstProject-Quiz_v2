const answers = {
    '1': '1',
    '2': '3',
    '3': '1',
    '4': '2',
    '5': '1'
}


const answerMessages = (() => {
    const res = {}

    for (const k in answers) {
        const correctElem = document.querySelector(`p[answer='${k}'].correct`)
        const incorrectElem = document.querySelector(`p[answer='${k}'].incorrect`)
        res[k] = [correctElem, incorrectElem]
    }

    return res
})()



function setEventHandlers(answers, answerMessages) {
    for (const q in answers) {
        const a = answers[q]
        const [ correctMsgElem, incorrectMsgElem ] = answerMessages[q]
        
        const inputElems = document.querySelectorAll(`input[question='${q}']`)
        for (const inputElem of inputElems) {
            if (inputElem.attributes.value.value === a)
                inputElem.addEventListener('click', () => {
                    correctMsgElem.style.display = "inline"
                    incorrectMsgElem.style.display = "none"
                })
            
            else 
                inputElem.addEventListener('click', () => {
                    correctMsgElem.style.display = "none"
                    incorrectMsgElem.style.display = "inline"
                })
        }
    }
}


setEventHandlers(answers, answerMessages)


