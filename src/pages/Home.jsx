import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Home = () => {
    const [houses,setHouses] = useState(null)

    async function axiosHouses () {
        try {
            const response = await axios.get('https://wizard-world-api.herokuapp.com/Houses')
            console.log(response)
            setHouses(response.data)
        } catch (error) {
            console.error(error)
        }
    }

    useEffect(() => {
        axiosHouses()
    },[])

    return (
        <div>
            <h1>Hogwarts houses</h1>
            {houses && houses.map(elem => {
            return (
            <div key={elem.id}>
                <h1>{elem.name}</h1>
                <h1>{elem.founder}</h1>
                <li style={{listStyle:'none'}}><Link to={`/houses/${elem.id}`}>See apps</Link></li>
            </div>)}
            )}
        </div>
    )
}

export default Home