import React from 'react';
import h01 from '../../assets/h01.jpg';
import lazer from '../../assets/lazer.jpg';
import salas from '../../assets/salas.jpg';
import banheiro from '../../assets/banheiro.jpg';
import quarto from '../../assets/quartos.jpg'

import h02 from '../../assets/h02.jpg';
import banheiro2 from '../../assets/banheiro2.jpg';
import cozinha2 from '../../assets/cozinha2.jpg';
import quarto2 from '../../assets/quarto2.jpg';
import sala2 from '../../assets/sala2.jpg';


import './Featured.css';

const Featured = () => {
  return (
    <div className='featured'>
        <h1 className='featured-text'>Em Destaque</h1>
        <p className='featured-text'>Selecione em destques a Cidade, Estado e Bairro</p>
        <div className='container'>
            <img className='span-3 image-grid-row-2' src={h01} alt='' />
            <img src={lazer} alt='' />
            <img src={salas} alt='' />
            <img src={banheiro} alt='' />
            <img src={quarto} alt='' />
            <div className='span-3 img-details'>
                <div className='top'>
                    <h2>123 Santa Ines-Belo Horizonte, MG</h2>
                    <p>Casa a Venda</p>
                    <p className='price'>R$850,000,00</p>
                </div>
                <div className='info-grid'>
                    <div>
                        
                        
                         <div className='info'>
                                    <p className='bold'>Quartos: <p></p></p>5
                                </div>
                                <div className='info'>
                                    <p className='bold'>Banheiros: <p></p></p>4
                                </div>
                        
                                </div>
                                            <div className='info'>
                                    <p className='bold'>Parcela: <p></p>72vx</p>
                                    <p className='bold'>Pagamento Estimado: <p>R$11,805,00</p></p>
                                </div>
                    </div>
                            
                    
            </div>
            <div className='span-2 right-img-details'>
                <p>Esta casa imponente, com seus 5 quartos espaçosos e 4 banheiros meticulosamente projetados, redefine o padrão de elegância e bem-estar. Ao atravessar a entrada, você será recebido por uma atmosfera de requinte, onde a harmonia entre design moderno e toques clássicos cria uma experiência única. Os 5 quartos oferecem um refúgio privativo para os moradores, cada um projetado com atenção aos detalhes, desde os acabamentos de alta qualidade até os amplos espaços que proporcionam uma sensação de serenidade.</p>
                <button className='btn'>Ver a Casa Completa</button>
            </div>
        </div>
         {/*second section */}
         <div className='container'>
            
            <img className='order-2' src={cozinha2} alt='' />
            <img className='order-3'  src={sala2} alt='' />
            <img className='span-3 image-grid-row-2 order-1'  src={h02} alt='' />
            <img className='order-4' src={banheiro2} alt='' />
            <img className='order-5' src={quarto2} alt='' />
            <div className='span-2 right-img-details order-7'>
                <p>Esta casa imponente, com seus 4 quartos espaçosos e 4 banheiros meticulosamente projetados, redefine o padrão de elegância e bem-estar. Ao atravessar a entrada, você será recebido por uma atmosfera de requinte, onde a harmonia entre design moderno e toques clássicos cria uma experiência única. Os 4 quartos oferecem um refúgio privativo para os moradores, cada um projetado com atenção aos detalhes, desde os acabamentos de alta qualidade até os amplos espaços que proporcionam uma sensação de serenidade. </p>
                <button className='btn'>Ver a Casa Completa</button>
            </div>
            <div className='span-3 img-details order-6'>
                <div className='top'>
                    <h2>789 Centro-Belo Horizonte, MG</h2>
                    <p>Casa a Venda</p>
                    <p className='price'>R$600,000,00</p>
                </div>
                <div className='info-grid'>
                    
                        <div>
                            <div className='info'>
                                <p className='bold'>Quartos: <p></p></p>4
                            </div>
                            
                            <div className='info'>
                                <p className='bold'>Banheiros: <p></p></p>4
                            </div>
                            
                        </div>
                        
                </div>
                <div className='info'>
                            <p className='bold'>Parcela: <p>72x</p></p>
                            <p className='bold'>
                                 Estimado: <p>R$8,333,00</p></p>
                        </div>
                       
                
            </div>
            
        </div>
    </div>
  )
}

export default Featured