function quoteGarden() {
  fetch("https://quote-garden.herokuapp.com/api/v3/quotes/random")
    .then((response) => response.json())
    .then((data) => {
      document.body.append(document.createTextNode(data.random));
    });
}

const button = document.querySelector("button");
button.addEventListener("click", quoteGarden);
//button.style.backgroundColor = "red";
