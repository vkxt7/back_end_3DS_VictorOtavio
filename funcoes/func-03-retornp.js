function sobraDoSalario(meuSalario){
    const contaDeLuz = 150.0
    const aluguel = 1400.0
    const resto = meuSalario - (contaDeLuz+aluguel)
    return `O que restou no fim do mês ${resto}`
}

const minhasSobras = sobraDoSalario (1700.00)

// Teste - experimento

console.log (sobraDoSalario(10000.0))

console.log (meuSalario (5000.0))
