const cepInput = document.getElementById("cep")

const exibeResultado = objeto => {
  let endereco = `
    <div>
      <h3>OLHA O ENDEREÇO AE</h3>
      <p>cep: ${objeto.cep}</p>
      <p>logradouro: ${objeto.logradouro}</p>
      <p>complemento: ${objeto.complemento}</p>
      <p>bairro: ${objeto.bairro}</p>
      <p>localidade: ${objeto.localidade}</p>
      <p>uf: ${objeto.uf}</p>
    </div>
  `
  document.getElementById("exibe-endereco").innerHTML = endereco
}

const getData = url => {
  const requisicao = new XMLHttpRequest()
  requisicao.open("GET", url)
  requisicao.onload = function(){
    if(requisicao.status === 200){
      const resposta = JSON.parse(requisicao.responseText)
       exibeResultado(resposta)
    }
  }
  requisicao.send()
}

cepInput.addEventListener("blur", () => {
  const valorDoCampo = cepInput.value
  const resultadoAPI = getData(`https://viacep.com.br/ws/${valorDoCampo}/json/`)
  console.log(resultadoAPI)
})