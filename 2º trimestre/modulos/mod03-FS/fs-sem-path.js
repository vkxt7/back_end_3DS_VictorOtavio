const fs = require('fs')

// console.log(fs)

// const arquivo = fs.readFileSync('./README.md', 'utf-8')
// /workspaces/back_end_3DS_VictorOtavio/2º trimestre/modulos/mod03-FS/README.md
// 2º trimestre/modulos/mod03-FS/README.md

const arquivoFinal = fs.readFileSync (__dirname + "/README.md", 'utf-8')
console.log(arquivoFinal)
