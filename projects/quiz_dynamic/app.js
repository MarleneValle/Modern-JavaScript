const correctAnswers = ["A", "A", "A", "B"];
const form = document.querySelector(".quiz-form");
const percentage = document.querySelector("span");
const result = document.querySelector(".result");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  let score = 0;
  const userAnswers = [
    form.q1.value,
    form.q2.value,
    form.q3.value,
    form.q4.value,
  ];

  //check answers by taking the user answers and cycle through them using For each method //

  userAnswers.forEach((answer, index) => {
    if (answer === correctAnswers[index]) {
      score += 25;
    }
  });

  //SHOW RESULT ON PAGE

  console.log(score);
  scrollTo(0, 0);
  //   percentage.textContent = `${score}%`;  OR

  result.classList.remove("d-none");
  let output = 0;
  const timer = setInterval(() => {
    result.querySelector("span").textContent = `${output}%`;
    if (output === score) {
      clearInterval(timer);
    } else {
      output++;
    }
  }, 10);
});
