document.write("</p>" + "E para Excelente");
document.write("</p>" + "V para Muito Bom");
document.write("</p>" + "G para Bom");
document.write("</p>" + "A para Razo�vel");
document.write("</p>" + "R para Reprovado");

var letra = prompt("Digite uma letra");

letra = letra.toLowerCase();

if (letra == "e"){
	alert("A nota do aluno � excelente");
} else
if (letra == "v"){
	alert("A nota do aluno � muito boa");
} else
if (letra == "g"){
	alert("A nota do aluno � boa");
} else
if (letra == "a"){
	alert("A nota do aluno � razo�vel");
} else
if (letra == "r"){
	alert("O aluno est� reprovado");
} else {
	alert("Letra inv�lida");
}