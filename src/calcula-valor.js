function calcularMontante (capital, taxa, periodo) {
  let montante = capital * Math.pow(1 + taxa, periodo - 1)
  montante = arredondar(montante)
  return montante
}

function arredondar (valor) {
  const precisao = 100 // duas casas decimais 10^2
  const arredondado = Math.round((valor + Number.EPSILON) * precisao) / precisao
  return arredondado
}

module.exports = {
  calcularMontante,
  arredondar
}

