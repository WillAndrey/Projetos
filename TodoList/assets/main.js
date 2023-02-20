const inputmain = document.getElementById('inputmain')
const firstdiv = document.getElementById('firstdiv')
let valorInput = 0
valorInput = inputmain.value

const obj = { 'qualquer': valorInput}



function funcaoGenerica() {

   // console.log(typeof(valorInput))   = string
   localStorage.setItem(obj, JSON.stringify(obj))

   let j = localStorage.getItem(obj)

   /*let j = localStorage.getItem(obj)
   console.log()*/
   
   var exemplo = document.createElement("div")
   exemplo.innerText += inputmain.value
   exemplo.classList.add('novadiv')
   exemplo.setAttribute('onclick', 'adicionarTagDel()')

   
   firstdiv.appendChild(exemplo)
   
  // document.body.appendChild(exemplo)
 


}


const adicionarTagDel = function() {

  let novadiv = document.querySelector('.novadiv')
 // let valor = novadiv.innerHTML // armazena valor textual da div pai do elemento del.
  //let adicionarDel = document.createElement('del')// cria elemento del.
 return novadiv.classList.add('classeDelete')
 
 //novadiv.appendChild(adicionarDel) 


}



  
 







// Parar criar o <del> na palavra basta usar um função onclick na caixa de texto, quando clicado o del será ativado pro valor do input da caixa.