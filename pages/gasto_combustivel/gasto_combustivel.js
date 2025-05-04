function combustivel(tempo, velocidade){
    return (tempo * velocidade)/12
}

let litros1 = combustivel(10, 85)
let litros2= combustivel(2, 92)
let litros3 = combustivel(22, 67)

console.log(`Litros 1 = ${litros1.toFixed(3)}`)
console.log(`Litros 2 = ${litros2.toFixed(3)}`)
console.log(`Litros 3 = ${litros3.toFixed(3)}`)