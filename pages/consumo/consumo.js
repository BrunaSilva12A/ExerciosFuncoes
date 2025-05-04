function consumo(distancia, litros){
    return distancia/litros
}

let consumo1 = consumo(500, 35.0)
let consumo2 = consumo(2254, 124.4)
let consumo3 = consumo(4554, 464.6)

console.log (`Consumo 1 = ${consumo1.toFixed(3)}`)
console.log (`Consumo 2 = ${consumo2.toFixed(3)}`)
console.log (`Consumo 3 = ${consumo3.toFixed(3)}`)