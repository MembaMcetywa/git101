$(document).foundation();

//  display for the number of contributions
const countUp = () => {
  const numberOfCards = document.getElementsByClassName("card").length;
  const numberOfContributors = numberOfCards - 1; // minus the example card

  setTimeout(() => {
    if (displayNumber < numberOfContributors) {
      displayNumber++;
      contributionsDisplay.textContent = displayNumber;
      countUp();
    }

    if (displayNumber === numberOfContributors) displayClass.add("rubberBand");
  }, 15);
};
