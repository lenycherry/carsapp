import React, { Component, Fragment } from 'react';
import Car from './Cars'


class Mycars extends Component {

    state = {
        voitures: [
            { name: 'Ford', color: 'rouge', year: '2019' },
            { name: 'Ford', color: 'noir', year: '2010' },
            { name: 'Ford', color: 'rouge', year: '2000' },
            { name: 'Ford', color: 'vert', year: '1990' },
            { name: 'Mercedes', color: 'noir', year: '2019' },
            { name: 'Mercedes', color: 'rouge', year: '2010' },
            { name: 'Mercedes', color: 'rose', year: '2000' },
            { name: 'Mercedes', color: 'bleu', year: '1990' },
            { name: 'Peugeot', color: 'rouge', year: '2019' },
            { name: 'Peugeot', color: 'vert', year: '2010' },
            { name: 'Peugeot', color: 'rose', year: '2000' },
            { name: 'Peugeot', color: 'bleu', year: '1990' },
            { name: 'Honda', color: 'rouge', year: '2019' },
            { name: 'Honda', color: 'vert', year: '2010' },
            { name: 'Honda', color: 'rose', year: '2000' },
            { name: 'Honda', color: 'bleu', year: '1990' },
        ],
        titre: 'Catalogue de voitures'
    }

    render() {
        const year = new Date().getFullYear();

        return (
            <>
                <h1 className='text-primary title'>{this.state.titre}</h1>
                <div className="container  w-50">
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
                </div>
            </>
        )

    }
}

export default Mycars;