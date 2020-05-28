
var quote = ["ça fait du bien aux neurones !",
  "Un concept révolutionnaire",
  "Une équipe exceptionnelle et pleine de ressources",
  "Le 'hand-spinner' moderne...",
  "Je passe à la télé là ?"];
var author = ["Bille Gates",
  "Emmannuelle Macron",
  "Frédéric Meunié",
  "économiste anonyme",
  "enfant Billy"];

var current_quote = 0;

function nextQuote() {

  current_quote = (current_quote + 1)%quote.length;
  var current = document.querySelector("cite");
  current.parentElement.removeChild(current);

  var newquote = document.createElement("cite");
  newquote.textContent = quote[current_quote];

  var imgs = document.createElement("img");
  imgs.setAttribute("src", "resources/quote.webp");
  imgs.classList.add("quote-img");

  newquote.prepend(imgs);

  var imgs2 = imgs.cloneNode(true);
  imgs2.classList.add("rotate");
  newquote.appendChild(imgs2);

  var authorP = document.createElement("p");
  authorP.classList.add("author")
  authorP.textContent = "—" + author[current_quote];
  newquote.appendChild(authorP);

  document.querySelector("#third-display").prepend(newquote);

}
