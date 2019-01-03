import React from 'react';

import SearchModal from './SearchModal'

import Logo from '../assets/logo-n1.png'
import Cart from '../assets/shopping-cart.svg'

const Header = (props) => {
    return (
        <div id='app-header'>
            <div className="header-container">
                <img src={Logo} alt=""/>
                <div className="head-item">
                {/* eslint-disable-next-line */}
                    <a href="#" className="navi-item">Games</a>
                {/* eslint-disable-next-line */}
                    <a href="#" className="navi-item">Presentes</a>
                {/* eslint-disable-next-line */}
                    <a href="#" className="navi-item hl">Sale</a>
                </div>

                <SearchModal products={props.products}></SearchModal>

                <div className="head-cart">
                    <img src={Cart} alt=""/>
                    <span className="cart-qty">{props.cart.length}</span>
                </div>
            </div>
        </div>
    );
}

export default Header;