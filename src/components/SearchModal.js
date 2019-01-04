import React, { Component } from 'react';

class SearchModal extends Component {
    render() {
        return (
            <div className="head-searchbar">
                <input onChange={this.handleInput} className="searchbar-input input-st" placeholder="Digite o que procura" type="text"/>

                <div className="search-container">
                    <div className="search-cell">
                        {this.drawSearch()}
                    </div>
                </div>
            </div>
        );
    }
    
    state = {
        filteredArray: []
    }

    componentDidMount = () => {
        document.onclick = this.closeModal

        var ctng = document.querySelector('.head-searchbar')
        var search = document.querySelector('.search-container')
        search.style.width = ctng.offsetWidth + 'px'
    }

    drawSearch = () => {
        var filtered = this.state.filteredArray
        var input = this.state.inputValue

        if(filtered.length > 0 && input.length > 0 && this.state.isFocused){
            return filtered.map(item => {
                var { title, imgName, discount } = item
                
                return (
                /* eslint-disable-next-line */
                <a key={title} href="#" id="cntr" className="search-item">
                    <img id="cntr" className="srch-p" src={imgName} alt=""/>
                    <div id="cntr" className="s-item-details">
                        <p id="cntr" className="s-item-title">{title}</p>
                        <p id="cntr" className="s-item-title">por <strong id="cntr"  className="s-item-price hl">R$ {discount}</strong></p>
                    </div>
                </a>
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

        this.setState({
            filteredArray: filtered,
            inputValue: input
        })
    }

    closeModal = (e) => {
        var searchbar = document.querySelector('.searchbar-input')

        if(e.target === searchbar || e.target.id === 'cntr'){
            this.setState({isFocused: true})
        }else{
            this.setState({isFocused: false})
        }
    }
}

export default SearchModal;
