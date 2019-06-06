const cepInput = document.getElementById("cep")
const logradouroInput = document.getElementById("logradouro")
const complementoInput = document.getElementById("complemento")
const bairroInput = document.getElementById("bairro")
const localidadeInput = document.getElementById("localidade")
const ufInput = document.getElementById("uf")

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
  return new Promise((resolve, reject) => {

    const requisicao = new XMLHttpRequest()
    requisicao.open("GET", url)
    requisicao.onload = function () {
      if (requisicao.status === 200) {
        const resposta = JSON.parse(requisicao.responseText)
        resolve(resposta)
      }
    }
    requisicao.send()

  })
}

cepInput.addEventListener("blur", () => {
  const valorDoCampo = cepInput.value
  getData(`https://viacep.com.br/ws/${valorDoCampo}/json/`)
  .then(resultadoAPI => {
    cepInput.value = resultadoAPI.cep
    logradouroInput.value = resultadoAPI.logradouro
  })
})