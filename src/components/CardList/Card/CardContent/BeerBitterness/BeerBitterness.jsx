import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const BeerBitterness = (props) => {
  const bitterness = props.bitterness;

  const bitternessDescriber = (ibu) => {
    if (ibu < 16) return ` ${ibu} IBU - Slightly Bitter`;
    else if (ibu < 51) return ` ${ibu} IBU - Medium Bitter`;
    else if (ibu < 71) return ` ${ibu} IBU - Bitter`;
    else return ` ${ibu} IBU - Extremely Bitter`;
  };

  const bitternessStyler = (ibu) => {
    if (ibu < 16) return "#05fc91";
    else if (ibu < 51) return "#0dfc05";
    else if (ibu < 71) return "#d3fc05";
    else return "#fc2105";
  };

  return (
    <li>
      <FontAwesomeIcon
        icon="lemon"
        style={{ color: bitternessStyler(bitterness) }}
        size={props.size}
      />
      {bitternessDescriber(bitterness)}
    </li>
  );
};

export default BeerBitterness;
