import React, { useState, useEffect } from 'react';
import './styles.css';

import TabMenu from '../../components/tabMenu/index';
import Header from '../../components/header/index';
import api from '../../services/api';

import { Link } from 'react-router-dom';

export default function ListaPaciente({ history }) {

  //função para listar os pacientes
  const [pacientes, setPaciente] = useState([]);
  useEffect(() => {
    lista();
  }, []);

  async function lista() {
    api.get('/pacientes').then(response => {
      console.log(response.data.docs)
      setPaciente(response.data.docs)
    })
      .catch(error => {
        console.log(error);
      });
  }

  return (
    <div className="read-body">
      <div className="read-container">
        <TabMenu history={history} selectMenu={2} />
        <div className="read-dashboard-container">
          <Header history={history} />
          <div className="read-dashboard-container-util-area">
            <table>
              <div className='titulo-list'>
                <h2 >Lista de pacientes</h2>
              </div>
              <tr>
                <th>Nome</th>
                <th>Idade</th>
                <th>Cidade</th>
                <th>Estado</th>
                <th></th>
                <th></th>
                <th></th>
              </tr>
              {pacientes.map(paciente => (
                <tr key={paciente.id}>
                  <td>{paciente.name}</td>
                  <td>{paciente.idade}</td>
                  <td>{paciente.cidade}</td>
                  <td>{paciente.estado}</td>
                  <td>
                    <Link to={`/detalhe-paciente/${paciente.id}`} className="btn btn-info">
                      Detalhes
                    </Link>
                  </td>
                  <td>
                    <Link to={`/edita-paciente/${paciente.id}`} className="btn btn-primary">
                      Editar
                    </Link>
                  </td>
                  <td>
                    <Link to={`/deleta-paciente/${paciente.id}`} className="btn btn-danger">
                      Excluir
                    </Link>
                  </td>
                </tr>
              ))}
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}