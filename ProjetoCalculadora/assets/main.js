//total
const visor = document.getElementById('visor')
const main = document.getElementById('main-calc')

// numerais
const numerais = document.querySelectorAll('.numerais')

// operadores aritmeticos
const operadores = document.querySelectorAll('.operadores')

//clear
const clear = document.getElementById('clear')

//igual
const igual = document.getElementById('equal');

const dot = document.getElementById('dot')

let firstValue = ''
let op = ''


const functionCalc = function(event) {


   numerais.forEach(function(elemento) {
        if(event.target == elemento) {
            visor.value += elemento.value //funcionou
        }if (event.target == clear) {
            visor.value = ''
        }if(event.target == dot) {
            visor.value += '.'
        }

   })

   operadores.forEach(function(elemento){
    if (event.target == elemento) {
        if (elemento.value === 'adicao') {
          op = 'adicao'
        } else if (elemento.value === 'subtracao') {
          op = 'subtracao'
        } else if (elemento.value === 'multiplicacao') {
          op = 'multiplicacao'
        } else if (elemento.value === 'divisao') {
          op = 'divisao'
        }
        firstValue = visor.value
        visor.value = null
      }
   })     

   if (event.target == igual && op)  { //verificação caso o item clicado foi '=' e se a algum operador foi utilizado.
    if (op == 'adicao') {
     visor.value = Number(firstValue) + Number(visor.value)
     firstValue = visor.value
     op = ''
    } else if(op == 'multiplicacao'){
     visor.value = Number(firstValue) * Number(visor.value)
     firstValue = visor.value
     op = ''
    } else if(op == 'divisao') {
     visor.value = Number(firstValue) / Number(visor.value)
     firstValue = visor.value
     op = ''
    }else if(op == 'subtracao') {
     visor.value = Number(firstValue) - Number(visor.value)
     firstValue = visor.value
     op = ''
    }
}                 

                        
}
            