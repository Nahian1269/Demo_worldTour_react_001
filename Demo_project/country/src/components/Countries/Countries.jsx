import { useEffect, useState } from "react";
import Nation from "../Nations/Nation";
import "./Countries.css"

const Countries = () => {
    const [countries, setCountries] = useState([]);
    useEffect(() => {
        fetch('https://restcountries.com/v3.1/all')
        .then(res => res.json())
        .then(data => setCountries(data))
    }
    ,[])
    return (
        <div>
        <div className='items'>
        <h3>Countries: {countries.length}</h3>  
        </div>
         
         <div className='maping'>
         {
            countries.map(country => <Nation key={country.cca3} country={country}></Nation>) 
         } 
         </div>
        </div>
    );
};

export default Countries;