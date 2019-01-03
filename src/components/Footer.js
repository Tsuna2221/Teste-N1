import React, { Component } from 'react';

import Logo from '../assets/logo-n1-white.png'

const Footer = () =>{
    return (
        <div id='app-footer'>
            <div className="foot-left-s">
                <img src={Logo} alt=""/>
            </div>

            <div className="foot-right-s">
                <span className="foot-own">Agência N1 - Todos os direitos reservados</span>
            </div>
        </div>
    );
}

export default Footer;