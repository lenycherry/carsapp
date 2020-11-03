import React from 'react';

const Car = ({ nom, color, year }) => {

    const colorInfo = color ? (`Couleur: ${color}`) : ('Couleur: Néant');

    if (nom) {
        return (
            <tr>
                <td>Marque: {nom}</td>
                <td>Age: {year}</td>
                <td>{ colorInfo}</td>
            </tr>
        )
    } else {
        return null;
    }

}

export default Car;