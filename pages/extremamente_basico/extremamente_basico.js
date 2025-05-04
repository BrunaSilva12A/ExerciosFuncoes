/* Crie uma função que recebe dois valores inteiros como parametros Efetue a soma dos dois valores e retorne o resultado. Imprima os resultados dos três testes conforme exemplo apresentado abaixo. Não apresente mensagem alguma além daquilo que está sendo especificado.*/

function somar(valor1, valor2){
    return valor1 + valor2
}

let teste1 = somar(10, 9)
let teste2 = somar(-10, 4)
let teste3 = somar(15, -7)

console.log(` X1 = ${teste1}\n X2 = ${teste2}\n X3 = ${teste3}`)