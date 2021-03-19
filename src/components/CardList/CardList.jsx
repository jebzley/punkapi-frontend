import React from 'react'
import Card from './Card'
import styles from './CardList.module.scss'

const CardList = (props) => {
  const { beerList } = props;
  return (
    <div className = {styles.cardList}>
      {beerList.map(beer => {
        return <Card data={beer} key={beer.name}/>
      })}
    </div>
  )
}

export default CardList
