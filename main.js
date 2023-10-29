function checkAnswer() {
    const movieChoice = document.getElementById("movieChoice");
    const quizResult = document.getElementById("quizResult");
    const quizSection = document.getElementById("quizSection");
    const hobbySection = document.getElementById("hobbySection");
    const resultSection = document.getElementById("resultSection");

    if (movieChoice.style.backgroundColor === "") {
      quizResult.textContent = "正解！私の趣味は映画鑑賞です。";
      quizResult.style.color = "green";
      quizSection.classList.add("hidden");
      hobbySection.classList.remove("hidden");
      resultSection.classList.remove("hidden");
    } else {
      quizResult.textContent = "残念！不正解です。";
      quizResult.style.color = "red";
      resultSection.classList.remove("hidden");
    }
  }