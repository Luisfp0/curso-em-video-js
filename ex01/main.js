function carregar() {
  var msg = window.document.getElementById('msg')
  var img = window.document.getElementById('imagem')
  var data = new Date()
  var hora = data.getHours()
  msg.innerHTML = `Agora são ${hora} horas.`
  if (hora >= 0 && hora < 12) {
    img.src = './images/manha1.jpg'
    document.body.style.background = '#e2cd9f'
  } if (hora >= 12 && hora < 18) {
    img.src = './images/tarde1.jpg'
    document.body.style.background = '#b9846f'
  } else {
    img.src = './images/noite1.jpg'
    document.body.style.background = '#e2cd9f'
  }
}
