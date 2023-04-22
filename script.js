const calcular = document.queryCommandValue('onclick')
function calcularIMC() {
  let peso = document.getElementById('peso').value
  let altura = document.getElementById("altura").value
  let resultado = document.querySelector('#calculo')
  calculo = peso / (altura * altura)

  if (calculo <= 18.5) {
    return resultado.innerHTML = `<span style='background-color:#f6bb10'>Seu IMC é: ${calculo.toFixed(2)} 
      <strong>Você está abaixo do peso.</strong></span>`
  } else if (calculo >= 18.5 && calculo <= 24.9) {
    return resultado.innerHTML = `<span style='background-color:#2ac46a'>Seu IMC é: ${calculo.toFixed(2)} 
      <strong>Seu peso está normal.</strong></span>`
  } else if (calculo >= 25 && calculo <= 29.9) {
    return resultado.innerHTML = `<span style='background-color:#ee981c'>Seu IMC é: ${calculo.toFixed(2)} 
      <strong>Você está com Sobrepeso.</strong></span>`
  } else if (calculo >= 30 && calculo <= 34.9) {
    return resultado.innerHTML = `<span style='background-color:#e55220'>Seu IMC é: ${calculo.toFixed(2)} 
      <strong>Você está com Obesidade grau 1.</strong></span>`
  } else if (calculo >= 35 && calculo <= 39.9) {
    return resultado.innerHTML = `<span style='background-color:#e55220'>Seu IMC é: ${calculo.toFixed(2)} 
      <strong>Você está com Obesidade grau 2.</strong></span>`
  } else if (calculo >= 40) {
    return resultado.innerHTML = `<span style='background-color:#e11d23'>Seu IMC é: ${calculo.toFixed(2)} 
      <strong>Você está com Obesidade grau 3.</strong></span>`
  } else {
    return resultado.innerHTML = "<span style='background-color:#a39f96';>Informação inválida, tente novamente.</span>"
  }
} 