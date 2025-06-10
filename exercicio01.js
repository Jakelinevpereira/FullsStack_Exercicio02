const prompt = require('prompt-sync')(); 

function ehDataValida(dia, mes, ano){
    let data = new Date(ano, mes - 1, dia);
    return (
        data.getFullYear() === ano && data.getMonth() === mes - 1 && data.getDate() === dia
    );
}

function ehBissexto(ano) {
    return (ano % 4 === 0 && ano % 100 !== 0) || (ano % 400 === 0);
}

let dia = Number(prompt("Dia: "));
let mes = Number(prompt("Mês: "));
let ano = Number(prompt("Ano: "));

if(ehDataValida(dia, mes, ano)){
    console.log(`${dia}/${mes}/${ano} é uma data VÁLIDA`);
    if (ehBissexto(ano)) {
        console.log(`O ano ${ano} é bissexto.`);
    } else {
        console.log(`O ano ${ano} NÃO é bissexto.`);
    }
} else {
    console.log(`${dia}/${mes}/${ano} é uma data INVÁLIDA`);
}


//Testes

//29/02/2024 → válido e 2024 é bissexto
// 29/02/2023 → inválido porque 2023 não é bissexto
// 29/02/2000 → válido e bissexto (divisível por 400)
// 29/02/1900 → inválido (divisível por 100, mas não por 400)
