import React, { Component } from 'react';

import SearchModal from './SearchModal'

import Logo from '../assets/logo-n1.png'
import Cart from '../assets/shopping-cart.svg'

class Header extends Component {
    render() {
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

                    <SearchModal products={this.props.products}></SearchModal>

                    <div className="head-cart">
                        <img src={Cart} alt=""/>
                        <span className="cart-qty">{this.props.cart.length}</span>
                    </div>
                </div>
            </div>
        );
    }


}

export default Header;