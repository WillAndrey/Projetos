const inputmain = document.getElementById('inputmain')
const firstdiv = document.getElementById('firstdiv')
let valorInput = 0
valorInput = inputmain.value




function criandoLinhas() {

   var exemplo = document.createElement("div")
   exemplo.innerText += inputmain.value
   exemplo.classList.add('novadiv')
   exemplo.setAttribute('onclick', 'adicionarRisco(this)')

   
   firstdiv.appendChild(exemplo)
   


}

//Marca a linha que deseja remover da lista.
  function adicionarRisco (elemento) {

     elemento.classList.toggle('ClassDelete')

  }
  
  



