const questionAnswers = document.querySelectorAll(".question-answer");



for (let question of questionAnswers) {
    const answer = question.querySelector(".answer");
    const iconPlus = question.querySelector(".fa-plus");
    const iconMinus = question.querySelector(".fa-minus");
    
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