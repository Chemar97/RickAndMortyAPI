import axios from 'axios';
import React, { useEffect, useState } from 'react';

const ResidentsComponent = ({resident}) => {

    const [character, setCharacter] = useState()

    useEffect(() => {
        axios.get(resident)
        .then( res => setCharacter(res.data))

    },[])
    
    // console.log(character)

    return (
        <div className='card'>
            <li>
                <h3 className='name'>{character?.name}</h3>
                <br />
                <img className='character' src={character?.image} alt="" />
                <br />
                <p className='cardInfo'><b>Status: </b>{character?.status}</p>
                <br />
                <p className='cardInfo'><b>Origin: </b>{character?.origin.name}</p>
                <br />
                <p className='cardInfo'><b># Episodes: </b>{character?.episode.length}</p>

            </li>
            <br />
        </div>
    );
};

export default ResidentsComponent;