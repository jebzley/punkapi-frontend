// Fetch Recipes returns a promise... what does that mean??/
export const fetchBeers = (searchText) => {

  const formattedSearchText = searchText.split(' ').join('_');

  if (formattedSearchText) {
    return fetch(`https://api.punkapi.com/v2/beers?beer_name=${formattedSearchText}&per-page=99999`)
      .then((response) => {
        return response.json();
      })
      .then((response) => {
        return response;
      });
  }
  
  else return fetch(`https://api.punkapi.com/v2/beers`)
  .then((response) => {
    return response.json();
  })
  .then((response) => {
    return response;
  });
};