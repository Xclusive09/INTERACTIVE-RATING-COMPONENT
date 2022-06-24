// Selectors.
const ratingCard = document.getElementById("rating-card");
const thanksCard = document.getElementById("thanks-card");
const ratingNums = document.querySelectorAll(".rating-number");
const submit = document.getElementById("submit");
const score = document.getElementById("score");

// looping through the rating numbers.
ratingNums.forEach((number,index) => {
  number.addEventListener("click", () => {
    checkNum(number.id); // setting the rating score for Thank you card.
    number.classList.add("active");
    ratingNums.forEach((num,pos) => { // toggling between the rating numbers.
        if(index != pos) {
            num.classList.remove("active");
        }
    })
  });
});

submit.addEventListener("click", (e) => { // Change display.
  e.preventDefault();
  ratingCard.style.display = "none"; // hide rating card.
  thanksCard.style.display = "block"; // show thank you card.
});

function checkNum(num) { 
  switch (num) { // checks the number using switch.
    case "one":
      score.textContent = 1;
      break;
    case "two":
      score.textContent = 2;
      break;
    case "three":
      score.textContent = 3;
      break;
    case "four":
      score.textContent = 4;
      break;
    case "five":
      score.textContent = 5;
      break;
  }
}
