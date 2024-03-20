//Desafio de contagem de Vogais, Consoantes e espaços
let vogais = ['a', 'e', 'i', 'o', 'u'];

let consoante = ['b', 'c', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'm', 'n', 'p', 'q', 'r', 's', 't', 'v', 'x', 'y', 'w', 'z'];

let nome = 'Julia de Arruda Martins';

nome = nome.toLowerCase();

let arrayLetras = nome.split('');

let arrayVogais = [];
let arrayConsoantes = [];
let arrayEspaço = [];

//Vogais
for(let i = 0; i < arrayLetras.length; i++){
    if(vogais.includes(arrayLetras[i])){
        arrayVogais.push(arrayLetras[i]);
    }
}
console.log('nome:', nome );
console.log('vogais encontradas:', arrayVogais.toString());
console.log('total de vogais:' + arrayVogais.length);


//Consoantes
for(let j = 0; j < arrayLetras.length; j++){
    if(consoante.includes(arrayLetras[j])){
        arrayConsoantes.push(arrayLetras[j]);
    }
}

console.log('nome:', nome);
console.log('consoantes encontrados:', arrayConsoantes.toString());
console.log('total de consoantes:' + arrayConsoantes.length);

//espaços
for(let k = 0; k < arrayLetras.length; k++){
    if(nome.includes(arrayLetras[k])){
        arrayEspaço.push(arrayLetras[k]);
    }
}

console.log('nome:', nome);
console.log('total de espaço:' + arrayEspaço.length);
