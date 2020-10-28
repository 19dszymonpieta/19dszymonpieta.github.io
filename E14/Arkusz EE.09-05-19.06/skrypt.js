function generuj(){
			var liczba = +document.getElementById("pierwsza").value;
			var roznica = +document.getElementById("roznica").value;
			var liczbaWyrazow = +document.getElementById("liczbaWyrazow").value;
			document.getElementById("napis").innerHtml = "Ciąg arytmetyczny zawiera wyrazy: ";
			for(var i = 0; i < liczbaWyrazow ; i++){
				document.getElementById("napis").innerHtml = liczba+", ";
				liczba += roznica;
			}
		}
