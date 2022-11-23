let dVoucher = document.querySelector("#dVoucher");
let valorDVoucher = dVoucher.value
let vTaxa = document.querySelector("#vTaxa");
let valorVTaxa = dVoucher.value
let nDiarias = document.querySelector("#nDiarias");
let valorNDiarias = dVoucher.value
function clearTheArea() {
  let retorno = document.querySelector("#vTotal").innerHTML = ""
}

function calc() {
  let dVoucher = document.querySelector("#dVoucher");
  let valorDVoucher = dVoucher.value
  let vTaxa = document.querySelector("#vTaxa");
  let valorVTaxa = dVoucher.value
  let nDiarias = document.querySelector("#nDiarias");
  let valorNDiarias = dVoucher.value
  let taxaTurismo = valorVTaxa * valorNDiarias;
  let diaria = (valorDVoucher / 1.03) - taxaTurismo;

  let retorno = document.createElement("p")
  let textRetorno = document.createTextNode(`O valor da diária é R$${diaria}`)
  retorno.appendChild(textRetorno)
  let vTotal = document.querySelector("#vTotal")
  vTotal.appendChild(retorno)

  return vTotal
}