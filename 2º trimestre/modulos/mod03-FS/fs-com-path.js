// importar PATH E FS
// path possiu (Join para juntar caminhos e Resolve
// para deduzir subdiretórios e S.O.)
const fs = require('fs')
const path = require ('path')

// Salvar o Caminho em um variavel
// const caminho = path.join(__dirname, 'README.md')// Markdown, text
const caminho = path.resolve(__dirname, 'README.md')// Abrir, ler, deletar, editar
const arquivo = fs.readFileSync(caminho, 'utf-8')

console.log(arquivo)