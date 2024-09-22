function analisarFaturamento(faturamentoDiario) {
  const faturamentoFiltrado = faturamentoDiario.filter(valor => valor > 0);

  const total = faturamentoFiltrado.reduce((acrescimo, valor) => acrescimo + valor, 0)
  const mediaAnual =  total / faturamentoFiltrado.length;

  const faturamentoMin = Math.min(...faturamentoFiltrado);
  const faturamentoMax = Math.max(...faturamentoFiltrado);
  const diasAcimaMedia = faturamentoFiltrado.filter(valor => valor > mediaAnual).length;

  return { faturamentoMin, faturamentoMax,  diasAcimaMedia};
}

const valores2024 = [1000, 2000, 0, 3000, 1500, 0, 2500];

console.log(analisarFaturamento(valores2024))