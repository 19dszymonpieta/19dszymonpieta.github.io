function potegowanie(){
	var liczba1 = document.getElementById("a").value;
	var liczba2 = document.getElementById("b").value;
	if(liczba1 == 0 || liczba2 == 0){
		document.getElementById("wynik").innerHTML = "Wpisz podstawę i wykładnik potęgi";
	} 
	else if(liczba2 < 0){
		document.getElementById("wynik").innerHTML = "Wykładnik potęgi musi być większy od zera";
	} else{
	var wynik = liczba1 ** liczba2;
	document.getElementById("wynik").innerHTML = "Wynik działania wynosi: " + wynik;}
}