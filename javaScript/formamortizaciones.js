var formulario = document.forms.formula_amortizaciones
var resultado = document.getElementById("dragon-ball")

formulario.renta.oninput = calcularAV
formulario.tiempo.oninput = calcularAV
formulario.interes.oninput = calcularAV


function calcularAV() {
    let r = parseFloat(formulario.renta.value)
    let n = parseFloat(formulario.tiempo.value)
    let i = parseFloat((formulario.interes.value)/100)

    let total = ((((1+i)**n)-1)/(((1+i)**n)*i))*r

    resultado.innerHTML = total.toFixed(2)
}