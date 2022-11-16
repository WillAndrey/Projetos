const rightarrow = document.getElementById('rightarrow')
const imgquiz = document.querySelector('.imgquiz')
const option = document.getElementsByName('option')
let yes = 0
let no = 0
const numeros = document.getElementById('lt')
const questions = document.getElementById('questions')
const paragrafo = document.getElementById('paragrafo')


function recebeClick() {

    for(let i in option) {
        if (option[i].checked) {
            option[i].value == 'Sim' ? yes++ : no++
            imgquiz.src = "../assets/imgs/grenade.jpg"
            imgquiz.classList.add('imgquiz')      
            paragrafo.innerHTML = "Você gostaria que os personagens pudessem atirar granadas?"
            numeros.className = 'teste';

        }

    }

}