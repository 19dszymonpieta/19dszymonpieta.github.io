function oblicz(){
	var a = document.getElementById("a").value;
	document.getElementById("wynik").innerHTML = "Liczba jednolitrowych puszek potrzebnych do pomalowania wynosi " + Math.ceil(a/4) ;
}