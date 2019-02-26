function compteur(){
	var Cmpter = 1;
	return function(){
		return Cmpter++;
	}
}
var increment = compteur();
alert(' premier appel ' + increment() + increment() + increment());
