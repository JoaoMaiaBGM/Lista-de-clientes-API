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
btnBuscarCliente.addEventListener('click', handleEventBuscarCliente);

function handleEventBuscarCliente(event) {
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


const btnEdit = document.getElementById('btnEdit');
btnEdit.addEventListener('click', handlEventEdit);

function handlEventEdit(event) {
  event.preventDefault();

  const listaBuscarCliente = document.getElementById('buscarCliente');

  for(let i = 0; i < clientes.length; i++) {
    if(clientes[i].id == listaBuscarCliente.value) {
      const inputNome         = document.getElementById('nome');
      const inputDataNasc     = document.getElementById('data_nasc');
      const optionSexo        = document.getElementById('sexo_masculino', 'sexo_feminino');
      const inputEmail        = document.getElementById('email');
      const inputCep          = document.getElementById('cep');
      const inputRua          = document.getElementById('rua');
      const inputNumero       = document.getElementById('numero');
      const inputBairro       = document.getElementById('bairro');
      const inputCidade       = document.getElementById('cidade');
      const inputEstado       = document.getElementById('estado');
      const inputTelefoneFixo = document.getElementById('telefone_fixo');

      let data = {
        nome: inputNome.value, 
        data_nasc: inputDataNasc.value, 
        sexo: optionSexo.value, 
        email: inputEmail.value, 
        endereco:{
          cep: inputCep.value, 
          rua: inputRua.value, 
          numero: inputNumero.value, 
          bairro: inputBairro.value, 
          cidade: inputCidade.value, 
          estado: inputEstado.value
        }, 
        telefone_fixo: inputTelefoneFixo.value
      };
      
      Api.editarCliente(clientes[i].id, data);
    }
  }
}