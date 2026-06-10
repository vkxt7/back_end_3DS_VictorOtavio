// importar PATH E FS
// path possiu (Join para juntar caminhos e Resolve
// para deduzir subdiretórios e S.O.)

const fs = require('fs')
const path = require('path')
const chalk = require('chalk').default

// Salvar o Caminho em um variavel
// const caminho = path.join(__dirname, 'README.md')// Markdown, text
try {

    const caminho = path.resolve(__dirname, 'README.md')// Abrir, ler, deletar, editar
    const arquivo = fs.readFileSync(caminho, 'utf-8')
    console.log(chalk.green('Carregado com sucesso'))

    console.log(arquivo)
} catch (erro) {

   console.log(chalk.yellow('Erro ao carregar o arquivo. Tente novamente mais tarde'))
    console.log(chalk.red ('Erro intenso de leitura de arquivo: \n', erro.message))
}

