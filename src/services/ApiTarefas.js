const BASE_URL = 'http://localhost:3334/tarefas'

async function CadastrarTarefa(dadosTarefa) {
  try {
    await fetch(`${BASE_URL}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(dadosTarefa)
    })
  } catch (error) {
    console.log(error)
  }
}

async function ListarTarefas(setTarefas) {
  try {
    const pedido_Fetch = await fetch(`${BASE_URL}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    })
    if (pedido_Fetch.status !== 201) {
      const tarefas = await pedido_Fetch.json()
      setTarefas(tarefas)
    }
  } catch (error) {
    console.log(error)
  }
}

async function ListaTarefasConcluidas(setTarefas) {
  try {
    const pedido_Fetch = await fetch(`${BASE_URL}Concluidas`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    })
    if (pedido_Fetch.status !== 201) {
      const tarefas = await pedido_Fetch.json()
      await setTarefas(tarefas)
    }
  } catch (error) {
    console.log(error)
  }
}

async function ListaTarefaNome(nome, setTarefas) {
  try {
    const pedido_Fetch = await fetch(`${BASE_URL}Nome/${nome}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    })
    if (pedido_Fetch.status !== 201) {
      const tarefas = await pedido_Fetch.json()
      await setTarefas(tarefas)
    }
  } catch (error) {
    console.log(error)
  }
}
async function DetalharTarefa(id, setNome, setConcluido) {
  try {
    const pedido_Fetch = await fetch(`${BASE_URL}/${id}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    })
    if (pedido_Fetch.status !== 201) {
      const tarefa = await pedido_Fetch.json()
      if (tarefa !== null) {
        setNome(tarefa.nome)
        setConcluido(tarefa.concluido)
      }
    }
  } catch (error) {
    console.log(error)
  }
}
async function EditarTarefa(editarTarefa, id) {
  try {
    await fetch(`${BASE_URL}/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(editarTarefa)
    })
  } catch (error) {
    console.log(error)
  }
}
async function ExcluirTarefa(id) {
  try {
    await fetch(`${BASE_URL}/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      }
    })
  } catch (error) {
    return console.log(error)
  }
}

export {
  CadastrarTarefa,
  ListarTarefas,
  ListaTarefasConcluidas,
  ListaTarefaNome,
  DetalharTarefa,
  EditarTarefa,
  ExcluirTarefa
}
