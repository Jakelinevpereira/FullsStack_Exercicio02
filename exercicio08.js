let vendas = [
  { cliente: "Ana", total: 100 },
  { cliente: "João", total: 50 },
  { cliente: "Ana", total: 150 },
  { cliente: "Maria", total: 200 },
  { cliente: "João", total: 20 },
  { cliente: "Ana", total: 89 },
  { cliente: "Maria", total: 75 }
];

let resultado = somarVendasPorCliente(vendas);


function somarVendasPorCliente(vendas) {
  return vendas.reduce((acumulador, venda) => {
    let { cliente, total } = venda;
    acumulador[cliente] = (acumulador[cliente] || 0) + total;
    return acumulador;
  }, {});
}

console.log(resultado);