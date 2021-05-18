
var colors = ["#74b9ff", "#ff7675", "#ffeaa7", "#00b894", "#fdcb6e"];
var currentColor = 0;
var alpha = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ123456789";
var currentCreation = 0;
var imgs = ["https://i.pinimg.com/736x/5b/b4/8b/5bb48b07fa6e3840bb3afa2bc821b882.jpg",
  "https://a.wattpad.com/cover/137566694-352-k760450.jpg",
  "https://cdn.ebaumsworld.com/mediaFiles/picture/1035099/85936683.jpg",
  "https://pbs.twimg.com/profile_images/1188507013233479681/WuNwaQ8R_400x400.jpg",
  "https://a.wattpad.com/cover/85992670-352-k248170.jpg",
  "https://dailylolpics.com/wp-content/uploads/2018/08/Random-Funny-Pictures-14-08-2018-27.jpg",
  "https://media1.tenor.com/images/10e0ee269cd82074871e206a5227fe02/tenor.gif?itemid=15293943",
  "https://thumbs.gfycat.com/MedicalAdventurousCanine-size_restricted.gif",
  "https://media3.giphy.com/media/IZAglvKbHC5UY/source.gif",
  "https://vignette.wikia.nocookie.net/runescape2/images/5/56/Frog_%28NPC%29.png/revision/latest/scale-to-width-down/340?cb=20160531202106",
  "https://cdnb.artstation.com/p/assets/images/images/019/214/567/large/lala-drawings-juan.jpg?1562537132",
  "https://digital-insights-test.devoteam.com/wp-content/uploads/2017/11/random-pic-14.jpg",
  "https://images.unsplash.com/photo-1485550409059-9afb054cada4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80",
  "https://i.pinimg.com/originals/7e/7c/7c/7e7c7c65ba250c957360f35e2eec5088.jpg",
  "https://pbs.twimg.com/profile_images/938107324727734274/hJZCICTj.jpg"
  ]
var lastChoose = -1;

function random(min, max) {

  return Math.floor(Math.random() * (max - min)) + min;

}

function generateNewWord() {

  var wordSize = random(5, 26);
  var newWord = "";
  for (i = 0; i<wordSize; i++) {

    newWord += alpha[random(0, alpha.length)];

  }
  return newWord;

}

function addPepite() {

  currentColor = (currentColor+1)%colors.length;
  currentCreation++;

  var footer = document.querySelector("footer");
  var newdiv = document.createElement("article");
  newdiv.classList.add("pepite-display");

  var left = document.createElement("section");
  var right = document.createElement("section");

  var chooseOne;
  do {
    chooseOne = random(0, imgs.length);
  } while (chooseOne == lastChoose);
  lastChoose = chooseOne;

  if (currentCreation % 2 == 1) {
    newdiv.style.flexWrap = "wrap-reverse";
    left.innerHTML = "<h1>Matricule</h1><p>#" + generateNewWord() + "</p>";
    left.style.backgroundColor = colors[currentColor];
    right.innerHTML = "<img src='" + imgs[chooseOne] + "'>";
  } else {
    newdiv.style.flexWrap = "wrap";
    right.innerHTML = "<h1>Matricule</h1><p>#" + generateNewWord() + "</p>";
    right.style.backgroundColor = colors[currentColor];
    left.innerHTML = "<img src='" + imgs[chooseOne] + "'>";
  }

  newdiv.appendChild(left);
  newdiv.appendChild(right);
  document.body.insertBefore(newdiv, footer);

}

var easterDiv = document.querySelector("#easter");

window.onscroll = function(event) {

  var limit = document.body.offsetHeight - window.innerHeight;;

  if (window.scrollY >= limit - 200) {
    addPepite();
  }

  if (window.scrollY > 14000) {
    easterDiv.style.transform = "scale(0)";
  } else if (window.scrollY > 13000) {
    easterDiv.textContent = "Sur ceux, bonne nuit !";
  } else if (window.scrollY > 12000) {
    easterDiv.textContent = "Hmmmmm compliqué";
  } else if (window.scrollY > 11000) {
    easterDiv.textContent = "Ou alors, ce n'est qu'une esquive des problèmes, une peur et une lacheté d'affronter la 'vraie' vie";
  } else if (window.scrollY > 10000) {
    easterDiv.textContent = "Une goutte qui alimentera bientôt un océan de bonheur !...";
  } else if (window.scrollY > 8000) {
    easterDiv.textContent = "La force d'humain assez fort pour sortir des tracas quotidiens et voulant verser une goutte de bonheur au reste du monde";
  } else if (window.scrollY > 7000) {
    easterDiv.textContent = "Voyons là plutôt la force d'une jeunesse ayant vécu malgré eux dans un climat dangereux";
  } else if (window.scrollY > 6000) {
    easterDiv.textContent = "peut-être est-ce faux ?";
  } else if (window.scrollY > 5000) {
    easterDiv.textContent = "Ou alors...";
  } else if (window.scrollY > 4000) {
    easterDiv.textContent = "Des images futiles destinées à faire rire de pietre humains qui n'aurait à faire de leur journée que de dérouler un papier peint infini";
  } else if (window.scrollY > 3000) {
    easterDiv.textContent = "Autant d'ingéniosité parti dans rien";
  } else if (window.scrollY > 2000) {
    easterDiv.style.transform = "scale(1)";
    easterDiv.textContent = "Voici la bêtise humaine...";
  }

}
