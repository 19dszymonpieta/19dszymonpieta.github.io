function oblicz() {
	let waga = document.getElementById("waga").value;
	let wzrost = document.getElementById("wzrost").value;
	let bmi = waga / (wzrost**2) * 10000;
	document.getElementById("wynik").innerHTML = "Twoje bmi: " + bmi;
}