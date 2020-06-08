
correction = true;

function updateRadio(ele) {

  if (ele.style.justifyContent != "flex-end") {

    ele.style.justifyContent = "flex-end";
    ele.style.backgroundColor = "#ff7675";
    ele.querySelector("span").textContent = "off";
    correction = false;

  } else {

    ele.style.justifyContent = "flex-start";
    ele.style.backgroundColor = "";
    ele.querySelector("span").textContent = "on";
    correction = true;

  }

}

function random(max) {
  return Math.floor(Math.random() * max);
}

goodQuote = ["C'est le meilleur site du monde !",
  "Voici un chef d'oeuvre d'ingéniosité",
  "Je suis tout emballé, j'achete dès maintenant.",
  "Une équipe au potentiel infini !",
  "bigstones.fr ... site exceptionnel à retenir"]

selectedQuote = random(goodQuote.length);
if (localStorage.getItem("quote_created") == null) localStorage.setItem("quote_created", 0);

function updateArea(ele, event) {

  //console.log(event.keyCode);
  if (event.keyCode == 32 || event.keyCode == 13) { // touche espace

    if (correction) {
      var words = ele.value.split(" ");
      console.log(words);
      var lastIndex = words.length - 2;
      var selected = goodQuote[selectedQuote].split(" ");
      if (selected.length < words.length - 1) {
        words.splice(lastIndex, 2);
      } else {
        words[lastIndex] = selected[lastIndex];
      }
      ele.value = words.join(" ");
    }

  }

  if (ele.value.length == 0) {
    document.querySelector("#cite-to-update").textContent = "Votre citation ici !";
  } else {
    document.querySelector("#cite-to-update").textContent = ele.value;
  }

}

function updateAuthor(ele) {

  if (ele.value.length == 0) {
    document.querySelector("#author-to-update").textContent = "votre admirable personne";
  } else {
    document.querySelector("#author-to-update").textContent = "—" + ele.value;
  }

}

function createQuote() {

  var target = document.querySelector("#second-display").querySelector("cite");
  if (target != null) {
    var sentence = target.querySelector("#cite-to-update");
    var author = target.querySelector("#author-to-update");
    if (sentence.textContent.length > 0 && author.textContent.length > 0) {
      var newID = localStorage.getItem("quote_created") - (-1);
      localStorage.setItem("quote_created", newID); //ajout dans mini-stockage
      localStorage.setItem(newID + "_quote", sentence.textContent);
      localStorage.setItem(newID + "_author", author.textContent);
      newquote = {}; //ajout dans liste static
      newquote["content"] = sentence.textContent;
      newquote["author"] = author.textContent;
      quotes.push(newquote);
      new_quote = true; //affichage prochainement
      selectedQuote = random(goodQuote.length); //nouvelle phrase pour auto-correction
      document.querySelector("#inpContent").value = "";
      document.querySelector("#inpAuthor").value = "";
    }
  }

}

new_quote = false;
current_id_show = 0;
quotes = [{content: "Vos citations apparaissent ici !", author: "pierrot le bo"},
  {content: "N'hésitez pas à ajouter les vôtres", author: "pierrot le bo"},
  {content: "En plus, elles se sauvegardent sur votre navigateur avec l'API localStorage", author: "pierrot le bo"}];


setInterval(function() {

  var current_quote = document.querySelector("#third-display").querySelector("cite");
  var current_content = current_quote.querySelector("#content");
  var current_author = current_quote.querySelector("#author");

  if (!new_quote) {
    if (current_quote.classList.contains("newest")) current_quote.classList.remove("newest");
    current_content.textContent = quotes[current_id_show].content;
    current_author.textContent = quotes[current_id_show].author;
    current_id_show = (current_id_show+1)%quotes.length;
  } else {
    temp_id = quotes.length - 1;
    if (!current_quote.classList.contains("newest")) current_quote.classList.add("newest");
    current_content.textContent = quotes[temp_id].content;
    current_author.textContent = quotes[temp_id].author;
    new_quote = false;
  }

//  current_quote.style.animation = "";
  //current_quote.offsetWidth;
  //current_quote.style.animation = "showingQuote 1s linear";

}, 5000);

function init() {

  max_id = localStorage.getItem("quote_created") - 0;
  if (max_id > 0) {
    for (i = 1; i<max_id+1; i++) {
      newquote = {};
      newquote["content"] = localStorage.getItem(i + "_quote");
      newquote["author"] = localStorage.getItem(i + "_author");
      quotes.push(newquote);
    }
  }

}
