
var matthieuP = ["https://i.pinimg.com/originals/49/18/e9/4918e946374bbab0fe57a5b51b9ed8f1.jpg",
  "https://antoinebachelin.files.wordpress.com/2016/08/cherche-maison.png?w=640",
  "https://thegratefulzine.files.wordpress.com/2013/12/manette_jeu.png"];
var matthieuI = 0;
var pierrotP = ["https://www.manga-news.com/public/images/dvd/mysterieuses-cites-dor-S1-affiche.jpg",
  "https://www.kindpng.com/picc/m/227-2277555_chill-clipart-clip-art-illustration-hd-png-download.png"];
var pierrotI = 0;
var tristanP = ["https://samvolleyball.fr/wp-content/uploads/2017/10/mva200_1.png",
  "https://img.pngio.com/one-punch-man-funny-one-punch-man-face-png-funny-faces-png-funny-faces-backgrounds-png-920_804.png",
  "https://i.pinimg.com/originals/49/18/e9/4918e946374bbab0fe57a5b51b9ed8f1.jpg",
  ];
var tristanI = 0;

function nextPassion(perso) {

  var img = document.querySelector("#" + perso + "-passion");
  if (img != null) {
    if (perso == "matthieu") {
      matthieuI = (matthieuI+1)%matthieuP.length;
      img.setAttribute("src", matthieuP[matthieuI]);
    } else if (perso == "pierrot") {
      pierrotI = (pierrotI+1)%pierrotP.length;
      img.setAttribute("src", pierrotP[pierrotI]);
    } else if (perso == "tristan") {
      tristanI = (tristanI+1)%tristanP.length;
      img.setAttribute("src", tristanP[tristanI]);
    }
  }

}
