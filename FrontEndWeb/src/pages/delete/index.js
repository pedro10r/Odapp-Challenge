import React, { useEffect, useState } from 'react';
import './styles.css';

import { useParams, Link } from "react-router-dom";
import { useForm } from 'react-hook-form';

import api from '../../services/api';
import Swal from 'sweetalert2';

import TabMenu from '../../components/tabMenu/index';
import Header from '../../components/header/index';

//Função do alerta de tela
const swalWithBootstrapButtons = Swal.mixin({
  customClass: {
    confirmButton: 'btn btn-success',
    cancelButton: 'btn btn-danger'
  },
  buttonsStyling: false
})

//Função que pega informações do paciente e leva para outra rota
const DeletaPaciente = (props) => {
  const { id } = useParams();
  const { register, handleSubmit, setValue } = useForm();
  const [paciente, setPaciente] = useState([])

  useEffect(() => {
    api.get(`/pacientes/${id}`).then(response => {
      setValue("id", response.data.id);
      setValue("name", response.data.name);

      setPaciente({ id: response.data.id, name: response.data.name })
    })
  }, [id]);

  //Alerta de tela
  const onSubmit = () => {
    swalWithBootstrapButtons.fire({
      title: 'Excluir paciente?',
      text: 'Tem certeza que deseja excluir o paciente ' + paciente.name + '?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Sim',
      cancelButtonText: 'Não',
      reverseButtons: true
    }).then((result) => {
      if (result.value) {
        deletePacient(paciente)
      }
    })
  };

  //Função que deleta o paciente
  function deletePacient(paciente) {
    api.delete(`/pacientes/${paciente.id}`)
    Swal.fire({
      title: 'Paciente excluído!',
      text: 'Paciente ' + paciente.name + ' excluído com sucesso!',
      icon: 'success',
      showCancelButton: false,
      confirmButtonColor: '#3085d6',
      confirmButtonText: 'OK'
    }).then((result) => {
      if (result.value) {
        props.history.push("/lista-paciente");
      }
    })
  }

  return (
    <div className="delete-body">
      <div className="delete-container">
        <TabMenu history={props.history} selectMenu={4} />
        <div className="delete-dashboard-container">
          <Header history={props.history} />
          <div className="delete-dashboard-container-util-area">
            <table>
              <div className='titulo-del'>
                <h2 >Excluir pacientes</h2>
              </div>
              <div className="card">
                <div className="card-body">
                  <div className="card-text">
                    <form onSubmit={handleSubmit(onSubmit)}>
                      <div className="form-group">
                        <label>ID</label>
                        <input type="text" readOnly className="form-control" name="id" ref={register({ required: true })} />
                      </div>
                      <div className="form-group">
                        <label>Nome</label>
                        <input type="text" readOnly className="form-control" name="name" ref={register({ required: true })} />
                      </div>
                      <Link to="/lista-paciente" className="btn btn-secondary">
                        <i className="fa fa-arrow-left"></i> Cancelar
                        </Link>
                      &nbsp;
                        <button type="submit" className="btn btn-danger">Excluir<i className="fa fa-save"></i></button>
                    </form>
                  </div>
                </div>
              </div>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DeletaPaciente;