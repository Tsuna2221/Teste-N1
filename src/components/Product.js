import React, { Component } from 'react';

import Arrow from '../assets/arrow.svg'

class Product extends Component {
    render() {
        var { title, price, discount, imgName } = this.props.product

        return (
            <div id='app-product'>
                <div className="prod-navi">
                    {/* eslint-disable-next-line */}
                    <a href="#" className="navi-nb hov">N1</a>
                        <img className="navi-arrow" src={Arrow} alt=""/>
                    {/* eslint-disable-next-line */}
                    <a href="#" className="navi-nb hov">action figures</a>
                        <img className="navi-arrow" src={Arrow} alt=""/>
                    {/* eslint-disable-next-line */}
                    <a href="#" className="navi-nb hl">Super Mario</a>
                </div>

                <div className="prod-details">
                    <div className="details-images">
                        <div className="images-slides">
                            <img src={imgName} alt=""/>
                        </div>
                        
                        <img className="images-selected" src={imgName} alt=""/>
                    </div>

                    <div className="details-content">
                        <div className="content-title">
                            <p>{title}</p>
                        </div>

                        <div className="content-price">
                            <p>de R$ {price}</p>
                            <p>por <strong className="price-highlight hl">R$ {discount}</strong></p>
                            <div onClick={this.addToCart} className="price-btn">Compra ae</div>
                        </div>

                        <div className="content-freight">
                            <h2 className="freight-stg">Calcule o frete</h2>
                            <div className="freight-input">
                                <input className="f-input-field input-st w-max" placeholder="00000" maxLength="5" type="text"/>
                                <input className="f-input-field input-st w-min" placeholder="000" maxLength="3" type="text"/>
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