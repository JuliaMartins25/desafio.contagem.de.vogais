//declaro variavel de numeros para array
let numeros = [3, 1, 7, 2, 5, 8, 4, 9, 6, 10];

//declaro array vazio para separar os pares dos impares
let pares = [];
let impares = [];

//estrutura de repetição
for (let i = 0; i < numeros.length; i++){
    if (numeros[i] % 2 == 0) {
    pares.push(numeros[i]);
    } else {
    impares.push(numeros[i]);
    }
}

let paresDecrescente = pares.sort((a, b) => b - a);
let imparesCrescente = impares.sort();


//exibir resultados
console.log('numeros', numeros);
console.log('pares em ordem decrescente:', paresDecrescente);
console.log('impares em ordem crescente:', imparesCrescente);
