
function random(max) {

  return Math.floor(Math.random() * max);

}

function updateGraphe(vari, id, max, range) {

  graphe = document.querySelector("#" + id);
  toChange = null;
  if (vari == "followers") {
    followers += random(max);
    toChange = followers;
  } else if (vari == "demandes") {
    demandes += random(max);
    toChange = demandes;
  } else {
    prix += random(max);
    toChange = prix;
    document.querySelector("#prix1").textContent = prix * 3 + "€";
    document.querySelector("#prix2").textContent = prix + "€";
    document.querySelector("#prix3").textContent = prix * 0.5 + "€";
  }
  graphe.querySelector(".info").textContent = toChange;
  if (toChange > range) {
    if (vari == "followers") {
      followRange *= 10;
      document.querySelector("#title-" + id).textContent = "(en followers / " + followRange + ")";
    } else if (vari == "demandes") {
      demandeRange *= 10;
      document.querySelector("#title-" + id).textContent = "(en nbr / " + demandeRange + ")";
    } else {
      prixRange *= 10;
      document.querySelector("#title-" + id).textContent = "(en € / " + prixRange + ")";
    }
    range *= 10;
  }
  graphe.querySelector(".visu").style.width = toChange/range * 100 + "%";

}

followers = 23;
followRange = 1000;
demandes = 6;
demandeRange = 100;
prix = 2;
prixRange = 10;

setInterval(function() {

  updateGraphe("followers", "graph1", 20, followRange);

}, 200);

setInterval(function() {

  updateGraphe("demandes", "graph2", 10, demandeRange);

}, 500);

setInterval(function() {

  updateGraphe("€", "graph3", 2, prixRange);

}, 500);

function surprise() {

  document.body.style.transform = "scale(0)";
  window.scrollTo(0, 0);
  document.body.style.backgroundColor = "black";
  setTimeout(function() {

    var surprise = document.querySelector("#surprise");
    surprise.style.display = "flex";
    surprise.querySelector("#surprise-msg").textContent = "<!-- g" + "4m" + "" + "3 " + "0v" + "e" + "" + "r -->";
    var all = document.body.innerHTML = " ";
    document.body.appendChild(surprise);
    document.body.style.transform = "scale(1)";

  }, 500);

}

function showPaiement() {

  var pai = document.querySelector("#paiement");
  if (pai.style.height != "500px") {
    pai.style.height = "500px";
    setTimeout(function() {
      document.getElementById("paiement").scrollIntoView();
    }, 500);
  } else {
    pai.style.height = "0";
  }

}
