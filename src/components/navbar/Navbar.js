import React, {useState} from 'react';
import {HiOutlineMenuAlt4} from 'react-icons/hi';
import {FaRegTimesCircle} from 'react-icons/fa';
import {BsFillHouseFill} from 'react-icons/bs';

import './Navbar.css';

const Navbar = () => {
  
  const[click, setClick] = useState(false)
  const handleClick = () => setClick(!click)

  return (
    <div className='Navbar'>
        <div className='container'>
            <h1><span>
                <BsFillHouseFill />Lar
                </span>Perfeito </h1>
                <button className='btn'>Se Escreva</button>
                <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                  <li><a href='#'>Inicio</a></li>
                  <li><a href='#'>Pesquisa</a></li>
                  <li><a href='#'>Sobre</a></li>
                  <li><a href='#'>Contatos</a></li>
                </ul>
                <div className='hamburger' onClick={handleClick}>
                  {click ? (<FaRegTimesCircle className='icon' />) : (<HiOutlineMenuAlt4 className='icon' />)}
                </div>
        </div>
    </div>
  )
}

export default Navbar