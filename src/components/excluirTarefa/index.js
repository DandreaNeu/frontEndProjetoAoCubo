import './style.css'
import { ExcluirTarefa, ListarTarefas } from '../../services/ApiTarefas'

export default function ModalExcluirTarefas(props) {
  function DeletarTarefa() {
    ExcluirTarefa(props.id).then(() => {
      ListarTarefas(props.setTarefas)
      props.setOpenModal(0)
    })
  }
  return (
    <div className="container-modal container-modal-excluir ">
      <div className="titulo-modal">
        <h2>Excluir Tarefa</h2>
        <span className="btn-close" onClick={() => props.setOpenModal(0)}>
          X
        </span>
      </div>
      <div className="dados-modal">
        <p>Deseja mesmo excluir a tarefa ?</p>
      </div>
      <div className="btn-modal btn-modal-excluir">
        <button className="btn-salvar" onClick={DeletarTarefa}>
          Confirmar
        </button>
        <button className="btn-salvar">Sair</button>
      </div>
    </div>
  )
}
