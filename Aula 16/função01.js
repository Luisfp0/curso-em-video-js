

function parImpar(n) {
  var screen = document.querySelector('.display')
  if (n % 2 == 0) {
    return 'Par'
  } else {
    return 'Impar'
  }
}

var result = parImpar(4)
console.log(result)

