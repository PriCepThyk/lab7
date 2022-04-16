
function func() {
	var f;
	var h;
	var d = Number(document.getElementById("num1").value);
	var n = Number(document.getElementById("num2").value);
	if( n != d ){
		f = Math.sin(n+8*d)+((5-Math.log(n-d))/(d-n));
		h = Math.exp(2*n) + 4*d*Math.sqrt(3+n);
		alert("f = " + f);
		alert("h = " + h);
	}
	else
		alert("Ділення на 0");
}