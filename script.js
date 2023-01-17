const contributionsDisplay = document.getElementById("contributions-number");
let displayNumber = 0;
const countUp = () => {
  const numberOfCards = document.getElementsByClassName("card").length;
  console.log("here", numberOfCards);
  const numberOfContributors = numberOfCards; // minus the example card

  setTimeout(() => {
    if (displayNumber < numberOfContributors) {
      displayNumber++;
      contributionsDisplay.textContent = displayNumber;
      countUp();
    }

    // if (displayNumber === numberOfContributors) displayClass.add("rubberBand");
  }, 15);
};
