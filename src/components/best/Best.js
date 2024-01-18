import React from 'react';
import img1 from '../../assets/img1.jpg';
import img2 from '../../assets/img2.jpg';
import img3 from '../../assets/img3.jpg';

import './Best.css'

const Best = () => {
  return (
    <div className='best'>
        <h1>Encontre propriedades com melhor classificação </h1>
        <div >
            <p><span className='bold'>Todos</span></p>
            <p>Comercial</p>
            <p>Residencial</p>
            <p>Agricultura</p>
        </div>
        <div className='container'>
            <img src={img1} alt='' />
            <img src={img2} alt='' />
            <img src={img3} alt='' />
        </div>
        <button className='btn'>Veja Mais</button>
    </div>
  )
}

export default Best