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
               
                <CarPicture color={this.state.color}/>
           

                <h2>Commentaires</h2>

                <form className="container" onSubmit={this.handleSubmitForm}>

                    <div className='form-group'>
                        <label htmlFor="InputPseudo">Pseudo</label>
                        <input type='text' className="form-control" id="InputPseudo" value={this.state.username} onChange={this.handlePseudo}></input>
                    </div>

                    <div className='form-group'>
                        <label htmlFor="chooseColor">Couleur</label>
                        <select  className="form-control" id="chooseColor" value={this.state.color} onChange={this.handleColor}>
                            {
                                this.state.colors.map((color, index) => {
                                    return <option key={index} value={color}>{color}</option>
                                })
                            }
                        </select>

                        <div className='form-group'>
                            <label htmlFor="inputText">Commentaire</label>
                            <textarea  className="form-control" id='inputText' rows='10' value={this.state.comment} onChange={this.handleComment}></textarea>
                        </div>
                    </div>

                    <button className='btn btn-primary'>Valider</button>

                </form>
            </div>
        )
    }
}

export default Form;