import { Api } from "./Api.js";

const clientes = await Api.listarClientes();
const listaClientesNome = document.getElementById('buscarCliente');

const nomesClientes = (cliente) => {
  
  cliente.forEach(({nome, id}) => {
  const option = document.createElement('option');
  option.value = id;

  option.innerText = nome;

    listaClientesNome.append(option);
  });

}
nomesClientes(clientes)


const btnBuscarCliente = document.getElementById('btnBuscarCliente');
btnBuscarCliente.addEventListener('click', handleEvent);

function handleEvent() {
  event.preventDefault();
  const listaBuscarCliente = document.getElementById('buscarCliente');

  for(let i = 0; i < clientes.length; i++) {
    if(clientes[i].id == listaBuscarCliente.value) {
      const pessoa = clientes[i];

      const inputNome = document.getElementById('nome');
      inputNome.value = pessoa.nome;

      const inputDataNasc = document.getElementById('data_nasc');
      inputDataNasc.value = pessoa.data_nasc;

      const optionSexo = document.getElementById('sexo_masculino');
      optionSexo.innerText = pessoa.sexo;

      const inputEmail = document.getElementById('email');
      inputEmail.value = pessoa.email;

      const inputCep = document.getElementById('cep');
      inputCep.value = pessoa.endereco.cep;

      const inputRua = document.getElementById('rua');
      inputRua.value = pessoa.endereco.rua;

      const inputNumero = document.getElementById('numero');
      inputNumero.value = pessoa.endereco.numero;

      const inputBairro = document.getElementById('bairro');
      inputBairro.value = pessoa.endereco.bairro;

      const inputCidade = document.getElementById('cidade');
      inputCidade.value = pessoa.endereco.cidade;

      const inputEstado = document.getElementById('estado');
      inputEstado.value = pessoa.endereco.estado;

      const inputTelefoneFixo = document.getElementById('telefone_fixo');
      inputTelefoneFixo.value = pessoa.telefone_fixo;

    }
  }
}
