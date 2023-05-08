function contar() {
  document.querySelector('.display-contagem').textContent = ''
  valorInicial = ''
  valorFinal = ''
  var valorInicial = Number(document.querySelector('.comeco').value)
  var valorFinal = Number(document.querySelector('.final').value)
  var passo = Number(document.querySelector('.passo').value)
  var displayResult = document.querySelector('.display-text')
  for (i = valorInicial; i <= valorFinal; i += passo) {
    displayResult.textContent = "Contando:"
    document.querySelector('.display-contagem').textContent += `${i}   `
  }
}