import React, { Component } from 'react';

import Header from './components/Header'
import Product from './components/Product'
import Suggestion from './components/Suggestion'
import Footer from './components/Footer'
import Modal from './components/Modal'

class App extends Component {
	render() {
		return (
			<div id='App'>
				<Header cart={this.state.currentCart}></Header>
				<Product update={this.update}></Product>
				<Suggestion></Suggestion>
				<Footer></Footer>
				<Modal></Modal>
			</div>
		);
	}

	state = {
		currentCart: []
	}

	update = (item) => {
		this.setState({
			currentCart: [
				...this.state.currentCart,
				item
			]
		})
		console.log(this.state)
	}
}

export default App;