const calcular = document.queryCommandValue('onclick')
function calcularIMC() {
  var peso = document.getElementById('peso').value
  var altura = document.getElementById("altura").value
  var resultado = document.querySelector('#res')
  res = peso / (altura * altura)

  if (res <= 18.5) {
    return resultado.innerHTML = `<span style='background-color:#f6bb10'>Seu IMC é: ${res.toFixed(2)} 
      <strong>Você está abaixo do peso.</strong></span>`
  } else if (res >= 18.5 && res <= 24.9) {
    return resultado.innerHTML = `<span style='background-color:#2ac46a'>Seu IMC é: ${res.toFixed(2)} 
      <strong>Seu peso está normal.</strong></span>`
  } else if (res >= 25 && res <= 29.9) {
    return resultado.innerHTML = `<span style='background-color:#ee981c'>Seu IMC é: ${res.toFixed(2)} 
      <strong>Você está com Sobrepeso.</strong></span>`
  } else if (res >= 30 && res <= 34.9) {
    return resultado.innerHTML = `<span style='background-color:#e55220'>Seu IMC é: ${res.toFixed(2)} 
      <strong>Você está com Obesidade grau 1.</strong></span>`
  } else if (res >= 35 && res <= 39.9) {
    return resultado.innerHTML = `<span style='background-color:#e55220'>Seu IMC é: ${res.toFixed(2)} 
      <strong>Você está com Obesidade grau 2.</strong></span>`
  } else if (res >= 40) {
    return resultado.innerHTML = `<span style='background-color:#e11d23'>Seu IMC é: ${res.toFixed(2)} 
      <strong>Você está com Obesidade grau 3.</strong></span>`
  } else {
    return resultado.innerHTML = "<span style='background-color:#a39f96';>Informação inválida, tente novamente.</span>"
  }
} 