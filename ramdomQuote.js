//Créer une fonction pour afficher de manière aleatoire une phrase dans la page HTML 

var monTableau =['une phrase','deux phrase','troisphrase'];
var Cmptr =[Math.floor(Math.random() * monTableau.length)];     
document.getElementById('Quote').innerHTML=monTableau[Cmptr];
