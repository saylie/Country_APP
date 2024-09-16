import React, {useState} from "react";
import CountryDetails from "./CountryDetails";


const CountryItem = ({country}) =>{
    const [showCountryDetails, setShowCountryDetails] =  useState(false);

    const handleViewMore = () => {
        setShowCountryDetails(!showCountryDetails)
    }

    return(
        <div className="countryitem">
            <img className="countryflag" src={country.flags.png} alt={country.name.offical}/>
            <h2>{country.name.offical}</h2>
            <p>Population:{country.population.toLocaleString()}</p>
            <p>Region:{country.region}</p>
            <p>Capital:{country.capital ? country.capital[0] : "N/A"}</p>
            <button className="viewmorebtn" onClick={handleViewMore}>{showCountryDetails ? "Hide Details" : "View More"}</button>
            {showCountryDetails && <CountryDetails country={country} />}
        </div>
    )
}

export default CountryItem;