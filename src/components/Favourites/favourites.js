import React from 'react';
import axios from 'axios';
import image1 from '../Asset/th.jpg'

function SixDresses(){
    const dresses = [
        { id: 1, name: 'Dress 1', imageUrl: image1, description: 'Description 1', price: 100 },
        { id: 2, name: 'Dress 2', imageUrl: image1, description: 'Description 2', price: 150 },
        { id: 3, name: 'Dress 3', imageUrl: image1, description: 'Description 3', price: 120 },
        { id: 4, name: 'Dress 4', imageUrl: image1, description: 'Description 4', price: 130 },
        { id: 5, name: 'Dress 5', imageUrl: image1, description: 'Description 5', price: 110 },
        { id: 6, name: 'Dress 6', imageUrl: image1, description: 'Description 6', price: 140 }
    ];

    const removeFromFavorites = async (id) => {
        try {
            await axios.delete(`/api/dresses/${id}`);
            // Optionally, update the UI to reflect the removal of the dress from favorites
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div className="favourites">
            <center><h1>My Favourites Page</h1></center>
        <div className="center-container">
            <div className="six-dresses">
                {dresses.map(dress => (
                    <div key={dress.id} className="dress-card">
                        
                        <img src={dress.imageUrl} alt={dress.name} />
                        <h3>{dress.name}</h3>
                        <p>{dress.description}</p>
                        <p>${dress.price}</p>
                        {/* Remove from favorites button */}
                        <button onClick={() => removeFromFavorites(dress.id)}>Remove from favorites</button>
                    </div>
                ))}
            </div>
        </div>
        </div>
    );
};

export default SixDresses;
