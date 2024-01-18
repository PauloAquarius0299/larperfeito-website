import React from 'react';

import {FaFacebook, FaInstagram, FaTwitter, FaPinterest} from 'react-icons/fa';

import './Footer.css';

const Footer = () => {
  return (
    <div className='footer'>
        <div className='social'>
            <FaFacebook className='icon' />
            <FaTwitter className='icon' />
            <FaInstagram className='icon' />
            <FaPinterest className='icon' />
        </div>
        <div className='container'>
            <div className='col'>
                <h3>Sobre</h3>
                <p>Empresa</p>
                <p>Detalhes</p>
                <p>Moveis</p>
                <p>Sobre nós</p>
            </div>
            <div className='col'>
                <h3>Legal</h3>
                <p>Empresa</p>
                <p>Detalhes</p>
                <p>Moveis</p>
                <p>Sobre nós</p>
            </div>
            <div className='col'>
                <h3>Informação</h3>
                <p>Empresa</p>
                <p>Detalhes</p>
                <p>Moveis</p>
                <p>Sobre nós</p>
            </div>
            <div className='col'>
                <h3>Companhia</h3>
                <p>Empresa</p>
                <p>Detalhes</p>
                <p>Moveis</p>
                <p>Sobre nós</p>
            </div>
        </div>
    </div>
  )
}

export default Footer