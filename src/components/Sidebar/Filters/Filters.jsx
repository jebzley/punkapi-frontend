import React from "react";

const Filters = (props) => {
  
  return (
    <form onChange={(e) => props.handleFilter(props.searchText, e)}>
      <h2>Sort By</h2>
      <h3>ABV</h3>
      <label for="abv-ascending">Ascending</label>
      <input type="radio" name="sorting" value="abv-ascending" />
      <label for="abv-descending">Descending</label>
      <input type="radio" name="sorting" value="abv-descending" />
      <h3>EBC</h3>
      <label for="ebc-ascending">Ascending</label>
      <input type="radio" name="sorting" value="ebc-ascending" />
      <label for="ebc-descending">Descending</label>
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
