import './style.css'
import editar from '../../assets/edit.png'
import deletar from '../../assets/delete.png'

export default function ListarTodasTarefas(props) {
  return (
    <table className="table-lista">
      <thead className="table-head">
        <tr>
          <th>Id </th>
          <th>Nome</th>
          <th>Concluìdo</th>
          <th>Gerenciar</th>
        </tr>
      </thead>
      <tbody className="table-body">
        {props.tarefas.map(tarefa => {
          return (
            <tr key={tarefa.id}>
              <td>{tarefa.id}</td>
              <td>{tarefa.nome}</td>
              <td>{tarefa.concluido ? 'Concluído' : 'Não Concluído'}</td>
              <td>
                <button
                  className="btn-editar"
                  onClick={() => props.setOpenModalEditar(tarefa.id)}
                >
                  <img src={editar} alt="" />
                </button>
                <button
                  className="btn-deletar"
                  onClick={() => props.setOpenModalExcluir(tarefa.id)}
                >
                  <img src={deletar} alt="" />
                </button>
              </td>
            </tr>
          )
        })}
      </tbody>
    </table>
  )
}
