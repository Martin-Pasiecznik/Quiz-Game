
const btn = document.querySelector(".btn-next");
const btn2 = document.querySelector(".btn-wrong")
let nextQuestion = 1;
let counter = 0;


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
    trueValue: "2"
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

    question: "What is the best job in the world? (well... I'm a web developer so...)",
    answer1: "Architect",
    answer2: "Game tester",
    answer3: "Commercial pilot",
    answer4: "Web developer",
    trueValue: "4"
}
];

const btnStart = document.querySelector(".btn-start");
const openListeners = document.querySelector(".open-listeners");
const loader = document.querySelector(".loader");


btnStart.addEventListener("click", () => {
    btnStart.style.display = "none";
    openListeners.style.display = "flex";
    loader.style.opacity = "25%";
    loader.style.position="absolute";
    loader.style.animation = "animate 7s linear infinite";
    


})


function quiz() {

    const finalMessage = document.querySelector(".final-message");

    if (counter >= answerList.length){
        finalMessage.style.display = "block";

        openListeners.style.display = "none";
    loader.style.opacity = "1";
    loader.style.position="absolute";
    loader.style.animation = "animate 2s linear infinite";

    }


    data = answerList;
    console.log(data[counter]["trueValue"])
    let codeHTML = `
    <div class="container-questions">${data[counter]["question"]}</div>
    `
    document.querySelector(".container-questions").innerHTML = codeHTML;

    let codeHTML2 = `
    <div class="container-answers1">${data[counter]["answer1"]} </div>
    <div class="container-answers2">${data[counter]["answer2"]}</div>
    <div class="container-answers3">${data[counter]["answer3"]}</div>
    <div class="container-answers4">${data[counter]["answer4"]}</div>
    `
    document.querySelector(".container-for-answers").innerHTML = codeHTML2;



    const answers1 = document.querySelector(".container-answers1");
    const answers2 = document.querySelector(".container-answers2");
    const answers3 = document.querySelector(".container-answers3");
    const answers4 = document.querySelector(".container-answers4");



    answers1.addEventListener('click', function () {
        answers2.style.backgroundColor = "black";
        answers3.style.backgroundColor = "black";
        answers4.style.backgroundColor = "black";
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

    })

    answers2.addEventListener('click', function () {
        answers1.style.backgroundColor = "black";
        answers3.style.backgroundColor = "black";
        answers4.style.backgroundColor = "black";

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
    })

    answers3.addEventListener('click', function () {
        answers1.style.backgroundColor = "black";
        answers2.style.backgroundColor = "black";
        answers4.style.backgroundColor = "black";

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
    })

    answers4.addEventListener('click', function () {
        answers1.style.backgroundColor = "black";
        answers2.style.backgroundColor = "black";
        answers3.style.backgroundColor = "black";
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

    })

}

btn.addEventListener('click', function () {
    counter++;
    btn.style.display = "none";
    btn2.style.display = "none";
    quiz();

})


quiz();
