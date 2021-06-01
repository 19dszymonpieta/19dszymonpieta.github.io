window.onload = function () {
  var wynik = localStorage.getItem("wynik");
  document.getElementById("wynik").innerHTML = wynik + " %";
}
