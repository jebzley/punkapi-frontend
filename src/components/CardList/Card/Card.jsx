import React from "react";
import styles from "./Card.module.scss";
import CardContent from "./CardContent";
import { useState } from "react";


const Card = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const beerInfo = props.data;
  const name = beerInfo.name;
  
  const panelOpener = () => {
    setIsOpen(!isOpen)
  }
  
  return (
    <div className={styles.card} onClick = {panelOpener}>
      <div className={styles.topBar}>
        <div className={styles.title}>
        <h1>{name}</h1>
        </div>
      </div>
      
      {isOpen ? 
          <CardContent beerInfo = {beerInfo}/>: <></>}
      
    </div>
  );
};

export default Card;
