import { getQuotes } from "./data/quotes.js";
import { generateRandom } from "./helpers/randomNum.js";

const button = document.getElementById("generate-btn");
const quoteText = document.getElementById("quote");

quoteText.style.display = "none";

function showRandomQuote() {
  const qoutes = getQuotes();

  button.onclick = function () {
    const randomNum = generateRandom();
    quoteText.style.display = "block";
    quoteText.textContent = qoutes[randomNum];
  };
}

showRandomQuote();
