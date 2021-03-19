import './App.scss';
import React from "react"
import { useState } from "react";

import Sidebar from './components/Sidebar'
import CardList from './components/CardList'
import { fetchBeers } from './services/punkapi.service';

function App() {
  const [beers, setBeers] = useState([])

  const getBeerList = async (searchText) => {
    const beerList = await fetchBeers(searchText);
    setBeers(beerList)
    console.log(beers)
    }
  
  return (
    <div className="App">
      <Sidebar searchFunction = {getBeerList} className = "sidebar"/>
      <CardList beerList = {beers}/>
      
      
      
    </div>
  );
}

export default App;
