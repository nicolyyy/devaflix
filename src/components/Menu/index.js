import React from 'react';
import Logo from '../../assets/img/Logo.png'
import './Menu.css';
import Button from '../Button'
//import ButtonLink from '../components/ButtonLink';

function Menu(){
    return (
        <nav className="Menu" >
            <a 
                href="/">
                <img src={Logo} className="Logo" alt="Aluraflix logo" />
            </a>
            <Button as="a" 
                href="/"
                className="ButtonLink" >
                Novo vídeo
            </Button>
        </nav>
    );
}

export default Menu; //lembrar de sempre exportar a função