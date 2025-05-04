let pi = 3.14159

function volume(raio){
    return ((4/3.0) * pi * Math.pow(raio, 3))
}

let raio1 = volume(3)
let raio2 = volume(15)
let raio3 = volume(1523)

console.log(`Raio 1 = ${raio1.toFixed(3)}`)
console.log(`Raio 2 = ${raio2.toFixed(3)}`)
console.log(`Raio 3 = ${raio3.toFixed(3)}`)