let frase = "olá olá mundo mundo";
let lista = frase.split(" ");

let palavrasUnicas = [];

for(let i = 0; i < lista.length; i++){
    if(!palavrasUnicas.includes(lista[i])){
        palavrasUnicas.push(lista[i]);
    }
}

console.log(palavrasUnicas);
console.log(lista);