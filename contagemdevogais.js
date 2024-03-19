//Desafio contagem de vogais

let nome = "julia";
let separado = nome.split("");

//declarei um array com as vogais
let vogais = ['a', 'e', 'i', 'o', 'u'];

//metodo de filtrar as vogais
let quantasvogais = separado.filter(letras => vogais.includes(letras));
console.log("A quantidade de vogais é:" + quantasvogais.length);
console.log(quantasvogais);