import React, { Component } from 'react';
import CarPicture from './CarPicture';

class Form extends Component {

    state = {

        color: '',
        colors: ['', 'red', 'blue', 'green', 'black', 'pink'],
        age: '',
        ages: ['', 'Un an et +', '10 ans et +', '20 ans et +', '30 ans et +'],
        marque: '',
        marques: ['', 'Ford', 'Mercedes', 'Peugeot', 'Honda']

    }

    handleColor = event => {
        this.setState({
            color: event.target.value
        })
    }
    handleAge = event => {
        this.setState({
            age: event.target.value
        })
    }
    handleMarque = event => {
        this.setState({
            marque: event.target.value
        })
    }
    handleSubmitForm = e => {
        e.preventDefault()
    }

    render() {
        //var formValues = [this.state.marque, this.state.color, this.state.age]
        //var [marqueValue, colorValue, agevalue] = formValues
        //console.log(marqueValue);
        return (
            <div className="container form-container w-50">

                <div className="container-fluid title-car-container">
                    <CarPicture color={this.state.color} />
                    <h2>Chercher un véhicule</h2>
                </div>

                <form className="container" onSubmit={this.handleSubmitForm}>

                    <div className='form-group'>
                        <label htmlFor="chooseBrand">Marque</label>
                        <select className="form-control" id="chooseBrand" value={this.state.marque} onChange={this.handleMarque}>
                            {
                                this.state.marques.map((marque, index) => {
                                    return <option key={index} value={marque}>{marque}</option>
                                })
                            }
                        </select>
                    </div>

                    <div className='form-group'>
                        <label htmlFor="chooseColor">Couleur</label>
                        <select className="form-control" id="chooseColor" value={this.state.color} onChange={this.handleColor}>
                            {
                                this.state.colors.map((color, index) => {
                                    return <option key={index} value={color}>{color}</option>
                                })
                            }
                        </select>
                    </div>

                    <div className='form-group'>
                        <label htmlFor="chooseAge">Age</label>
                        <select className="form-control" id="chooseAge" value={this.state.age} onChange={this.handleAge}>
                            {
                                this.state.ages.map((age, index) => {
                                    return <option key={index} value={age}>{age}</option>
                                })
                            }
                        </select>
                    </div>


                    <button className='btn btn-primary'>Valider</button>

                </form>
            </div>
        )
    }
}

export default Form;