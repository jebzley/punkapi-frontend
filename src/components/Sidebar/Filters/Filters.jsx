import React from "react";

const Filters = () => {
  return (
    <form>
      <h2>Filters</h2>
      <h3>Beer Type</h3>
      <label for="lager">Lager</label>
      <input type="radio" name="beer-type" value="lager" />
      <label for="pale-ale">Pale Ale</label>
      <input type="radio" name="beer-type" value="pale-ale" />
      <label for="pilsner">Pilsner</label>
      <input type="radio" name="beer-type" value="pilsner" />
      <label for="wheat">Wheat Beer</label>
      <input type="radio" name="beer-type" value="wheat" />
      <label for="porter">Porter</label>
      <input type="radio" name="beer-type" value="porter" />
      <label for="stout">Stout</label>
      <input type="radio" name="beer-type" value="stout" />

      <h2>Sort By</h2>
      <h3>ABV</h3>
      <label for="abv-ascending">Ascending</label>
      <input type="radio" name="sorting" value="abv-ascending" />
      <label for="abv-descending">Descending</label>
      <input type="radio" name="sorting" value="abv-descending" />
      <h3>EBC</h3>
      <label for="abv-ascending">Ascending</label>
      <input type="radio" name="sorting" value="ebc-ascending" />
      <label for="abv-descending">Descending</label>
      <input type="radio" name="sorting" value="ebc-descending" />
      <h3>IBU</h3>
      <label for="ibu-ascending">Ascending</label>
      <input type="radio" name="sorting" value="ibu-ascending" />
      <label for="abv-descending">Descending</label>
      <input type="radio" name="sorting" value="ibu-descending" />
    </form>
  );
};

export default Filters;
