import React, { Component } from 'react';

import Success from '../assets/success.svg'

class Modal extends Component {
    render() {
        return (
            <div onClick={this.closeModal} className='modal-bg modal-inactive'>
                <div className="cart-add-modal">
                    <div className="modal">
                        <img src={Success} alt=""/>
                        <div className="modal-stg">
                            <h2>PRODUTO ADICIONADO AO CARRINHO</h2>
                        </div>
                        <div className="modal-btn">OK!</div>
                    </div>
                </div>
            </div>
        );
    }

    state = {

    }

    closeModal = (e) => {
        var modal = document.querySelector('.modal-bg')
        var btn = document.querySelector('.modal-btn')

        if(e.target === modal || e.target === btn){modal.classList.toggle('modal-inactive')}
    }
}

export default Modal;