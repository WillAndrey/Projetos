const inputmain = document.getElementById('inputmain')
const firstdiv = document.getElementById('firstdiv')
const main = document.getElementById('main')
let valorInput = 0
valorInput = inputmain.value




function criandoLinhas() {

   var novadiv = document.createElement("div")
   novadiv.innerText += inputmain.value

   if (novadiv.innerText === "" || null) {
               return alert("Digite um valor válido!") // return para sair do fluxo da função.
   }
   novadiv.classList.add('novadiv')
   novadiv.setAttribute('onclick', 'adicionarRisco(this)')
   firstdiv.appendChild(novadiv)

      inputmain.value = "" // limpar o valor do input toda vez que for adicionado um novo item.
}

//Marca a linha que deseja remover da lista.
  function adicionarRisco (elemento) {

     elemento.classList.toggle('ClassDelete')

  }



