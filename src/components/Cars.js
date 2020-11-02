import React from 'react';

const Car = ({ nom, color, year }) => {

    const colorInfo = color ? (<p>Couleur: { color}</p>) : (<p>Couleur: Néant</p>);

    if (nom) {
        return (
            <div style={{ backgroundColor: 'pink', width: '400px', padding: '10px', margin: '5px auto' }}>
                <p>Marque: {nom} </p>
                <p>Age: {year}</p>
                { colorInfo}
            </div>
        )
    } else {
        return null;
    }

}

export default Car;