import React from "react";
import styles from "./CardContent.module.scss";
import BeerColour from "./BeerColour";
import BeerBitterness from "./BeerBitterness";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Anime from "react-anime";

const CardContent = (props) => {
  const beerInfo = props.beerInfo;
  const beerColourPicker = props.beerColourPicker;

  return (
    <Anime
      easing="easeOutElastic"
      duration={1000}
      direction="normal"
      loop={false}
      height={250}
    >
      <div className={styles.content}>
        <img src={beerInfo.image_url} alt={`${beerInfo.name}`} />
        <div className={styles.beerContent}>
          <div className={styles.beerDescription}>
            <h2>{beerInfo.tagline}</h2>
            <p>First brewed: {beerInfo.first_brewed}</p>
            <p>{beerInfo.description}</p>
          </div>
          <div className={styles.beerFacts}>
            <h2>Information</h2>
            <ul>
              <li><FontAwesomeIcon icon="dizzy" /> ABV: {beerInfo.abv}</li>
              <BeerColour colour={beerInfo.ebc} />
              <BeerBitterness bitterness = {beerInfo.ibu} />
            </ul>
          </div>
        </div>
      </div>
    </Anime>
  );
};

export default CardContent;
