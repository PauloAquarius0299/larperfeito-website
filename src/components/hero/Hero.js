import React from 'react';
import {AiOutlineSearch} from 'react-icons/ai';


import './Hero.css'

const Hero = () => {
    return (
        <div className='hero'>
            <div className='content'>
                <h1> Sua Jornada Rumo ao Seu Espaço dos Sonhos!</h1>
                <p className='search-text'>Em um mundo onde encontrar o lar ideal pode parecer uma tarefa desafiadora, apresentamos com entusiasmo o site "Lar Perfeito" o seu destino definitivo para a compra da casa dos seus sonhos. </p>
                <form className='search'>
                    <div>
                        <input type='text' placeholder='Encontre o lar'></input>
                    </div>
                    <div className='radio'>
                        <input type='radio' checked />
                        <label>Comprar</label>
                        <input type='radio' />
                        <label>Alugar</label>
                        <button type='submit'><AiOutlineSearch className='icon' /></button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Hero;