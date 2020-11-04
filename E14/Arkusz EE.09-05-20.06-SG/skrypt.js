function strzyzenie(){
	var a = document.getElementById("krotkie").value;
	var b = document.getElementById("srednie").value;
	var c = document.getElementById("poldlugie").value;
	var d = document.getElementById("dlugie").value;
	var e = 0;
	if(a.checked == true){
		e = 25;
	}
	if(b.checked == true){
		e = 30;
	}
	if(c.checked == true){
		e = 40;
	}
	if(d.checked == true){
		e = 50;
	}
	document.getElementById("cena").innerHtml = "Cena strzyżenia:" + e;

}
