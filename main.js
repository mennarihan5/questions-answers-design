const questionAnswers = document.querySelectorAll(".question-answer");
const container = document.querySelector(".container");
const question = document.querySelector(".question");
const answer = document.querySelector(".answer");
const iconPlus = document.querySelector(".fa-plus");
const iconMinus = document.querySelector(".fa-minus");
    

for (let question of questionAnswers) {
    question.addEventListener("click", clicked);
    question.addEventListener("click", answerStyle);

    function clicked() {
        answer.style.display = answer.style.display === "none" || answer.style.display === "" ? "block": "none";

        iconPlus.classList.toggle("hide");
        iconMinus.classList.toggle("hide");
    }

    function answerStyle() {
        answer.style.paddingBottom = "1rem";
    }
}



