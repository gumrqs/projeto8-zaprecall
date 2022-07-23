import './style.css'
import logo from './logo.png'
import React from 'react'
import { Link } from "react-router-dom";

export default function TelaLogin(){

    return(
        <>
           <div className='conteudo'>
                <div className='img-logo'>
                    <img className='img-logo'src={logo}/>
                </div>
                <div className='texto-login'>
                    <h1>ZapRecall</h1>
                </div>
                <Link to="/TelaPerguntas">
                    <button className='botao-inicio'>
                        <p>Iniciar recall!</p>
                </button>
                </Link>
                
            </div>
        </>
    )
}
