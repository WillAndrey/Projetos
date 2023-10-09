const main = document.getElementById('conteudoPrincipal');
const divs = document.querySelectorAll('.opa')// nodelist
const randomIndex = Math.floor(Math.random() * divs.length)

/*
let one = document.getElementById('one')
let two = document.getElementById('two')
let three = document.getElementById('three')
let four = document.getElementById('four')
let five = document.getElementById('five')
let six = document.getElementById('six')
let seven = document.getElementById('seven')
let eight = document.getElementById('eight')
let nine = document.getElementById('nine')
*/



main.addEventListener('click', function x(event) {
    let marcar = event.target
       if(marcar.innerText == '')  {
           marcar.innerText = 'X'
         
            if(divs[randomIndex].textContent == 'X' )                 {
                  console.log('nao')
            }else {
             setInterval(function() {
               maquina()
             }, 1800)
               
            }   
         
            
        }
   })

function maquina() {

   divs[randomIndex].textContent = 'O'
}

