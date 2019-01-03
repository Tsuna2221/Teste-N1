import React, { Component } from 'react';

import Logo from '../assets/logo-n1.png'
import Cart from '../assets/shopping-cart.svg'

class Header extends Component {
    render() {
        return (
            <div id='app-header'>
                <div className="header-container">
                    <img src={Logo} alt=""/>
                    <div className="head-item">
                        <a href="#" className="navi-item">Games</a>
                        <a href="#" className="navi-item">Presentes</a>
                        <a href="#" className="navi-item hl">Sale</a>
                    </div>

                    <div className="head-searchbar">
                        <input placeholder="Digite o que procura" type="text"/>
                    </div>

                    <div className="head-cart">
                        <img src={Cart} alt=""/>
                        <span className="cart-qty">{this.props.cart.length}</span>
                    </div>
                </div>
            </div>
        );
    }

    state = {

    }
}

export default Header;