var volks = {
	fabricante: 'VW'
}

var fox = {
	nome: 'Fox',
	placa: 'AAA-1111',
	fabricante: 'GM'
}


console.log('fox.fabricante', fox.fabricante);
Object.setPrototypeOf(fox, volks);
console.log('fox.fabricante', fox.fabricante);
console.log('fox', fox);