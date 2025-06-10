function nomesOrdenadosPorPreco(produtos) {
  return produtos.sort((a, b) => a.preco - b.preco).map(produto => produto.nome);      
}
// ordena por preço crescente
// extrai apenas os nomes
const produtos = [
  { nome: "Camiseta", preco: 49.9 },
  { nome: "Calça", preco: 89.9 },
  { nome: "Boné", preco: 29.9 },
  { nome: "Tênis", preco: 149.9 }
];

let nomesOrdenados = nomesOrdenadosPorPreco(produtos);
console.log(nomesOrdenados);


