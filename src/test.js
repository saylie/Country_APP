import React from "react";
import {render, screen, fireEvent} from '@testing-library/react'
import '@testing-library/jest-dom/';
import CountryItem from "./Components/CountryList";

describe('CountryItem Component', () => {
   const country = {
    name: {common:'South Georgia'},
    cca3: 'SGS',
    status: 'officially-assigned',
    languages: {  "eng": "English"},
    capital: [ "King Edward Point"],
   }
   test ('renders country details', () => {
    render(<CountryItem country={country}/>)

    expect (screen.getByText(/South Georgia/i)).toBeInDocument();
    })
}

);
test ('renders addnational country details on view more', () => {
    render(<CountryItem country={contry}/>)
    expect (screen.queryByText(/capital/i)).not.toBeInDocument();

    fireEvent.click(screen.getByText(/view more/i));
}) 

