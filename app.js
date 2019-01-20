var divRoot = document.getElementById('root')

//document.getElementById("root").innerHTML = "message :";

var newUl = document.createElement('ul');
divRoot.appendChild(newUl);


var tableau = ["toto","titi","tutu","tata"];
var tablo = ["jojo",1,"gigi"];

for(var indice=0;indice<tablo.length;indice++){
	var newLi=document.createElement('li');
	newUl.appendChild(newLi).textContent=tablo[indice];
}


var button = document.createElement("input");
button.type = "button";
button.value = "hello";
divRoot.appendChild(button);

function michel (){ 
	var prenon=prompt("quel est ton nom ?")
	if (prenon === null || prenon == "")
		{ alert("error") }

	else{ alert("bonjour je m'appel "+prenon); } }

	button.addEventListener('click', michel);