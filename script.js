const btn = document.querySelector(".btn-next");
const btn2 = document.querySelector(".btn-wrong");
const btn3 = document.querySelector(".btn-timeOut");
const setTimer = document.querySelector(".container-timer");
let nextQuestion = 1;
let counter = 0;
let gameScore = 0;

const answerList = [{
    question: "What is the most visited country in the world? (2022)",
    answer1: "France",
    answer2: "Spain",
    answer3: "Italy",
    answer4: "United States",
    /* Number of the answer that it´s true 1=answer1 */
    trueValue: "1"
},
{
    question: "How many years did the 100 year war last?",
    answer1: "100",
    answer2: "96",
    answer3: "116",
    answer4: "101",
    trueValue: "3"
},
{
    question: "What is the most dangerous job in the world?",
    answer1: "Construction worker",
    answer2: "Electrician",
    answer3: "Woodcutter",
    answer4: "None of the above",
    trueValue: "3"
},
{
    question: "What is the longest river in the world?",
    answer1: "Nilo",
    answer2: "Amazonas",
    answer3: "Yangtsé",
    answer4: "Misisipi",
    trueValue: "1"
}
    ,
{
    question: "What is the country of origin of Elon Musk?",
    answer1: "United States",
    answer2: "Mexico",
    answer3: "South Africa",
    answer4: "Mars",
    trueValue: "3"
}
    ,
{
    question: "What is the animal inside the famous schrodinger box?",
    answer1: "Dog",
    answer2: "Elephant",
    answer3: "Cat",
    answer4: "Mouse",
    trueValue: "3"
}
    ,
{
    question: "How many minutes does it take for sunlight to reach earth?",
    answer1: "8,20 min",
    answer2: "0.0036 min",
    answer3: "58.9 min",
    answer4: "1 min",
    trueValue: "1"
}
    ,
{
    question: "What is the largest island in the world?",
    answer1: "Great Britain",
    answer2: "Greenland",
    answer3: "New guinea",
    answer4: "Madagascar",
    trueValue: "2"
}
    ,
{
    question: "What is the animal that causes the most deaths?",
    answer1: "Snakes",
    answer2: "Hippos",
    answer3: "Mosquito",
    answer4: "Dog",
    trueValue: "3"
}
    ,
{

    question: "What is the best job in the world? (well... I'm a web developer so...)",
    answer1: "Architect",
    answer2: "Game tester",
    answer3: "Commercial pilot",
    answer4: "Web developer",
    trueValue: "4"
}
];

/* Timer */
let clock;

function timer() {
    clock = window.setTimeout(noDisplay, 10000);
}

function clearTimer() {
    clearTimeout(clock);
}

function noDisplay() {
    setTimer.style.display = "none";
    btn3.style.display = "flex";
    btn.style.display = "none";
    btn2.style.display = "none";

    clearTimeout(clock);
}

function displayTimer() {
    let codeHTML3 = `
   <div class="set-timer"></div>
    `
    document.querySelector(".container-timer").innerHTML = codeHTML3
}
/* Timer end */

const btnStart = document.querySelector(".btn-start");
const openListeners = document.querySelector(".open-listeners");
const loader = document.querySelector(".loader");

/*button start */
btnStart.addEventListener("click", () => {
    btnStart.style.display = "none";
    openListeners.style.display = "flex";
    loader.style.opacity = "25%";
    loader.style.position = "absolute";
    loader.style.animation = "animate 7s linear infinite";
    displayTimer();
    timer();
})
/*button start end*/



/*Main function */
function quiz() {
    /*Final message*/
    const finalMessage = document.querySelector(".final-message");

    if (counter >= answerList.length) {
        console.log(gameScore);
        let codeHTML4 = `
        <div class="final-message-score"> Congratulations, you have completed the game. <br> Your score is: ${gameScore}/10</div>
        `
        document.querySelector(".final-message").innerHTML = codeHTML4;
        finalMessage.style.display = "block";
        openListeners.style.display = "none";
        loader.style.opacity = "1";
        loader.style.position = "absolute";
        loader.style.animation = "animate 2s linear infinite";
    }
    /*Final message end*/

    /*questions*/
    data = answerList;
    let codeHTML = `
    <div class="container-questions">${data[counter]["question"]}</div>
    `
    document.querySelector(".container-questions").innerHTML = codeHTML;
    /*questions end*/
    
    /*answers*/
    let codeHTML2 = `
    <div class="container-answers1">${data[counter]["answer1"]} </div>
    <div class="container-answers2">${data[counter]["answer2"]}</div>
    <div class="container-answers3">${data[counter]["answer3"]}</div>
    <div class="container-answers4">${data[counter]["answer4"]}</div>
    `
    document.querySelector(".container-for-answers").innerHTML = codeHTML2;
    /*answers end*/

    /*Events answers*/
    const answers1 = document.querySelector(".container-answers1");
    const answers2 = document.querySelector(".container-answers2");
    const answers3 = document.querySelector(".container-answers3");
    const answers4 = document.querySelector(".container-answers4");

    answers1.addEventListener('click', functionAnswer1)
    function functionAnswer1() {
        answers2.style.backgroundColor = "black";
        answers3.style.backgroundColor = "black";
        answers4.style.backgroundColor = "black";
        removeEvent1();
        removeEvent2();
        removeEvent3();
        removeEvent4();
        if (data[counter]["trueValue"] == "1") {
            btn.style.display = "flex";
            answers1.style.backgroundColor = "#31087B";
            btn2.style.display = "none";
        }
        else {
            answers1.style.backgroundColor = "#820000";
            btn2.style.display = "flex";
            btn.style.display = "none";

        }
    }

    function removeEvent1() {
        answers1.removeEventListener('click', functionAnswer1);
    }

    answers2.addEventListener('click', functionAnswer2)

    function functionAnswer2() {
        answers1.style.backgroundColor = "black";
        answers3.style.backgroundColor = "black";
        answers4.style.backgroundColor = "black";
        removeEvent1();
        removeEvent2();
        removeEvent3();
        removeEvent4();
        if (data[counter]["trueValue"] == "2") {
            btn.style.display = "flex";
            answers2.style.backgroundColor = "#31087B";
            btn2.style.display = "none";
        }
        else {
            answers2.style.backgroundColor = "#820000";
            btn2.style.display = "flex";
            btn.style.display = "none";
        }
    }

    function removeEvent2() {
        answers2.removeEventListener('click', functionAnswer2);
    }

    answers3.addEventListener('click', functionAnswer3)

    function functionAnswer3() {
        answers1.style.backgroundColor = "black";
        answers2.style.backgroundColor = "black";
        answers4.style.backgroundColor = "black";
        removeEvent1();
        removeEvent2();
        removeEvent3();
        removeEvent4();
        if (data[counter]["trueValue"] == "3") {
            btn.style.display = "flex";
            answers3.style.backgroundColor = "#31087B";
            btn2.style.display = "none";
        }
        else {
            answers3.style.backgroundColor = "#820000";
            btn2.style.display = "flex";
            btn.style.display = "none";
        }
    }

    function removeEvent3() {
        answers3.removeEventListener('click', functionAnswer3);
    }

    answers4.addEventListener('click', functionAnswer4)
    function functionAnswer4() {
        answers1.style.backgroundColor = "black";
        answers2.style.backgroundColor = "black";
        answers3.style.backgroundColor = "black";
        removeEvent1();
        removeEvent2();
        removeEvent3();
        removeEvent4();
        if (data[counter]["trueValue"] == "4") {
            btn.style.display = "flex";
            answers4.style.backgroundColor = "#31087B";
            btn2.style.display = "none";
        }
        else {
            answers4.style.backgroundColor = "#820000";
            btn2.style.display = "flex";
            btn.style.display = "none";
        }

    }

    function removeEvent4() {
        answers4.removeEventListener('click', functionAnswer4);
    }
    /*Events answers end*/

}
/*Main function end*/

/*Button section*/
btn.addEventListener('click', function () {
    counter++;
    gameScore++;
    btn.style.display = "none";
    btn2.style.display = "none";
    setTimer.style.display = "flex";
    clearTimer();
    displayTimer();
    timer();
    quiz();


})

btn2.addEventListener('click', function () {
    counter++;
    btn.style.display = "none";
    btn2.style.display = "none";
    setTimer.style.display = "flex";
    clearTimer();
    displayTimer();
    timer();
    quiz();
})

btn3.addEventListener('click', function () {
    counter++;
    btn.style.display = "none";
    btn2.style.display = "none";
    btn3.style.display = "none";
    setTimer.style.display = "flex";
    clearTimer();
    displayTimer();
    timer();
    quiz();
})
/*Button section end*/



/*Start of the program*/
quiz();

