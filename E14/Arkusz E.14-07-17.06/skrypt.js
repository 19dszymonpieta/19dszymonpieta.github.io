function oblicz(){
	var metraz = document.getElementById("metraz").value;
	var pokoje = document.getElementById("pokoje").value;
	var a = document.getElementById("kafelki");
	var kwota = 0;
	kwota += 4000 * metraz;
	kwota += 1000 * pokoje;
	if(kafelki == a.checked){
		kwota += 2000;
	}
	document.getElementById("wynik").innerHTML = "Koszt mieszkania: " + kwota + " zł"
}