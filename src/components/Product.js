import React, { Component } from 'react';

import Mario from '../assets/mario.png'
import Arrow from '../assets/arrow.svg'

class Product extends Component {
    render() {
        return (
            <div id='app-product'>
                <div className="prod-navi">
                    <span className="navi-nb">N1</span>
                        <img className="navi-arrow" src={Arrow} alt=""/>
                    <span className="navi-nb">action figures</span>
                        <img className="navi-arrow" src={Arrow} alt=""/>
                    <span className="navi-nb hl">Super Mario</span>
                </div>

                <div className="prod-details">
                    <div className="details-images">
                        <div className="images-slides">
                            <img src={Mario} alt=""/>
                        </div>
                        
                        <img className="images-selected" src={Mario} alt=""/>
                    </div>

                    <div className="details-content">
                        <div className="content-title">
                            <p>Action figure bombeiro Mario topzeira das galáxias </p>
                        </div>

                        <div className="content-price">
                            <p>de R$ 189,90</p>
                            <p>por <strong className="price-highlight hl">R$ 149,90</strong></p>
                            <div onClick={this.addToCart} className="price-btn">Compra ae</div>
                        </div>

                        <div className="content-freight">
                            <h2 className="freight-stg">Calcule o frete</h2>
                            <div className="freight-input">
                                <input className="f-input-field w-max" placeholder="00000" maxLength="5" type="text"/>
                                <input className="f-input-field w-min" placeholder="000" maxLength="3" type="text"/>
                                <div className="f-input-btn">Calcular</div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="prod-desc">
                    <h2 className="def-stg">Descrição do produto</h2>
                    <p className="desc-about">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum asperiores, minus ratione dolorum facere facilis iure corporis et adipisci tempora temporibus ab mollitia esse odit cum! Corrupti et architecto facilis. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum asperiores, minus ratione dolorum facere facilis iure corporis et adipisci tempora temporibus ab mollitia esse odit cum! Corrupti et architecto facilis. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum asperiores, minus ratione dolorum facere facilis iure corporis et adipisci tempora temporibus ab mollitia esse odit cum! Corrupti et architecto facilis.</p>
                    <p className="desc-about">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum asperiores, minus ratione dolorum facere facilis iure corporis et adipisci tempora temporibus ab mollitia esse odit cum! Corrupti et architecto facilis.</p>
                </div>
            </div>
        );
    }

    state = {
        searchValue: ''
    }

    addToCart = () => {
        var modal = document.querySelector('.modal-bg')
        var update = this.props.update
        var item = {
            title: 'Action figure bombeiro Mario topzeira das galáxias',
            price: '149,90'
        }

        update(item)
        
        modal.classList.toggle('modal-inactive')
    }
}

export default Product;