const visor = document.getElementById('visor')
const main = document.getElementById('main-calc')
const numerais = document.querySelectorAll('.numerais')
const operadores = document.querySelectorAll('.operadores')
const clear = document.getElementById('clear')
const igual = document.getElementById('equal');
const dot = document.getElementById('dot')
let op = []
let elementoClicado = ""

main.addEventListener("click", listenerClick)
//main.addEventListener("keydown", listenerKeydown)

 
function listenerClick(event){
 
        if(event.target.classList.contains("numerais")) {
            visor.value += event.target.value
            elementoClicado += event.target.value
            
        } 
        
        if (event.target.classList.contains('clear')) {
                elementoClicado = ""
                op.length = 0
                visor.value = ''
        }

        if(event.target.classList.contains('operadores')) {
           
          visor.value = ''
          op.push(elementoClicado)
          op.push(event.target.value)
          elementoClicado = ""
          console.log(op)
        }
 
        if (event.target.classList.contains('igual')){
                op.push(elementoClicado)
                let expressao =  op.join("")
                const resultado = Function(`return ${expressao}`)()
                op = [resultado]
                visor.value = resultado
        }

}

//function listenerKeydown(event) {}


    

