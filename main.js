function clearTheArea() {
  let retorno = document.querySelector("#vTotal").innerHTML = ""
}

function calc() {
  let dVoucher = document.querySelector("#dVoucher");
  let valorDVoucher = dVoucher.value

  let vTaxa = document.querySelector("#vTaxa");
  let valorVTaxa = vTaxa.value

  let nDiarias = document.querySelector("#nDiarias");
  let valorNDiarias = nDiarias.value

  let taxaTurismo = valorVTaxa * valorNDiarias;

  let semTaxa = valorDVoucher - taxaTurismo;
  
  let imposto = semTaxa / 1.03;

  let diaria = semTaxa - imposto;

  let retorno = document.createElement("p")
  let textRetorno = document.createTextNode(`O valor da diária é R$${diaria}`)
  retorno.appendChild(textRetorno)
  let vTotal = document.querySelector("#vTotal")
  vTotal.appendChild(retorno)

  return vTotal
}