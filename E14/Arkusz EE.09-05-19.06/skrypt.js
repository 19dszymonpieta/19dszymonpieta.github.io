function generuj(){
			let liczba = parseInt(document.getElementById("pierwsza").value);
			let roznica = parseInt(document.getElementById("roznica").value);
			let liczbaWyrazow = parseInt(document.getElementById("liczbaWyrazow").value);
			let wynik = "Ciąg arytmetyczny zawiera wyrazy: ";
			for(let i = 0; i < liczbaWyrazow ; i++){
				wynik += liczba+", ";
				liczba += roznica;
			}
			document.getElementById("napis").innerHtml = wynik;
}
