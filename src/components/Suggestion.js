import React, { Component } from 'react';

import DrStrange from '../assets/drstr.jpg'
import Mario from '../assets/mario-2.jpg'
import Ryu from '../assets/ryu.jpg'

class Suggestion extends Component {
    render() {
        return (
            <div id='app-suggestion'>
                <h2 className="def-stg">Quem viu, viu também</h2>
                <div className="sugg-container">
                    {this.drawContainer()}
                </div>
            </div>
        );
    }

    state = {

    }

    drawContainer = () => {
        var items = [
            {
                title: 'Action Figure Doctor Strange e Burning Flame Set - S.H.Figuart',
                price: '725,90',
                discount: '624,90',
                imgName: DrStrange
            },
            {
                title: 'Action Figures - Super Mario Bros - Bandai',
                price: '189,90',
                discount: '149,90',
                imgName: Mario
            },
            {
                title: 'Figura Street Fighter Ryu',
                price: '5.500,20',
                discount: '5.259,00',
                imgName: Ryu
            },
        ]

        return items.map(item => {
            var {title, price, discount, imgName} = item

            return (
                <div key={title} className="sugg-item">
                    <div className="sg-item-img">
                        <img src={imgName} alt=""/>
                    </div>
                    
                    <p className="sg-item-title">{title}</p>

                    <div className="sg-item-price">
                        <p>de {price}</p>
                        <strong className="sg-price-highlight hl">por {discount}</strong>
                    </div>
                </div>
            )
        })
    }
}

export default Suggestion;