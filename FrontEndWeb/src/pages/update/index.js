import React, { useEffect } from 'react';
import './styles.css';

import { useParams, Link } from "react-router-dom";
import { useForm } from 'react-hook-form';

import api from '../../services/api';
import Swal from 'sweetalert2';

import TabMenu from '../../components/tabMenu/index';
import Header from '../../components/header/index';

//Função que pega informações do paciente e leva para outra rota
const EditaPaciente = (props) => {
  const { id } = useParams();
  const { register, handleSubmit, setValue } = useForm();

  useEffect(() => {
    api.get(`/pacientes/${id}`).then(response => {
      setValue("id", response.data.id);
      setValue("name", response.data.name);
      setValue("cidade", response.data.cidade);
      setValue("idade", response.data.idade);
      setValue("estado", response.data.estado);
    })
  }, [id]);

  //Função que edita o paciente
  const onSubmit = data => {
    api.put(`/pacientes/${id}`, data).then(response => {

      //Mostra alerta
      Swal.fire({
        title: 'Dados alterados!',
        text: 'Os dados do paciente ' + response.data.name + ' foram alterados com sucesso!',
        icon: 'success',
        showCancelButton: false,
        confirmButtonColor: '#3085d6',
        confirmButtonText: 'OK'
      }).then((result) => {
        if (result.value) {
          props.history.push("/lista-paciente");
        }
      })
    })
  };

  return (
    <div className="read-body">
      <div className="read-container">
        <TabMenu history={props.history} selectMenu={3} />
        <div className="read-dashboard-container">
          <Header history={props.history} />
          <div className="read-dashboard-container-util-area">
            <table>
              <div className='titulo-list'>
                <h2 >Editar paciente</h2>
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
                        <input type="text" className="form-control" name="name" ref={register({ required: true })} />
                      </div>
                      <div className="form-group">
                        <label>Idade</label>
                        <input type="number" className="form-control" name="idade" ref={register({ required: true })} />
                      </div>
                      <div className="form-group">
                        <label>Cidade</label>
                        <input type="text" className="form-control" name="cidade" ref={register({ required: true })} />
                      </div>
                      <div className="form-group">
                        <label>Estado</label>
                        <input type="text" className="form-control" name="estado" ref={register({ required: true })} />
                      </div>
                      <Link to="/lista-paciente" className="btn btn-danger">
                        <i className="fa fa-arrow-left"></i> Cancelar
                        </Link>
                      &nbsp;
                        <button type="submit" className="btn btn-primary">Salvar <i className="fa fa-save"></i></button>
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

export default EditaPaciente;