export function Nomefilmes (nomeFilme, generoFilme) {
return `O Filme alugado foi: ${nomeFilme}, do genero ${generoFilme}`
}

export function dataFilme (nomeFilme, dataEntrega){
 return `O Filme ${nomeFilme} tem: ${dataEntrega} dias para ser entregue`
}

export function precoFilme (nomeFilme, preco){
  return `O filme ${nomeFilme} é R$${preco} por 1 mês`
}