import React, { Component } from 'react';

import Header from './components/Header'
import Product from './components/Product'
import Suggestion from './components/Suggestion'
import Footer from './components/Footer'
import Modal from './components/Modal'

import DrStrange from './assets/drstr.jpg'
import Mario from './assets/mario.png'
import Mario2 from './assets/mario-2.jpg'
import Ryu from './assets/ryu.jpg'

class App extends Component {
	render() {
		return (
			<div id='App'>
				<div id="main-container">
					<Header cart={this.state.currentCart} products={this.state.items}></Header>
					<Product update={this.update} product={this.state.items[0]}></Product>
					<Suggestion items={this.state.items}></Suggestion>
					<Modal></Modal>
				</div>
				<Footer></Footer>
			</div>
		);
	}

	state = {
		currentCart: [],
		items: [
			{
                title: 'Action figure bombeiro Mario topzeira das galáxias',
                price: '189,90',
				discount: '149,90',
				imgName: Mario
            },
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
				imgName: Mario2
            },
            {
                title: 'Figura Street Fighter Ryu',
                price: '5.500,20',
				discount: '5.259,00',
				imgName: Ryu
			},
        ]
	}

	update = (item) => {
		this.setState({
			currentCart: [
				...this.state.currentCart,
				item
			]
		})
	}
}

export default App;