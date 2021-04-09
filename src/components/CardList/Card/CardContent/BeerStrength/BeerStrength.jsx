import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const BeerStrength = (props) => {
  
  const strengthDescriber = (abv) => {
    if (abv < 4) return `${abv}% ABV - Weak`;
    else if (abv < 5) return `${abv}% ABV - Average`;
    else if (abv < 10) return `${abv}% ABV - Strong`;
    else return `${abv}% ABV - Lethal`;
  }

  const strengthStyler = (abv) => {
    if (abv < 4) return <FontAwesomeIcon icon="meh" style={{color: "#606060"}}/>
    else if (abv < 5) return <FontAwesomeIcon icon="smile" style={{color: "#efbc13"}}/>
    else if (abv < 10) return <FontAwesomeIcon icon="smile-beam" style={{color: "#ef7a13"}}/>
    else return <FontAwesomeIcon icon="dizzy" style={{color: "#4dbc0d"}}/>
  }

  return <li>{strengthStyler(props.strength)} {strengthDescriber(props.strength)}</li>;
};

export default BeerStrength;
