function generuj(){
			var liczba = +document.getElementById("pierwsza").value;
			var roznica = +document.getElementById("roznica").value;
			var liczbaWyrazow = +document.getElementById("liczbaWyrazow").value;
			const wyrazy = [];
			for(var i = 0; i < liczbaWyrazow ; i++){
				wyrazy.push(liczba+", ");
				liczba += roznica;
			}
			document.getElementById("napis").innerHtml = "Ciąg arytmetyczny zawiera wyrazy: " + wyrazy;
		}
