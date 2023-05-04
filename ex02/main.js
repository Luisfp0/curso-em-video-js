function verificacao() {
  const anoInput = document.querySelector('.ano')
  var ano = anoInput.value
  var idade = Number(2023 - ano)
  var checkBoxMasculino = document.getElementById('masculino')
  var checkBoxFeminino = document.getElementById('feminino')
  if (ano > 2023) {
    window.alert("Você nasceu no futuro ?")
    window.location.reload(true);
  }
  if (checkBoxMasculino.checked) {
    if (idade <= 12) {
      document.querySelector('.resp').textContent = `Você é do sexo masculino, criança e tem ${idade} anos.`
    } if (idade > 12 && idade < 18) {
      document.querySelector('.resp').textContent = `Você é do sexo masculino, adolescente e tem ${idade} anos.`
    } if (idade > 18 && idade < 65) {
      document.querySelector('.resp').textContent = `Você é do sexo masculino, adulto e tem ${idade} anos.`
    } if (idade > 65) {
      document.querySelector('.resp').textContent = `Você é do sexo masculino, idoso e tem ${idade} anos.`
    }
  }
  if (checkBoxFeminino.checked) {
    if (idade <= 12) {
      document.querySelector('.resp').textContent = `Você é do sexo feminino, criança e tem ${idade} anos.`
    } if (idade > 12 && idade < 18) {
      document.querySelector('.resp').textContent = `Você é do sexo feminino, adolescente e tem ${idade} anos.`
    } if (idade > 18 && idade < 65) {
      document.querySelector('.resp').textContent = `Você é do sexo feminino, adulta e tem ${idade} anos.`
    } if (idade > 65) {
      document.querySelector('.resp').textContent = `Você é do sexo feminino, idosa e tem ${idade} anos.`
    }
  }
}