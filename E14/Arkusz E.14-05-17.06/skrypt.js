function oblicz(){
	var a = document.getElementById("a").value;
	var b = document.getElementById("b").value;
	var pc = 2 * (a * 2.7) + 2 * (b * 2.7);
	var koszt = pc * 8;
	document.getElementById("pc").innerHTML = "Powierzchnia całkowita ścian: " + pc;
	document.getElementById("koszt").innerHTML = "Koszt malowania: " + koszt + " zł";
	
}