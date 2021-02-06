function dodawanie(){
	var liczba1 = +document.getElementById("a").value;
	var liczba2 = +document.getElementById("b").value;
	if(liczba1 == 0 || liczba2 == 0){
		document.getElementById("wynik").innerHTML = "Podaj prawidłowe dane";
	} else{
	var wynik = liczba1 + liczba2;
	document.getElementById("wynik").innerHTML = wynik;}
	}
function odejmowanie(){
	var liczba1 = document.getElementById("a").value;
	var liczba2 = document.getElementById("b").value;
	if(liczba1 == 0 || liczba2 == 0){
		document.getElementById("wynik").innerHTML = "Podaj prawidłowe dane";
	} else{
	var wynik = liczba1 - liczba2;
	document.getElementById("wynik").innerHTML = wynik;}
	}
function mnozenie(){
	var liczba1 = document.getElementById("a").value;
	var liczba2 = document.getElementById("b").value;
	if(liczba1 == 0 || liczba2 == 0){
		document.getElementById("wynik").innerHTML = "Podaj prawidłowe dane";
	} else{
	var wynik = liczba1 * liczba2;
	document.getElementById("wynik").innerHTML = wynik;}
	}
function dzielenie(){
	var liczba1 = document.getElementById("a").value;
	var liczba2 = document.getElementById("b").value;
	if(liczba1 == 0 || liczba2 == 0){
		document.getElementById("wynik").innerHTML = "Podaj prawidłowe dane";
	} else{
	var wynik = liczba1 / liczba2
	liczba2 == 0 ? document.getElementById("wynik").innerHTML = "Nie wolno dzielić przez zero" : document.getElementById("wynik").innerHTML = wynik;;
	document.getElementById("wynik").innerHTML = wynik;}
	}