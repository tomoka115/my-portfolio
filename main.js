const movieChoice = document.getElementById("movieChoice");
const quizResult = document.getElementById("quizResult");
const quizSection = document.getElementById("quizSection");
const hobbySection = document.getElementById("hobbySection");

movieChoice.onclick = function () {
  quizResult.textContent = "正解！わたしの趣味は映画鑑賞です。"
  hobbySection.classList.remove("hidden");
  quizSection.classList.add("hidden");
}

const walkChoice = document.getElementById("walkChoice")
walkChoice.onclick = function () {
  quizResult.textContent = "残念！不正解です。"
}

const bakingChoice = document.getElementById("bakingChoice")
bakingChoice.onclick = function () {
  quizResult.textContent = "残念！不正解です。"
}