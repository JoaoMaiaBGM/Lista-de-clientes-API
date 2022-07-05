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

const btnDeletarCliente = document.getElementById('deletarCliente');
btnDeletarCliente.addEventListener('click', handleEventDelete)

async function handleEventDelete(event) {
  const listaBuscarCliente = document.getElementById('buscarCliente');

  for(let i = 0; i < clientes.length; i++) {
    event.preventDefault();
    
    if(clientes[i].id == listaBuscarCliente.value) {

      const pessoa = clientes[i]
      
      Api.deletarCliente(pessoa.id);

    }      
  }
}