function generuj(){
			var liczba = parseInt(document.getElementById("pierwsza").value);
			var roznica = parseInt(document.getElementById("roznica").value);
			var liczbaWyrazow = parseInt(document.getElementById("liczbaWyrazow").value);
			var wynik = "Ciąg arytmetyczny zawiera wyrazy: ";
			for(var i = 0; i < liczbaWyrazow ; i++){
				wynik += liczba+", ";
				liczba += roznica;
			}
			document.getElementById("napis").innerHtml = wynik;
		}
