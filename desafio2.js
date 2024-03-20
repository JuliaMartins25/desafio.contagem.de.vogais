//Desafio de contagem de Vogais, Consoantes e espaços
let vogais = ['a', 'e', 'i', 'o', 'u'];

let consoante = ['b', 'c', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'm', 'n', 'p', 'q', 'r', 's', 't', 'v', 'x', 'y', 'w', 'z'];

let espaços = ['', ''];

let nome = 'Julia de Arruda Martins';

nome = nome.toLowerCase();

let arrayLetras = nome.split('');

let arrayVogais = [];
let arrayConsoantes = [];
let arrayEspaço = [];

for(let i = 0; i < arrayLetras.length; i++){
     if(vogais.includes(arrayLetras[i])){
         arrayVogais.push(arrayLetras[i]);
    } else if(consoante.includes(arrayLetras[i])){
     arrayConsoantes.push(arrayLetras[i]);
    } else {
    arrayEspaço.push(arrayLetras[i]);
    }
}

//exibir vogais
console.log('nome:', nome);
console.log('vogais encontradas:', arrayVogais.toString());
console.log('total de vogais:' + arrayVogais.length);

//exibir consoantes
console.log('consoantes encontrados:', arrayConsoantes.toString());
console.log('total de consoantes:' + arrayConsoantes.length);

//exibir espaços
console.log('total de espaço:' + arrayEspaço.length);
