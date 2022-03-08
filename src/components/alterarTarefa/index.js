import './style.css'
import { useState, useEffect } from 'react'
import {
  DetalharTarefa,
  EditarTarefa,
  ListarTarefas
} from '../../services/ApiTarefas'

export default function ModalAlterarTarefa(props) {
  const [nome, setNome] = useState('')
  const [concluido, setConcluido] = useState(false)

  useEffect(() => {
    DetalharTarefa(props.id, setNome, setConcluido)
  }, [props.id])

  function AlterarTarefa() {
    const editarTarefa = {
      nome: nome,
      concluido: concluido
    }
    EditarTarefa(editarTarefa, props.id).then(() => {
      ListarTarefas(props.setTarefas)
      props.setOpenModal()
    })
  }

  return (
    <div className="container-modal">
      <div className="titulo-modal">
        <h2>Editar Tarefa</h2>
        <span className="btn-close" onClick={() => props.setOpenModal(0)}>
          X
        </span>
      </div>
      <div className="dados-modal">
        <label htmlFor="">Nome</label>
        <input
          className="nomeTarefa"
          type="text"
          value={nome}
          onChange={e => setNome(e.target.value)}
        />
        <label htmlFor="">Concluído</label>
        <input
          className="checkbox"
          type="checkbox"
          checked={concluido}
          onChange={e => setConcluido(e.target.checked)}
        />
      </div>
      <div className="btn-modal">
        <button className="btn-salvar" onClick={AlterarTarefa}>
          Editar
        </button>
      </div>
    </div>
  )
}
