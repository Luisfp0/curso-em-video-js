function btn() {
  var number = Number(document.querySelector('.num').value)
  var screen = document.querySelector('.seltab')
  screen.innerHTML = ''
  for (i = 0; i <= 10; i++) {
    var result = number * i
    let item = document.createElement('option')
    item.text = `${number} * ${i} = ${result}`
    screen.appendChild(item)
  }
}