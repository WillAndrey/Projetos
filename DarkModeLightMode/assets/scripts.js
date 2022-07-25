//Selecione os elementos: h1, button, footer e body
//Se os elementos possuirem a classe dark-mode,
// modifique seus estilos. Caso contrário, volte os estilos para o original




function swapMode() {
   
    var pegaStatus = document.getElementById('page-title') //h1
    var pegaBotao = document.getElementById('mode-selector') // button
    


    const selecionar = function (seletor) {
      document.querySelectorAll(seletor).forEach(function (e) { 
         e.classList.toggle('dark-mode') 
         //p/ dark mode 
         if (e == pegaStatus && e.classList.contains('dark-mode')){
                   pegaStatus.innerHTML = "Dark Mode ON"
         }if(e == pegaBotao && e.classList.contains('dark-mode')){
                    pegaBotao.innerHTML = "Light Mode"
         }
         //p/ lightmode
         if(e == pegaStatus && e.classList.contains("dark-mode") == false) {
                    pegaStatus.innerHTML = "Light Mode ON"
               
         }if(e == pegaBotao && e.classList.contains('dark-mode') == false){
                    pegaBotao.innerHTML = "Dark Mode"
            
}


        })

      }

      selecionar('body, #page-title, #mode-selector, footer')


      
      

   
   



}


