const quizData = [{
        "question": "Does or did anyone in your family have Alzheimer's disease or dementia?",
        "a": "Yes",
        "b": "No",
        "c":"N/A",
        
        "correct": "a",
    },
    {
        "question": "Have you tested positive for an Alzheimer's disease gene?",
        "a": "Yes",
        "b": "No",
        "c":"N/A",
        "correct": "a",
    },
    {
        "question": "Does (or did) anyone in your family have Parkinson's disease?",
        "a": "yes",
        "b": "No",
        "c":"N/A",
        "correct": "a",
    },
    {
        question: "Have you tested positive for a Parkinson’s disease gene?",
        a: "yes",
        b: "No",
        c:"N/A",
        correct: "a",
    },
    {
        question: "Have you had a concussion (head injury with loss of consciousness or disorientation, confusion, or memory loss)?",
        a: "yes",
        b: "No",
        c:"N/A",
        correct: "a",
    },
    {
        question: "Have you had repeated blows to the head (e.g. from sports, military service or physical abuse)?",
        a: "yes",
        b: "No",
        c:"N/A",
        correct: "a",
    },
    {
        question: "On average do you sleep less than six hours a night?",
        a: "yes",
        b: "No",
        c:"N/A",
        correct: "a",
    },
    {
        question: "Do you frequently act out your dreams (e.g. talk, shout, scream, kick, hit, punch)?",
        a: "yes",
        b: "No",
        c:"N/A",
        correct: "a",
    },
    {
        question: "Did you reach menopause (complete cessation of menstrual periods for one year) before age 45 (naturally, not due to surgery)?",
        a: "yes",
        b: "No",
        c:"N/A",
        correct: "a",
    },
    {
        question: "Have you tested positive for a Parkinson’s disease gene?",
        a: "yes",
        b: "No",
        c:"N/A",
        correct: "a",
    },
    {
        question: "Have you had surgical removal of one or both ovaries before age 45?",
        a: "yes",
        b: "No",
        c:"N/A",
        correct: "a",
    },
    {
        question: "Do you have heart problems?",
        a: "yes",
        b: "No",
        c:"N/A",
        correct: "a",
    },{
        question: "Do you have high blood pressure?",
        a: "yes",
        b: "No",
        c:"N/A",
        correct: "a",
    },{
        question: "Have you had a stroke?",
        a: "yes",
        b: "No",
        c:"N/A",
        correct: "a",
    },{
        question: "Do you have diabetes?",
        a: "yes",
        b: "No",
        c:"N/A",
        correct: "a",
    },{
        question: "Do you have high cholesterol?",
        a: "yes",
        b: "No",
        c:"N/A",
        correct: "a",
    },
    {
        question: "Do you have high cholesterol?",
        a: "yes",
        b: "No",
        c:"N/A",
        correct: "a",
    },
    {
        question: "Are you obese (body mass index ≥ 30)?",
        a: "yes",
        b: "No",
        c:"N/A",
        correct: "a",
    },
    {
        question: "Do you have high cholesterol?",
        a: "yes",
        b: "No",
        c:"N/A",
        correct: "a",
    },
    {
        question: "Do you currently smoke?",
        a: "yes",
        b: "No",
        c:"N/A",
        correct: "a",
    },
    {
        question: "On average do you have more than two drinks of alcohol (e.g. wine, beer, liquor) a day?",
        a: "yes",
        b: "No",
        c:"N/A",
        correct: "a",
    },
    {
        question: "Do you currently smoke?",
        a: "yes",
        b: "No",
        c:"N/A",
        correct: "a",
    },
    {
        question: "Have you been diagnosed by a doctor or treated for depression?",
        a: "yes",
        b: "No",
        c:"N/A",
        correct: "a",
    },
    {
        question: "Did you complete less than 12 years of school?",
        a: "yes",
        b: "No",
        c:"N/A",
        correct: "a",
    },
    {
        question: "Have you been diagnosed by a doctor or treated for depression?",
        a: "yes",
        b: "No",
        c:"N/A",
        correct: "a",
    },
    {
        question: "Are you sedentary (physically inactive)?",
        a: "yes",
        b: "No",
        c:"N/A",
        correct: "a",
    },
    {
        "question": "Do you eat red meat, fatty foods, sugary foods (or drinks) or white bread daily?",
        "a": "yes",
        "b": "No",
        "c":"N/A",
        "correct": "a",
    },

];
let index = 0;
let correct = 0,
    incorrect = 0,
    total = quizData.length;
let questionBox = document.getElementById("questionBox");
let allInputs = document.querySelectorAll("input[type='radio']")
const loadQuestion = () => {
    if (total === index) {
        return quizEnd()
    }
    reset()
    const data = quizData[index]
    questionBox.innerHTML = `${index + 1}) ${data.question}`
    allInputs[0].nextElementSibling.innerText = data.a
    allInputs[1].nextElementSibling.innerText = data.b
    allInputs[2].nextElementSibling.innerText = data.c
}

document.querySelector("#submit").addEventListener(
    "click",
    function() {
        const data = quizData[index]
        const ans = getAnswer()
        if (ans === data.correct) {
            correct++;
        } else {
            incorrect++;
        }
        index++;
        loadQuestion()
    }
)

const getAnswer = () => {
    let ans;
    allInputs.forEach(
        (inputEl) => {
            if (inputEl.checked) {
                ans = inputEl.value;
            }
        }
    )
    return ans;
}

const reset = () => {
    allInputs.forEach(
        (inputEl) => {
            inputEl.checked = false;
        }
    )
}

const quizEnd = () => {
    // console.log(document.getElementsByClassName("container"));
    document.getElementsByClassName("container")[0].innerHTML = `
        <div class="col">
            <h3 class="w-100"> Hii, you've scored ${correct} / ${total} </h3>
        </div>
    `
}
loadQuestion(index);