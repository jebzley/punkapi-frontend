import "./App.scss";
import React from "react";
import { useState, useEffect } from "react";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faBeer, faLemon, faDizzy } from "@fortawesome/free-solid-svg-icons";
import Sidebar from "./components/Sidebar";
import CardList from "./components/CardList";
import { fetchBeers } from "./services/punkapi.service";
library.add(faBeer, faLemon, faDizzy);
function App() {
  const [beers, setBeers] = useState([]);

  const getBeerList = async (searchText) => {
    const beerList = await fetchBeers(searchText);
    setBeers(beerList);
    console.log(beers);
  };

  useEffect(() => {
    getBeerList('');
  }, [])

  return (
    <div className="App">
      <Sidebar searchFunction={getBeerList} className="sidebar" />
      <CardList beerList={beers} />
    </div>
  );
}

export default App;
