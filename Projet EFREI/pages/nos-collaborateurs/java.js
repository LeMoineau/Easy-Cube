
explanations = [{title: "Tacos XXL", content: "La -mal bouffe- est le principale carburant de notre machine étudiante. " +
  "On y retrouve donc le Tacos sans plomb, le kebanol et la pizza 95. Bon appétit à vous !"},
  {title: "Le SWAG", content: "Vous l'avez sûrement déjà remarqué lors de la lecture de nos présentation mais vous avez"
  + " devant vous la fine crême de la société. Et comme toute crème de la société elle se doit d'être divinement -Suculentes Wow Arrête Goutumant-"},
  {title: "Pokedex magique", content: "Une petite tablette magique qui répond à toute les questions que l'on pourrait se poser : Internet en somme"},
  {title: "Titi", content: "Hummmmmm.... sans raison et sans jugement acceptons là tous dans cette liste exceptionnelle"},
  {title: "DarkSasuke", content: "Car nous avons tous un côté rebel et ténébreux, voici le DarkSasuke de nos pensées qui a repoussé par maintes grognement" +
  " l'avancement de ce projet"},
  {title: "Triste Pepe frog...", content: "Nous avons tous traversé des périodes de doutes pendant lesquelles nos âmes était mise à dure épreuves..." +
  " Tous ces projets en forme une bien belle (épreuve). Alors on se plaint, on râle et on pleure... triste vie non ?"},
  {title: "EFREI Paris", content: "Meilleurs école d'ingénieur dépassant de loin tous les autres établissements scolaires. Ses profs sont d'une rigueur, d'une" +
  " vaillance, d'une beauté, d'une pédagogie et d'une intelligence incroyable si bien que partout à travers le web on nomme l'équipe enseignante de l'école" +
  " comme conseil des grands maîtres. Longue vie à l'EFREI ! (des points bonus pour ce discours ?)"},
  {title: "omae wa mou shindeiru", content: "La vie n'est pas éternelle, et la temps réservé aux projets non plus. Voici donc la -dead line- qui nous poursuit" +
  " impitoyablement en nous murmurant cruellement : " + '"vous êtes déjà mort..."'},
  {title: "Oui ! je comprend rien, c'est ça !", content: "Qu'est ce que la connaissance lorsque notre cerveau primitif n'arrive pas à en agencer ses composantes ?"+
  ' "Mé jean c ri1 moa ?!"' + " - Voilà un résumé très représentatif de notre études des sites"},
  {title: "l'Utra-Instinct", content: "Nous ne sommes pas des animaux car nous ne sommes pas dirigé par notre instinct. Pourtant nous remercions infiniment ces" +
  " rares moments nocturnes où l'instinct prend le dessus sur notre fatigue, notre paresse et notre incompétence pour accomplir d'incroyables miracles. Pour ça" +
  " nous sommes fiers d'être encore assez primitif pour rester animal de temps en temps !"},
  {title: "Apple", content: "Un de nos inombrabres partenaires qui travaillent chaque jour avec nos nombreux ingénieurs. Nous sommes également sponsorisé" +
  " par Google, Space X, Huawei, Carrefour et la boulangerie du marché : Quand nous rejoignez-vous ? Il ne manque plus que vous !"},
  {title: "That's my boy !", content: "Présent ici, car nous tenons une sympathique collaboration avec ces brefs éclaires de génies qui nous font tant de bien"},
  {title: "Daronned", content: "Ces soirs où la figure maternelle explore miraculeusement notre antre sauvage mais néanmoins sacré pour chanter de sa voix" +
  " cristalline: " + '"Ramasse tes caleçons, débranche ta machine et monte au dodo !! Tu veux un coup de pied au c** pour aller plus vite !!!"'},
  {title: "Une quantité astronomique d'argent", content: "Bien sûr tous ces projets de grandes envergures ne se font pas sans moyens. C'est pourquoi nous" +
  " disposons, pour satisfaire nos besoins, de quantité folles d'argent. Le tout est financié fort sympathiquement par ... personne."},
  {title: "Rien.", content: "Oui. Rien. Car tout ça n'est qu'une farce, une blague créée pour faire rire les idiots. Une mascarade qui a pour seul but" +
  " de distraire de faibles esprits pour leur soutirer une insignifiante trace de stylo numérique sur un carnet informatique. C'est le schéma de cette" +
  " vaine vie : paraitre en attendant retour. Adieu."}];

currentExpl = -1;

function showInfo(expl) {

  var infoDiv = document.querySelector("#info");

  if (expl == currentExpl) {
    infoDiv.classList.remove("showed");
    currentExpl = -1;
    setTimeout(function() {
      infoDiv.style.display = "none";
    }, 500);
  } else {
    infoDiv.style.display = "flex";
    infoDiv.querySelector("h1").textContent = explanations[expl].title;
    infoDiv.querySelector("p").textContent = explanations[expl].content;
    currentExpl = expl;
    setTimeout(function() {
      infoDiv.classList.add("showed");
    }, 0);
  }

}
