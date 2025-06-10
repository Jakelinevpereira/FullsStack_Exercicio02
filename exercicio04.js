function fatorial(n) {
    if (n < 0) {
        throw new Error("Fatorial não definido para n < 0");
    }
    if (n === 0) {
        return 1; // Caso base: fatorial de 0 é 1
    }
    return n * fatorial(n - 1); // Chamada recursiva
}

//testes
console.log(fatorial(5));  // Saída: 120
console.log(fatorial(3));  // Saída: 6
//console.log(fatorial(-1)); // Erro: Fatorial não definido para n < 0
