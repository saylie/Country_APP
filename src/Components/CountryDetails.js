import React from "react";

const CountryDetails = ({ country }) => {
  const languages = country.languages ? Object.values(country.languages).join(', ') : "N/A";
  const currencies = country.currencies ? Object.values(country.currencies).map(c => c.name).join(', ') : "N/A";
  const capital = country.capital ? country.capital[0] : "N/A";
  const nativeName = country.name?.nativeName ? Object.values(country.name.nativeName)[0].common : "N/A";
  const borders = country.borders ? country.borders.join(', ') : "N/A";

  return (
    <div className="countrydetails">
        <img className="countryflagDetails" src={country.flags.png} alt={country.name.offical}/>
        <p>Population: {country.population.toLocaleString()}</p>
        <p>Region: {country.region}</p>
        <p>Capital: {capital}</p>
        <p>Native Name: {nativeName}</p>
        <p>Currencies Used: {currencies}</p>
        <p>Languages: {languages}</p>
        <p>Border Countries: {borders}</p>
    </div>
  );
}

export default CountryDetails;