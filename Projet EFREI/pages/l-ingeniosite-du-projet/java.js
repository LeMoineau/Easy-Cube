
function resetEditables() {

  var tableau = document.querySelector("#tableau-score");

  for (s of tableau.querySelectorAll(".score")) {
    if (s.classList.contains("editable")) s.classList.remove("editable");
    s.querySelector("input").setAttribute("readonly", true);
  }

}

function addScore(time) {

  var tableau = document.querySelector("#tableau-score");

  resetEditables();

  var score = document.createElement("div");
  score.classList.add("score");
  score.classList.add("editable");
  score.setAttribute("time", time);
  score.textContent = " — " + time.toFixed(3) + "s";
  var inp = document.createElement("input");
  inp.value = "Nouveau Joueur";
  inp.setAttribute("onfocus", "setInEdit(true)");
  inp.setAttribute("onfocusout", "setInEdit(false)");
  inp.setAttribute("onkeypress", "checkEnter(this, event)");
  score.prepend(inp);

  for (s of tableau.querySelectorAll(".score")) {
    if (s.getAttribute("time") > time) {
      tableau.insertBefore(score, s);
      return;
    }
  }
  tableau.appendChild(score);

}

function setInEdit(edit) {
  inEdit = edit;
}

function checkEnter(ele, event) {

  if (event.keyCode == 13) {
    ele.blur();
    resetEditables();
    event.preventDefault();
  }

}

function mobileTap() {
  if (!pPressed && !inEdit) {

    pPressed = true;
    date = new Date();

    var id = setInterval(function() {
      if (!pPressed) clearInterval(id);
      else {
        result = (new Date().getTime() - date.getTime()) / 1000;
        document.querySelector("#minuteur").textContent = result.toFixed(3);
      }
    }, 1);

    document.querySelector("#to-play-mobile").textContent = "A";

  } else if (pPressed) {

    finalDate = new Date();
    pPressed = false;
    result = (finalDate.getTime() - date.getTime()) / 1000;
    document.querySelector("#minuteur").textContent = result.toFixed(3) + "s";
    date = null;
    addScore(result);
    document.querySelector("#to-play-mobile").textContent = "P";

  }
}

var pPressed = false;
var inEdit = false;
var date = null;

window.onkeypress = function(event) {

  if (event.keyCode == 97) { //a

    if (pPressed && !inEdit) {
      finalDate = new Date();
      pPressed = false;
      result = (finalDate.getTime() - date.getTime()) / 1000;
      document.querySelector("#minuteur").textContent = result.toFixed(3) + "s";
      date = null;
      addScore(result);
    }

  } else if (event.keyCode == 112) { //p
    if (!pPressed && !inEdit) {
        pPressed = true;
        date = new Date();

        var id = setInterval(function() {
          if (!pPressed) clearInterval(id);
          else {
            result = (new Date().getTime() - date.getTime()) / 1000;
            document.querySelector("#minuteur").textContent = result.toFixed(3);
          }
        }, 1);
    }
  }

}

document.querySelector("#tableau-score").onwheel = function(event) {

  target = document.querySelector("#tableau-score");
  sensi = 100;

  if (event.deltaY > 0) {
    target.scroll(0, target.scrollTop + sensi);
  } else {
    target.scroll(0, target.scrollTop - sensi);
  }
  event.preventDefault();

}
