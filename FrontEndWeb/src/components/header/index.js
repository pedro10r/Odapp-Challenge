import React from 'react';
import './styles.css';
import { IconContext } from "react-icons";
import { FaUserCircle } from 'react-icons/fa'

export default function Header({ }) {

  return (
    <div className='header-container'>
      <div className='usuario-container-header'>
        <IconContext.Provider value={{ color: "#292e35", size: '35px' }}>
          <div style={{ fontWeight: 'bold', marginRight: 15 }}>Usuario</div>
          <FaUserCircle />
        </IconContext.Provider>
      </div>
    </div>
  );
}
