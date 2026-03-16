//  Objetos são estruturados de tipo chave-valor
// podemos atribuir de forma dinamica, assim como em
// objetos tem indices nomeados
// podemos usar (for of) ou (for in)

const carros = {
    nome: "Camaro", 
    modelo: "xpto cam",
    cores: ["amarelo, preto"]
}

carros.modelo = "Fusca"
carros["Nome"] = "Chev"
console.log(carros.modelo)
console.log (carros.nome)


for (carro in carros){console.log(carro)}