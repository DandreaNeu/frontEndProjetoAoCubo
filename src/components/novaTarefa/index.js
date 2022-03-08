import './style.css'
import { useState } from 'react'
import { CadastrarTarefa, ListarTarefas } from '../../services/ApiTarefas'

export default function ModalNovaTarefa(props) {
  const [nome, setNome] = useState('')
  function CriarNovaTarefa() {
    const novaTarefa = {
      nome: nome,
      concluido: false
    }
    CadastrarTarefa(novaTarefa).then(() => {
      setNome('')
      ListarTarefas(props.setTarefas)
      props.setOpenModal()
    })
  }
  return (
    <div className="container-modal">
      <div className="titulo-modal">
        <h2>Nova Tarefa</h2>
        <span className="btn-close" onClick={props.setOpenModal}>
          x
        </span>
      </div>
      <div className="dados-modal ">
        <label htmlFor="">Nome</label>
        <input
          className="nomeTarefa"
          type="text"
          onChange={e => setNome(e.target.value)}
          value={nome}
        />
      </div>
      <div className="btn-modal">
        <button className="btn-salvar" onClick={CriarNovaTarefa}>
          Criar
        </button>
      </div>
    </div>
  )
}
