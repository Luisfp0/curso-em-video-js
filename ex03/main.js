function contar() {
  var valorInicial = Number(document.querySelector('.comeco').value)
  var valorFinal = Number(document.querySelector('.final').value)
  var displayResult = document.querySelector('.display-text')
  for (i = valorInicial; i <= valorFinal; i++) {
    displayResult.textContent = "Contando:"
    document.querySelector('.display-contagem').textContent += `${i} -  `
  }

}

