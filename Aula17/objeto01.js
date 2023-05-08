let amigo = {
  nome: 'jose',
  sexo: 'masculino',
  peso: 90,
  engordar(p) {
    this.peso += p
  }
}

amigo.engordar(4)
console.log(amigo.peso)