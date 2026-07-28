const http = require ('node:http')
const porta = 8002

const server = http.createServer((req, res)=>{
 // o que vam da url?
 res.statusCode = "201"
 // res.setHeader ('Constent-Type', 'text/plain')
 res.setHeader ('Content-Type', 'text/html', 'charset=utf-8')
 res.end ('<h3> HTML Rocks!</H3>')


})

server.listen (porta, ()=> {

    console.log (`Servidor rodando na porta
        http://local""host:${porta}`)
    
})

