
function addLink(nbr) {

  var links = document.querySelector("#header-buttons").querySelectorAll("a")[nbr];
  var toAdd = document.createElement("a");
  toAdd.textContent = links.textContent;
  toAdd.setAttribute("href", links.getAttribute("href"));

  document.querySelector("#mobile-nav").appendChild(toAdd);

}

function openMobileNav() {

  var nav = document.querySelector("#mobile-nav")
  if (nav.style.display != "none") {
    nav.style.display = "none";
    nav.innerHTML = "";
  } else {
    nav.style.display = "flex";
    var nbr_links = document.querySelector("#header-buttons").querySelectorAll("a").length;
    var current_link = 0;
    addLink(current_link);

    var id = setInterval(function() {

      current_link++;
      if (current_link >= nbr_links) {
        current_link = 0;
        clearInterval(id);
      } else {
        addLink(current_link);
      }

    }, 100);
  }

}
