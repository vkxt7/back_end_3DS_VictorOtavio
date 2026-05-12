// Crie um array que contenha 3 frutas
// Adicione 4 frutas com o metado .push (<Nome fruta>)
// Remova 1 fruta com .pop()
// Faça um loop for que remova todas as frutas
// Verifique que todas as frutas foram removidas 
// Imprima "Nenhuma fruta encontrada"

const frutas = ['Jaca', 'Manga', 'Maracujá']
console.log (frutas)
frutas.push ('Pessego')
frutas.push ('Morango')
frutas.push ('Uva')
frutas.push ('Banana')
console.log (frutas)
frutas.pop (frutas)
console.log (frutas)
 console.log (frutas.length)
 while (frutas.length > 0) {
    frutas.pop()
    if (frutas.length == 0) {
        console.log ("Não há frutas para vender!!!")
    }
    
 }

  console.log (frutas)
  console.log (frutas.length)
 
