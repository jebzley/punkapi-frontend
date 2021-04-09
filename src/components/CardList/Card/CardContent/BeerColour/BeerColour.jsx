import React from "react";
import styles from "./BeerColour.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const BeerColour = (props) => {
  const colour = props.colour;

  const beerColourPicker = (colour) => {
    if (colour < 10) return "#f9d875";
    else if (colour < 13) return "#efc137";
    else if (colour < 21) return "#e5b114";
    else if (colour < 31) return "#f29d0c";
    else if (colour < 46) return "#aa7400";
    else if (colour < 76) return "#723b00";
    else if (colour < 121) return "#422200";
    else return "#140e00";
  };

  const beerColourDescriber = (colour) => {
    if (colour < 10) return ` ${colour} EBC - Pale`;
    else if (colour < 13) return ` ${colour} EBC - Blonde`;
    else if (colour < 21) return ` ${colour} EBC - Gold`;
    else if (colour < 31) return ` ${colour} EBC - Amber`;
    else if (colour < 46) return ` ${colour} EBC - Copper`;
    else if (colour < 76) return ` ${colour} EBC - Brown`;
    else if (colour < 121) return ` ${colour} EBC - Dark Brown`;
    else return ` ${colour} EBC - Black`;
  };

  return (
    <li>
      <FontAwesomeIcon icon="beer" color={beerColourPicker(colour)}  size={props.size}/>
      {beerColourDescriber(colour)}
    </li>
  );
};

export default BeerColour;
