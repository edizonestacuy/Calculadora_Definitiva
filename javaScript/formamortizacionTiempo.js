var formulario = document.forms.formula_amortizacionTiempo
var resultado = document.getElementById("dragon-ball")

formulario.renta.oninput = calcularAV
formulario.monto.oninput = calcularAV
formulario.interes.oninput = calcularAV


function calcularAV() {
    let s = parseFloat(formulario.monto.value)
    let r = parseFloat(formulario.renta.value)
    let i = parseFloat((formulario.interes.value)/100)

    let total = ((Math.log10(r))-(Math.log10(r-(i*s))))/(Math.log10(1+i))

    resultado.innerHTML = total.toFixed(2)
}