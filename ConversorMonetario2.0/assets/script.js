const btn = document.querySelector('button')
const moedas1 = document.querySelector('#inputmoeda1')
const moedas2 = document.querySelector('#inputmoeda2')
const valor = document.querySelector('#valor')
const resultado = document.querySelector('#resultado')
const datalist1 = document.getElementById('moedas1').options
const datalist2 = document.getElementById('moedas2').options

btn.addEventListener('onchange', retirarOption)
btn.addEventListener('click', conversao)

function retirarOption() {
    for(i =0; i < datalist1.length; i++) {
        if(datalist1[i].value === moedas1.value) {

            
        }
    }

}

console.log(moedas1.value)

function conversao() {
    
    let valor1 = ''
    let valor2 = ''

   


for(i =0; i < datalist1.length; i++) {
    if(datalist1[i].value === moedas1.value) {

        valor1 = datalist1[i].value
        const resultado = valor1.match(/\((.*?)\)/);
        let textoDentrodeParenteses = resultado[1]

        valor1 = textoDentrodeParenteses
        break
    }
}

for(i =0; i < datalist2.length; i++) {
    if(datalist2[i].value === moedas2.value) {
        
        valor2 = datalist2[i].value
        const resultado2 = valor2.match(/\((.*?)\)/)
        let textoDentrodeParenteses2 = resultado2[1]
        valor2 = textoDentrodeParenteses2
        break
    }
}

    const moeda = valor1+'-'+valor2
    const quantia = valor.value
    fetch(`https://economia.awesomeapi.com.br/json/${moeda}/${quantia}`)
    .then( res => res.json())
    .then(e => resultado.innerText = e[0].bid)

    resultado.classList.add('resultado')
}