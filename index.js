$(document).ready(function () {
  $(".startTest").on("click", function () {
    let languageSelected = $(this).parent().attr("id");
    window.location.href = `testpage-${languageSelected}.html`;
  });

  $(document).on("click", ".signin", function () {
    event.preventDefault();
    window.location.href = "homepage.html";
  });

  $(document).on("click", ".Add", function () {
    event.preventDefault();
    window.location.href = `Addtestpage.html`;
  });

  $(document).on("click", ".addquestion", function () {
    event.preventDefault();
    window.location.href = `Addquestionpage.html`;
  });
  timer();
  $(document).on("click", ".submitAnswers", function (e) {
    e.preventDefault();
    window.location.href = "result.html";
  });

  $(document).on("click", ".resultPage button", function (e) {
    e.preventDefault();
    window.location.href = "homepageUser.html";
  });
  $(document).on("click", ".submitQuest", function (e) {
    e.preventDefault();
    window.location.href = "homepage.html";
  });
  $(document).on("click", ".addTest", function (e) {
    e.preventDefault();
    window.location.href = "homepage.html";
  });

  $(document).on("click", ".addQuestion", function (e) {
    e.preventDefault();
    let newQuestion = `<div class="questionSet">
    <p>
      <label for="question">Enter your question:</label>
      <textarea id="question" required></textarea><br />
    </p>
    <p>
      <label for="option1">Option 1:</label>
      <textarea type="text" id="option1" required></textarea><br />
    </p>
    <p>
      <label for="option2">Option 2:</label>
      <textarea type="text" id="option2" required></textarea><br />
    </p>
    <p>
      <label for="option3">Option 3:</label>
      <textarea type="text" id="option3" required></textarea><br />
    </p>
    <p>
      <label for="option4">Option 4:</label>
      <textarea type="text" id="option4" required></textarea><br />
    </p>
</div>`;
    $(".addQuestForm .questionSet:last-of-type").after(newQuestion);
  });

  let score = $(".percentage").text();
  if (Number(score) < 40) {
    $(".resultMessage span").css("color", "red");
  }
});

function timer() {
  let timeRemaining = 30 * 60 * 1000; // 30 minutes in milliseconds

  // Update the timer every second
  const timerInterval = setInterval(updateTimer, 1000);

  function updateTimer() {
    // Calculate the remaining minutes and seconds
    const minutes = Math.floor(timeRemaining / 60000);
    const seconds = Math.floor((timeRemaining % 60000) / 1000);

    // Update the timer display

    const timerElement = document.getElementById("timer");
    timerElement.textContent = `${minutes.toString().padStart(2, "0")}:${seconds
      .toString()
      .padStart(2, "0")}`;

    // Check if the timer has reached 0
    if (timeRemaining === 0) {
      clearInterval(timerInterval);
      //alert("Time's up!");
      window.location.href = "result.html";
    } else {
      // Decrease the time remaining by 1 second
      timeRemaining -= 1000;
    }
  }
}
