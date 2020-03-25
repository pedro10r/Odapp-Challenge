import React from 'react';
import './styles.css';

import { Link } from "react-router-dom";
import { useForm } from 'react-hook-form';

import api from '../../services/api';
import Swal from 'sweetalert2';

import TabMenu from '../../components/tabMenu/index';
import Header from '../../components/header/index';

//Função que cadastra um novo paciente
const CadastraPaciente = (props) => {
  const { register, handleSubmit } = useForm();
  const onSubmit = data => {
    api.post('/pacientes', data).then(response => {

      //Alerta de tela
      Swal.fire({
        title: 'Paciente cadastrado!',
        text: 'Paciente ' + response.data.name + ' cadastrado com sucesso!',
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
    <div className="create-body">
      <div className="create-container">
        <TabMenu history={props.history} selectMenu={1} />
        <div className="create-dashboard-container">
          <Header history={props.history} />
          <div className="create-dashboard-container-util-area">
            <table>
              <div className='titulo-cad'>
                <h2 >Cadastro de pacientes</h2>
              </div>
              <div className="card">
                <div className="card-body">
                  <div className="card-text">
                    <form onSubmit={handleSubmit(onSubmit)} action="#" class="form-contact" method="post" tabindex="1">
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
                      <Link to="/" className="btn btn-secondary">
                        <i className="fa fa-arrow-left"></i> Voltar
                        </Link>
                      &nbsp;
                        <button type="submit" className="btn btn-primary">Cadastrar<i className="fa fa-save"></i></button>
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

export default CadastraPaciente;