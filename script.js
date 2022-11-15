function quoteGarden() {
  fetch("https://quote-garden.herokuapp.com/api/v3/quotes/random")
    .then((response) => response.json())
    .then((data) => {
      document.body.append(data.data[0].quoteText, data.data[0].quoteAuthor);
    });
}

const button = document.querySelector("button");
button.addEventListener("click", quoteGarden);
