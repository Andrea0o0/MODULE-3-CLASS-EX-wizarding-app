import React, {useState, useEffect} from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

export default function HouseDetails() {
    const {HouseId} = useParams()
    console.log(HouseId)
    const [house,setHouse] = useState(null)

    async function axiosHouse () {
        try {
            const response = await axios.get(`https://wizard-world-api.herokuapp.com/Houses/${HouseId}`)
            console.log(response)
            setHouse(response.data)
        } catch (error) {
            console.error(error)
        }
    }

    useEffect(() => {
        axiosHouse()
    },[])

    return (
        <div>
            {house && 
            <div key={house.id}>
                <h1>{house.name}</h1>
                <p>Founded by {house.founder}</p>
                <p>Colors: {house.houseColours}</p>
                <p>Element: {house.houseColours}</p>
                {house.traits.map((traits)=> <li key={traits.id}>{traits.name}</li>)}
                
            </div>}
        </div>
    )
}
