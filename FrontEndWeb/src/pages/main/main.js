import React from 'react';
import './main.css';

import TabMenu from '../../components/tabMenu/index';
import Header from '../../components/header/index';


export default function Main({ history }) {
  return (
    <div className='main-body'>
      <div className='main-container'>
        <TabMenu history={history} />
        <div className='dashboard-container'>
          <Header />
        </div>
      </div>
    </div>
  );
}