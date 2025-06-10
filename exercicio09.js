//recebe em array e retorna em objeto
function paresParaObjeto(pares) {
  return Object.fromEntries(pares);
}

//recebe em objeto e retona em array
function objetoParaPares(obj) {
  return Object.entries(obj);
}


let pares = [["nome", "Ana"], ["idade", 30]];
let obj = paresParaObjeto(pares);
console.log("Objeto gerado:", obj); 
// Saída: { nome: 'Ana', idade: 30 }

const paresConvertidos = objetoParaPares(obj);
console.log("Pares gerados:", paresConvertidos); 
// Saída: [["nome", "Ana"], ["idade", 30]]