function memoize(fn) {
  let cache = {};

  return function (...args) {
    let chave = JSON.stringify(args); // cria chave baseada nos argumentos
    if (cache[chave] !== undefined) {
      console.log("Retornando do cache:", chave);
      return cache[chave];
    }
    let resultado = fn(...args);
    cache[chave] = resultado;
    return resultado;
  };
}

function fibonacci(n) {
  if (n < 2) return n;
  return fibonacci(n - 1) + fibonacci(n - 2);
}

// Memoizando
let fibonacciMemo = memoize(fibonacci);

// Testando
console.log(fibonacciMemo(10)); // Primeira vez: lento
console.log(fibonacciMemo(35)); // Segunda vez: instantâneo (cache)