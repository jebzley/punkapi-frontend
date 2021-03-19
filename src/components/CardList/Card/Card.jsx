import React from "react";
import styles from "./Card.module.scss";
import CardContent from "./CardContent";
import { useState } from "react";

const Card = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const beerInfo = props.data;
  const name = beerInfo.name;
  const tagline = beerInfo.tagline;
  const abv = beerInfo.abv;
  
  const panelOpener = () => {
    setIsOpen(!isOpen)
  }
  
  const contentResizer = () =>{
    return isOpen ? 'content' : 'hidden'
  }
  return (
    <div className={styles.card} onClick = {panelOpener}>
      <div className={styles.topBar}>
        <div className={styles.title}>
        <h1>{name}</h1>
        <h2>{tagline}</h2>
        </div>
        <h3>ABV: {abv}</h3>
      </div>
      {isOpen ? <CardContent beerInfo = {beerInfo} openFunc={contentResizer}/> : <></>}
      
    </div>
  );
};

export default Card;
