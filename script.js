const mensagem = function (Olá){
    console.log(Olá)

}
mensagem("Olá")


let luan = function (Luan) {
 console.log(Luan)   
}
luan("Luan")

const info = function (nome,idade,estilomusical){
    console.log(nome)
    console.log(idade)
    console.log(estilomusical)
}

info("Luan","23","rock")




let n1
let n2

function vezes(n1,n2){
    return n1 * n2
   }
console.log (vezes(3,3))




let pessoa = "Luan"
 let mes = "junho"

 if (mes == "janeiro" || mes == "junho" || mes == "fevereiro" ) {
   console.log(` ${pessoa} faz aniversário no mês de ${mes}`)
 } else{
   console.log(`${pessoa} faz aniversário em ${mes}`)
 }