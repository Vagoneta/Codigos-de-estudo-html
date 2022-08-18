let atribuicao = "atribuição";
console.log(atribuicao);

let x = 30;
let y = 2;

console.log("O operador de adição retorna", x+y);
console.log("O operador de subtração retorna", x-y);
console.log("O operador de multiplicação retorna", x*y);
console.log("O operador de divisão retorna", x/y);

let numero1 = 10;
let numero2 = 3;

console.log("O operador de exponenciação retorna", numero1**numero2);
console.log("O operador de modulo(resto de divisão) retorna", numero1%numero2);
console.log("Numero1 valia", numero1);
numero1++;
console.log("Agora vale", numero1);
console.log("Numero2 valia", numero2);
numero2--;
console.log("Agora vale", numero2);

console.log("Operdaores de comparação");

let primeiroValor = 100;
let segundoValor = "100";

if(primeiroValor == segundoValor){
	console.log("Os valores são iguais", primeiroValor, segundoValor);
}
if(primeiroValor === segundoValor){
	console.log("Os valores são", primeiroValor, segundoValor)
}else{
	console.log("Os valores são iguais mais os tipos são diferentes");
}

let terceiroValor = 200;
let quartoValor = "200";

if(terceiroValor != quartoValor){
	console.log("Os valores são diferentes");
}else{
	console.log("Os valores são iguais");
}

if(terceiroValor !== quartoValor){
	console.log("Os valores são diferentes");
}else{
	console.log("Os valores são iguais");
}
let v1 = 10;
let v2 = 20;
let v3 = 30;
let v4 = 40;

if(v1 > v2){
	console.log(v1, "é maior que", v2);
}else if (v1 < v2){
	console.log(v2, "é menor que, v1");
}else{
	console.log("Os numeros são iguais");
}

if(v4 > v3 && v1 > v2){
	console.log(v4, "é maior que", v3, "e", v2, "é maior que", v1);
}else{
	console.log("A condição não é verdadeira");
}

if(v4 > v3 || v1 > v2){
	console.log(v4, "é maior que", v3, "e", v2, "é maior que", v1);
}else{
	console.log("A condição não é verdadeira");
}

function modoNoturno(){
	let textoH1 = document.getElementById("titulo");
	let botao = document.getElementById("botao");
	
	if(textoH1.innerHTML == "Modo Diurno"){
		document.body.style.backgroundColor = "black";
	
		textoH1.innerHTML = "Modo Noturno";
		textoH1.style.color = "white";
	
		botao.style.backgroundColor = "white";
		botao.style.color = "black";
		botao.innerHTML = "Ativar modo diurno";
	}else{
		document.body.style.backgroundColor = "white";
	
		textoH1.innerHTML = "Modo Diurno";
		textoH1.style.color = "black";
	
		botao.style.backgroundColor = "black";
		botao.style.color = "white";
		botao.innerHTML = "Ativar Modo Noturno";
	}
	
	
}