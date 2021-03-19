import React from "react";
import styles from "./CardContent.module.scss"
const CardContent = (props) => {
  const beerInfo = props.beerInfo;
  const openFunc = props.openFunc;
  return (
    <div className={styles.content}>
      <img src={beerInfo.image_url} alt={`${beerInfo.name}`} />
      <p>{beerInfo.description}</p>
    </div>
  );
};

export default CardContent;
