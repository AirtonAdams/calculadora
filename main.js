function clearTheArea() {
  let retorno = document.querySelector("#vTotal").innerHTML = ""
}

function calc() {
  let retorno = document.querySelector("#vTotal").innerHTML = ""
  let dVoucher = document.querySelector("#dVoucher");
  let valorDVoucher = dVoucher.value

  let vTaxa = document.querySelector("#vTaxa");
  let valorVTaxa = vTaxa.value

  let nDiarias = document.querySelector("#nDiarias");
  let valorNDiarias = nDiarias.value

  let taxaTurismo = valorVTaxa * valorNDiarias;

  let semTaxa = valorDVoucher - taxaTurismo;
  
  let diaria = semTaxa / 1.03;

  let val = diaria * 100;
  let rounded = Math.floor(val) / 100

  retorno = document.createElement("p")
  let textRetorno = document.createTextNode(`Valor total das diárias: R$ ${rounded.toFixed(2)}`)
  retorno.appendChild(textRetorno)
  let vTotal = document.querySelector("#vTotal")
  vTotal.appendChild(retorno)

  return vTotal
}