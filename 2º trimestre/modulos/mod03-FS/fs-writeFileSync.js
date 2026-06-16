const fs = require('fs')
const path = require('path')
const frasePreferida = `Teste atividade`
const log = `Atenção, você está offline...`

try{
const arquivo = path.resolve(__dirname, 'frase.md')
fs.writeFileSync(arquivo, frasePreferida, 'utf-8')

// Reescreve totalmente o conteúdo
fs.writeFileSync(arquivo, log, 'utf-8')

} catch (error) {
    console.log(error.message)
}