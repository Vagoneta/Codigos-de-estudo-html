let valor = 5;

switch(valor){
	case 0:
		console.log("O valor é",valor);
		break;
	
	default:
		console.log("O valor não foi encontrado nas condições");
		break;
}

let media = 8

switch(media > 0 && media < 6){
	case true:
		console.log("Aluno Reprovado");
		break;
		
	default:
		console.log("Aluno Aprovado");
		break;
}

let indice = 10;

while(indice < 15){
	console.log("O indice é menor que 15", indice);
	indice++;
}
do{
	console.log("O indice é menor que 15");
}while(indice < 15);

function adicionarPrato(){
	let pedido = document.getElementById("numero-prato");
	let total = document.getElementById("total");
	let saldoAnterior = 0;
	console.log(total);
	
	switch(pedido.value){
		case "1":
			saldoAnterior = total.innerText;
			total.innerHTML = parseFloat(saldoAnterior) + 10;
			break;
		case "2":
			saldoAnterior = total.innerText;
			total.innerHTML = parseFloat(saldoAnterior) + 10;
			break;
		case "3":
			saldoAnterior = total.innerText;
			total.innerHTML = parseFloat(saldoAnterior) + 8;
			break;
		case "4":
			saldoAnterior = total.innerText;
			total.innerHTML = parseFloat(saldoAnterior) + 15;
			break;
		default:
			alert("o valor digitado não corresponde ao prato");
		break;	
	}
}