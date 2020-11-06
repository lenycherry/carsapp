import React, { Component, Fragment } from 'react';
import Car from './Cars'


class Mycars extends Component {

    state = {
        voitures: [
            { name: 'ford', color: 'rouge', year: '2000' },
            { name: 'mercedes', color: 'noir', year: '2010' },
            { name: 'peugeot', color: 'vert', year: '2018' },
        ],
        titre: 'Catalogue de voitures'
    }
    addTenYears = () => {
        const updatedState = this.state.voitures.map((param) => {
            return param.year -= 10;
        })
        this.setState({
            updatedState
        })
    }

    render() {
        const year = new Date().getFullYear();

        return (
            <>
                <h1 className='text-primary title'>{this.state.titre}</h1>

                <button className='btn btn-success' onClick={this.addTenYears}>+ 10 ans</button>

                <table className="table table-hover">
                    <thead className="bg-primary text-white">
                        <tr>
                            <th scope='col'>Marque</th>
                            <th scope='col'>Age</th>
                            <th scope='col'>Couleur</th>
                        </tr>
                    </thead>
                    <tbody>
                    {
                        this.state.voitures.map((voiture, index) => {
                            return (
                                <Fragment key={index}>
                                    <Car nom={voiture.name} color={voiture.color} year={year - voiture.year + ' ans'} />
                                </Fragment>
                            )
                        })
                    }
                    </tbody>
                </table>
            </>
        )

    }
}

export default Mycars;