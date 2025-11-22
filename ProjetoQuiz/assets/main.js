const rightarrow = document.getElementById('rightarrow')
const option = document.getElementsByName('option')
const questions1 = [ 
{ question: 'Você gostaria que os personagens pudessem atirar granadas?', imgquiz:'..assets/imgs/grenade.jpg'},
{question: 'Os personagens teriam poderes que poderiam ser lançados?', imgquiz:'..assets/imgs/superpoderes.jpg'},
{question: 'Cada personagem seria humano?', imgquiz:'..assets/imgs/human.jpg'},
{question: 'Existiriam protagonistas definidos na lore do jogo?', imgquiz:'..assets/imgs/protagonist.jpg'}
]
const imgquiz = document.querySelector('imgquiz')
const numeros = document.getElementsByName('numeros')
const list = document.getElementById('lt')
const questions = document.getElementById('questions')
let contClick = 0
let yes = 0
let no = 0

numeros[0].className = 'teste'
if (option[0].checked && option[0].value == 'Sim' ) {
    yes++

 }if(option[1].checked && option[1].value == 'Não') {
     no++
 }

 /*1º Função de perguntar: para apresentar perguntas e receber respostas do usuário.*/ 

function  perguntaseRespostas(e) {
       /* contClick++*/
                  for(let i=0; questions1[i] < 5; i++) {
                    numeros[i].className = 'teste'
                    console.log(questions[i])
    
                   // imgquiz.classList.add('imgquiz') 
                    questions.innerHTML = questions[i].question    
                    imgquiz.src = questions[i].imgquiz

                    if (option[0].checked && option[0].value == 'Sim' ) {
                        yes++
                             
                     }if(option[1].checked && option[1].value == 'Não') {
                         no++
                     }
                }//for                     
                        
}
                

            
            

        




