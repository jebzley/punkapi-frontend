import "./App.scss";
import React from "react";
import { useState, useEffect } from "react";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faBeer, faLemon, faDizzy, faMeh, faSmile, faSmileBeam } from "@fortawesome/free-solid-svg-icons";
import Sidebar from "./components/Sidebar";
import CardList from "./components/CardList";
import { fetchBeers } from "./services/punkapi.service";
library.add(faBeer, faLemon, faDizzy, faMeh, faSmile, faSmileBeam);

function App() {
  const [beers, setBeers] = useState([]);

  const getBeerList = async (searchText) => {
    const beerList = await fetchBeers(searchText);
    setBeers(beerList);
  };

  useEffect(() => {
    getBeerList("");
  }, []);

  const handleFilter = (searchText, e) => {
    let sortedBeers = [];
    fetchBeers(searchText).then(beerList => {
      
      switch (e.target.value) {
        case "abv-ascending":
          sortedBeers = beerList.sort((a, b) => {
            return a.abv - b.abv;
          });
          setBeers(sortedBeers);
          break;
        case "abv-descending":
          sortedBeers = beerList.sort((a, b) => {
            return b.abv - a.abv;
          });
          setBeers(sortedBeers);
          break;
        case "ebc-ascending":
          sortedBeers = beerList.sort((a, b) => {
            return a.ebc - b.ebc;
          });
          setBeers(sortedBeers);
          break;
        case "ebc-descending":
          sortedBeers = beerList.sort((a, b) => {
            return b.ebc - a.ebc;
          });
          setBeers(sortedBeers);
          break;
        case "ibu-ascending":
          sortedBeers = beerList.sort((a, b) => {
            return a.ibu - b.ibu;
          });
          setBeers(sortedBeers);
          break;
        case "ibu-descending":
          sortedBeers = beerList.sort((a, b) => {
            return b.ibu - a.ibu;
          });
          setBeers(sortedBeers);
          break;
      }
    })
  };

  return (
    <div className="App">
      <Sidebar
        searchFunction={getBeerList}
        handleFilter={handleFilter}
        className="sidebar"
      />
      <CardList beerList={beers} />
    </div>
  );
}

export default App;
