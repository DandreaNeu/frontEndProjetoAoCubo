import './App.css'
import { useState, useEffect } from 'react'

import logo from './assets/aocubo.PNG'
import filter from './assets/filter.png'

import {
  ListarTarefas,
  ListaTarefasConcluidas,
  ListaTarefaNome
} from './services/ApiTarefas'

import ModalAlterarTarefa from './components/alterarTarefa'
import ModalExcluirTarefas from './components/excluirTarefa'
import ModalNovaTarefa from './components/novaTarefa'
import ListarTodasTarefas from './components/listarTarefa'

function App() {
  const [modalNovaTarefa, setModalNovaTarefa] = useState(false)
  const [modalEditarTarefa, setModalEditarTarefa] = useState(false)
  const [modalExcluirTarefa, setModalExcluirTarefa] = useState(false)
  const [tarefas, setTarefas] = useState([])
  const [filtroNome, setFiltroNome] = useState('')
  const [idExcluir, setIdExcluir] = useState('')
  const [idEditar, setIdEditar] = useState(0)

  useEffect(() => {
    ListarTarefas(setTarefas)
  }, [])

  function GerenciaModalNovaTarefa() {
    setModalNovaTarefa(!modalNovaTarefa)
  }
  function GerenciaModalEditaTarefa(id) {
    setIdEditar(id)
    setModalEditarTarefa(!modalEditarTarefa)
  }
  function GerenciaModalExcluirTarefa(id) {
    setIdExcluir(id)
    setModalExcluirTarefa(!modalExcluirTarefa)
  }

  function FiltrarTarefasConcluidas(e) {
    if (e.target.checked) {
      ListaTarefasConcluidas(setTarefas)
    } else {
      ListarTarefas(setTarefas)
    }
  }
  function FiltrarTarefaNome() {
    if (filtroNome === '') {
      ListarTarefas(setTarefas)
    } else {
      ListaTarefaNome(filtroNome, setTarefas)
    }
  }

  return (
    <div className="container">
      <header>
        <img src={logo} alt="logotipo Ao Cubo" />
      </header>
      <div className="header">
        <h1>Gerenciador de Tarefas</h1>
      </div>
      <div className="container-header-tarefas">
        <div className="btn-tarefa" onClick={GerenciaModalNovaTarefa}>
          <button>Nova Tarefa</button>
        </div>
        <div className="filtro">
          <div className="filtro-concluido">
            <label htmlFor="">Filtrar todas as Tarefas Concluidas</label>
            <input
              className="checkbox"
              type="checkbox"
              onClick={FiltrarTarefasConcluidas}
            />
          </div>
          <div className="filtro-nome">
            <label htmlFor="">Filtrar Tarefa por Nome</label>
            <input
              className="nome"
              type="text"
              onChange={e => setFiltroNome(e.target.value)}
              value={filtroNome}
            />
            <button className="btn-buscar" onClick={FiltrarTarefaNome}>
              <img src={filter} alt="" />
            </button>
          </div>
        </div>
      </div>

      <ListarTodasTarefas
        tarefas={tarefas}
        setOpenModalEditar={GerenciaModalEditaTarefa}
        setOpenModalExcluir={GerenciaModalExcluirTarefa}
      ></ListarTodasTarefas>

      <div className={modalNovaTarefa ? 'modalNova' : 'modalNova hidden'}>
        <ModalNovaTarefa
          setOpenModal={GerenciaModalNovaTarefa}
          setTarefas={setTarefas}
        ></ModalNovaTarefa>
      </div>
      <div className={modalEditarTarefa ? 'modalAltera' : 'modalAltera hidden'}>
        <ModalAlterarTarefa
          setOpenModal={GerenciaModalEditaTarefa}
          id={idEditar}
          setTarefas={setTarefas}
        ></ModalAlterarTarefa>
      </div>

      <div
        className={modalExcluirTarefa ? 'modalExclui' : 'modalExclui hidden'}
      >
        <ModalExcluirTarefas
          setOpenModal={GerenciaModalExcluirTarefa}
          id={idExcluir}
          setTarefas={setTarefas}
        ></ModalExcluirTarefas>
      </div>
    </div>
  )
}

export default App
