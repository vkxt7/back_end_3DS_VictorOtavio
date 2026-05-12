// module.exports = function multiplicaPorDois(n1,n2){
// const res = `resultado ${n1 * n2}`
// return res
// }

function multiplicaPorDois(n1,n2){
const res = `resultado ${n1 * n2}`
return res
}

function DividePorDois(n1,n2){
const res = `resultado ${n1 / n2}`
return res
}

function SomaDois(n1,n2){
const res = `resultado ${n1 + n2}`
return res
}



function SubtraiaPorDois(n1,n2){
const res = `resultado ${n1 - n2}`
return res
}

module.exports = {

    DividePorDois,
    multiplicaPorDois,
    SomaDois,
    SubtraiaPorDois,

}