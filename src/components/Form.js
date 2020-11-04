import React, { Component } from 'react';
import CarPicture from './CarPicture';

class Form extends Component {

    state = {
        username: '',
        color: '',
        colors: ['', 'red', 'blue', 'green', 'black', 'pink'],
        comment: ""

    }

    handlePseudo = e => {
        this.setState({
            username: e.target.value
        })
    }
    handleColor = event => {
        this.setState({
            color: event.target.value
        })
    }
    handleComment = e => {
        this.setState({
            comment: e.target.value
        })
    }
    handleSubmitForm = e => {
        e.preventDefault()
    }

    render() {
        return (
            <div>
                <CarPicture color={this.state.color} height='400' />
                <h2>Commentaires</h2>

                <form onSubmit={this.handleSubmitForm}>
                    <div>
                        <label>Pseudo</label>
                        <input type='text' value={this.state.username} onChange={this.handlePseudo}></input>
                    </div>

                    <div>
                        <label>Couleur</label>
                        <select value={this.state.color} onChange={this.handleColor}>
                            {
                                this.state.colors.map((color, index) => {
                                    return <option key={index} value={color}>{color}</option>
                                })
                            }
                        </select>

                        <div>
                            <label>Commentaire</label>
                            <textarea value={this.state.comment} onChange={this.handleComment}></textarea>
                        </div>
                    </div>

                    <button>Valider</button>
                </form>
            </div>
        )
    }
}

export default Form;