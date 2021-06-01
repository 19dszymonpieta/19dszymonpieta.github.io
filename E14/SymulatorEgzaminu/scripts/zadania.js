function zamknij() {
  document.getElementById("zad1").style.display = "none";
  document.getElementById("zad2").style.display = "none";
  document.getElementById("zad3").style.display = "none";
  document.getElementById("zad4").style.display = "none";
  document.getElementById("zad5").style.display = "none";
}

function zadanie1() {
  zamknij()
  document.getElementById("zad1").style.display = "block";
}

function zadanie2() {
  zamknij()
  document.getElementById("zad2").style.display = "block";
}

function zadanie3() {
  zamknij()
  document.getElementById("zad3").style.display = "block";
}

function zadanie4() {
  zamknij()
  document.getElementById("zad4").style.display = "block";
}

function zadanie5() {
  zamknij()
  document.getElementById("zad5").style.display = "block";
}

function wynik() {
  var wynik = 0;
  var odp = document.getElementById("zad1a");
  var punkty = 0;
  if (odp.checked == true) {
    punkty++;
  }
  odp = document.getElementById("zad2b")
  if (odp.checked == true) {
    punkty++;
  }
  odp = document.getElementById("zad3a")
  if (odp.checked == true) {
    punkty++;
  }
  odp = document.getElementById("zad4d")
  if (odp.checked == true) {
    punkty++;
  }
  odp = document.getElementById("zad5a")
  if (odp.checked == true) {
    punkty++;
  }
  wynik = 100 * punkty / 5;
  localStorage.setItem("wynik", wynik);
  location.href = "wynik.html";
}
