function debounce(funcao, delay) {
  let timer;
  return function (...args) {
    clearTimeout(timer);
    timer = setTimeout(() => {
      funcao.apply(this, args);
    }, delay);
  };
}

function mostrarNome(nome) {
  console.log(`Olá, ${nome}!`);
}

const mostrarComDebounce = debounce(mostrarNome, 1000);

// Simulando digitação: o usuário vai "digitando" aos poucos
mostrarComDebounce("J");
// Digita mais um pouco
setTimeout(() => mostrarComDebounce("Ja"), 300);
setTimeout(() => mostrarComDebounce("Jak"), 600);
setTimeout(() => mostrarComDebounce("Jake"), 900);
setTimeout(() => mostrarComDebounce("Jakeline"), 1200);

// Só o último será exibido após 1 segundo da última digitação
