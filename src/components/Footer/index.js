import React from 'react';
import { FooterBase } from './styles';
import Logo from '../../assets/img/Logo.png';

function Footer() {
  return (
    <FooterBase>
      <a href="https://github.com/nicolyyy">
        <img className="Logo" src={Logo} alt="AluraFlix logo" />
      </a>
      <p>
        Orgulhosamente criado durante a
        {' '}
        <a href="https://www.alura.com.br/">
          Imersão React da Alura
        </a>
      </p>
      <p>
        Desenvolvido com muito ♥ por
        {' '}
        <a href="https://github.com/nicolyyy" target="_blank" rel="noopener noreferrer">Nicoly Menezes</a>
      </p>
    </FooterBase>
  );
}

export default Footer;
