const http = require ('node:http')
const porta = 8002

const server = http.createServer((req, res)=>{
    const novaUrl = new URL (req.url, `http://${req.headers.host}`)
    const caminhoUrl = novaUrl.pathname
    if (caminhoUrl === '/'){
        // o que vem da url?
        res.statusCode = '200'
        res.setHeader ('Content-Type', 'text/html; charset=utf-8')
        return res.end (FileSystem.readFilesync (home, 'uft-8')) // chama url
    }

    if (caminhoUrl === '/sobre'){
        // o que vem da url?
        res.statusCode = '200'
        res.setHeader ('Content-Type', 'text/html; charset=utf-8')
        return res.end (FileSystem.readFilesync (sobre, 'uft-8')) // chama url
    }
    else {
res.statusCode = "401"
 res.setHeader ('Content-Type', 'text/html; charset=utf-8')
 res.end ('<h3> 401 Não autorizado</H3>')

    }

})

server.listen (porta, ()=> {

    console.log (`Servidor rodando na porta
        http://local""host:${porta}`)
    
})

