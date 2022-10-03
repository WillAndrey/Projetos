//total
const visor = document.getElementById('visor')
const main = document.getElementById('main-calc')

// numerais
const one = document.getElementById('one')
const two = document.getElementById('two')
const three = document.getElementById('three')
const four = document.getElementById('four')
const five = document.getElementById('five')
const six = document.getElementById('six')
const seven = document.getElementById('seven')
const eight = document.getElementById('eight')
const nine = document.getElementById('nine')
const zero = document.getElementById('zero')
const dot =  document.getElementById('dot')

// operadores e clear
const divisao = document.getElementById('division')
const adicao = document.getElementById('addition')
const mutiplicacao = document.getElementById('multiplication')
const subtracao = document.getElementById('decrement')
const igual = document.getElementById('equal')
const clear = document.getElementById('clear')


let firstValue 
let op


const functionCalc = function(e) {


            if (e.target == one) {
                
                visor.value += '1'
                
            }if(e.target == two) {
                visor.value += '2'
                
            }if(e.target == three) {
                visor.value += '3'
                
            }if(e.target == four) {
                visor.value += '4'
                
            }if(e.target == five) {
                visor.value += '5'
            
            }if(e.target == six) {
                visor.value += '6'
                
            }if(e.target == seven) {
                visor.value += '7'
            
            }if(e.target == eight) {
                visor.value += '8'
               
                
            }if(e.target == nine) {
                visor.value += '9'
                
            }if(e.target == zero) {
                visor.value += '0'
              
            }if(e.target == dot) {
                visor.value == '.'
            } if(e.target == clear) {
                visor.value = ''
               
            }
            
          

                


                        if(e.target ==  adicao){
                            op = 'adicao'
                            firstValue = visor.value
                            visor.value = null
                        }   
                        if(e.target == subtracao){
                            op = 'subtracao'
                            firstValue = visor.value
                            visor.value = null
                         
                        }if(e.target == divisao){
                            op= 'divisao'
                            firstValue = visor.value
                            visor.value = null
                            
                         
                           
                        }if(e.target == mutiplicacao){
                            op = 'multiplicacao'
                            firstValue = visor.value 
                            visor.value = null
                            
                        }if (e.target == igual && op)  {
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
            