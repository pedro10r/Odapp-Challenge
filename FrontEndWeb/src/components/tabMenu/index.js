import React from 'react';
import './styles.css';
import logo from '../../assets/images/logo.png';

import { IconContext } from "react-icons";
import { FiChevronRight, FiBook, FiUserPlus } from 'react-icons/fi';

export default function TabMenu({ history, selectMenu }) {

  return (
    <div className='tab-menu-container'>
      <div className='logo'>
        <img src={logo} alt="logo" />
      </div>
      <div className='options-container'>

        {/* Opções do menu que usa rotas com history para chamar outra pagina*/}
        <ul>
          <IconContext.Provider value={selectMenu === 1 ? { color: '#fafafa' } : { color: "#667e94", size: '18px' }}>
            <li onClick={() => history.push('/cadastra-paciente')}>
              <div id='font'>
                <FiUserPlus className='icon-left' />
                <label style={selectMenu === 1 ? { color: '#fafafa' } : null}>Cadastrar paciente</label>
              </div>
              <FiChevronRight className='icon-right' />
            </li>
          </IconContext.Provider>
          <IconContext.Provider value={selectMenu === 2 ? { color: '#fafafa' } : { color: "#667e94", size: '18px' }}>
            <li onClick={() => history.push('/lista-paciente')}>
              <div id='font'>
                <FiBook className='icon-left' />
                <label style={selectMenu === 2 ? { color: '#fafafa' } : null}>Listar pacientes</label>
              </div>
              <FiChevronRight className='icon-right' />
            </li>
          </IconContext.Provider>
        </ul>
      </div>
    </div>
  );
}

