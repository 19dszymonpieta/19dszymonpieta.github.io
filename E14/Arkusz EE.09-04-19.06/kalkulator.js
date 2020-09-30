function dodawanie(){
  let a = document.getElementById("pole1").value;
  let b = document.getElementById("pole2").value;
  let wynik = parseInt(a) + parseInt(b);
  document.getElementById("wynik").innerHTML = "Wynik dodawania wynosi: " + wynik;
}
function odejmowanie(){
  let a = document.getElementById("pole1").value;
  let b = document.getElementById("pole2").value;
  let wynik = a - b;
  document.getElementById("wynik").innerHTML = "Wynik odejmowania wynosi: " + wynik;
}
function dzielenie(){
  let a = document.getElementById("pole1").value;
  let b = document.getElementById("pole2").value;
  let wynik = a / b;
  if(b == 0){
    document.getElementById("wynik").innerHTML = "Niepoprawne dane";}
  else{
  document.getElementById("wynik").innerHTML = "Wynik dzielenia wynosi: " + wynik;}
}
function mnozenie(){
  let a = document.getElementById("pole1").value;
  let b = document.getElementById("pole2").value;
  let wynik = a * b;
  document.getElementById("wynik").innerHTML = "Wynik mnożenia wynosi: " + wynik;
}
function potegowanie(){
  let a = document.getElementById("pole1").value;
  let b = document.getElementById("pole2").value;
  let wynik = a ** b;
  document.getElementById("wynik").innerHTML = "Wynik potęgowania wynosi: " + wynik;
}
