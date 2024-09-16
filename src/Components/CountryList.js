import React, {useState, useEffect} from "react";
import CountryItem from "./CountryItem";


const CountryList = () => {
    const [countries, setCountries] = useState([]);
    const [searchCountry, setSearchCountry] = useState('');
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    // const [slowLoading, setSlowLoading] = useState(false)

    useEffect(() =>{
        
        const fetchCountryList = async () =>{
            try {
                const response = await fetch('https://restcountries.com/v3.1/all')
                
                if(!response.ok){
                    throw new Error("Failed to fetch the country list.")
                }
                const data = await response.json();
                setCountries(data);
                setLoading(false)
            }catch(error){
                setError(error.message);
                setLoading(false)
                console.log("Error in fetching the country data: ", error)
            }
        }
        fetchCountryList();
        
    }, [])

    if(loading){
        return(
            <div>Loading Country Data...</div>
        )
    }
    if(error){
        return(
            <div>Error: {error}</div>
        )
    }

    let searchCountryStr;
    if(searchCountry !== undefined && searchCountry !== null){
        searchCountryStr = searchCountry.toLocaleLowerCase();
    }
    console.log("Conutry List:" , countries);
    const filterCountriesByName = countries.filter(country => country.name && country.name.common && country.name.common.toLowerCase().includes(searchCountryStr))
    
    const countriesToShow = searchCountry ? filterCountriesByName : countries;
    console.log(countriesToShow);
    return(
        <div className="countrylist">
            <input className="countrysearch" type="text" placeholder="Search country by name..." value={searchCountry} onChange={(e) => setSearchCountry(e.target.value)}/>
            {countriesToShow.map((country) => (
                <CountryItem country={country}/>
            ))}

        </div>
    )
}

export default CountryList;