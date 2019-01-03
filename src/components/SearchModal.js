import React, { Component } from 'react';

class SearchModal extends Component {
    render() {
        return (
            <div className="head-searchbar">
                <input onChange={this.handleInput} placeholder="Digite o que procura" type="text"/>

                <div className="search-container">
                    {this.drawSearch()}
                </div>
            </div>
        );
    }
    
    state = {
        filteredArray: []
    }

    drawSearch = () => {
        var filtered = this.state.filteredArray
        var input = this.state.inputValue

        if(filtered.length > 0 && input.length > 0){
            return filtered.map(item => {
                var { title, imgName, discount } = item

                return (
                <div className="search-item">
                    <img src={imgName} alt=""/>
                    <div className="s-item-details">
                        <p>{title}</p>
                        <strong className="hl">por R$ {discount}</strong>
                    </div>
                </div>
                )
            })
        }
    }

    handleInput = (e) => {
        var products = this.props.products
        var input = e.target.value
        var filtered = []

        products.forEach(product => {
            if(product.title.toLowerCase().includes(input.toLowerCase())){
                filtered.push(product)
            }
        });

        console.log(this.state.filteredArray)

        this.setState({
            filteredArray: filtered,
            inputValue: input
        })
    }

}

export default SearchModal;
