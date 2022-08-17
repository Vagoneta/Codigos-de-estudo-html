let marca1 = "vw";
let marca2 = "GM";
let marca3 = "fiat";

console.log(marca1, marca2, marca3);

let vw = ["Gol", "Jeta", "Polo", "Santana", "Golf"];
let GM = ["ONIX", "CRUZE", "SPIN", "TRACKER", "TRAILBLAZER"];
let fiat = ["500e", "Argo", "Cronos", "Ducato", "Fiorino"];
let fruta = ["maca", "laranja", "uva", "manga", "limao", "banana", "tangerina", "pera", "acerola", "caja"]
let animais = ["aranha", "girafa", "cavalo", "gaviao", "leao", "jacare", "jaguatirica", "capivara", "peixe", "papagaio"]
let lista = document.getElementById("lista");

console.log(vw, GM, fiat);

if(vw[3] == "jeta"){
	console.log("Meu carro é um ", vw[3]);
}else{
	console.log("Estou liso, não tenho carro!");
}

if(GM[4] == "TRAILBLAZER"){
	console.log("Meu carro é um ", GM[4]);
}else{
	console.log("Estou liso, não tenho carro!");
}

for(i = 0; i < 10; i++){
	console.log(i);
}

for (i = 0; i < vw.length; i++){
	if(vw[i] == "Polo"){
		console.log("Achei meu carro na posição ", i);
	}else{
		console.log("Esse não é meu carro! ", vw[i]);
	}
}

for (i = 0; i < fruta.length; i++){
	if(fruta[i]== "limao"){
		console.log("Eu quero essa fruta na posição ", i);
	}else{
		console.log("Eu não quero essa(e) ", fruta[i]);
	}
}

for(i = 0; i < animais.length; i++){
	if(i % 2 > 0){
		lista.innerHTML += "<li>" + animais[i] + "</li>";
	}
}


