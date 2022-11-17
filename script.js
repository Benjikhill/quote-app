const quote = document.querySelector("#quote");
const author = document.querySelector("#author");
const button = document.querySelector("button");

button.addEventListener("click", quoteGarden);

function quoteGarden() {
  quote.innerText = "";
  author.innerText = "";
  fetch("https://quote-garden.herokuapp.com/api/v3/quotes/random")
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      let quoteText = data.data[0].quoteText;
      let auhtorText = data.data[0].quoteAuthor;

      quote.innerText = quoteText;
      author.innerText = auhtorText;
    });
}
