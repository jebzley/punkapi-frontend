// Fetch Recipes returns a promise... what does that mean??/
export const fetchBeers = (searchText) => {
  if (searchText) {
    return fetch(`https://api.punkapi.com/v2/beers?beer_name=${searchText}`)
      .then((response) => {
        return response.json();
      })
      .then((response) => {
        console.log(`https://api.punkapi.com/v2/beers?beer_name=${searchText}`)
        return response;
      });
  }
  else return fetch(`https://api.punkapi.com/v2/beers`)
  .then((response) => {
    return response.json();
  })
  .then((response) => {
    console.log(`https://api.punkapi.com/v2/beers`)
    return response;
  });
};
