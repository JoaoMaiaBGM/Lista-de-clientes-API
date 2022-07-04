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