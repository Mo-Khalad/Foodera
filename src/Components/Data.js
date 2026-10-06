import React from 'react'
import Products from './Products/Products'
import pizza from './../images/pizza1.jpeg';
import fishes from './../images/fishes.jpeg';
import chickens from './../images/chickens1.webp';

const responsive=[
  {
    image:pizza,   
    type:"pizza",   
    tittle:"Large pizza with meat",   
    price:'290 EGP'
  },
  {
    image:pizza,   
    type:"pizza",   
    tittle:"Large pizza with meat",   
    price:'290 EGP'
  },
  {
    image:pizza,   
    type:"pizza",   
    tittle:"Large pizza with meat",   
    price:'290 EGP'
  },
  {
    image:pizza,   
    type:"pizza",   
    tittle:"Large pizza with meat",   
    price:'290 EGP'
  },
  {
    image:pizza,   
    type:"pizza",   
    tittle:"Large pizza with meat",   
    price:'290 EGP'
  },
  {
    image:pizza,   
    type:"pizza",   
    tittle:"Large pizza with meat",   
    price:'290 EGP'
  },
  {
    image:fishes,   
    type:"fishes",   
    tittle:"Large pizza with meat",   
    price:'290 EGP'
  },
  {
    image:fishes,   
    type:"fishes",   
    tittle:"Large pizza with meat",   
    price:'290 EGP'
  },
  {
    image:fishes,   
    type:"fishes",   
    tittle:"Large pizza with meat",   
    price:'290 EGP'
  },
  {
    image:fishes,   
    type:"fishes",   
    tittle:"Large pizza with meat",   
    price:'290 EGP'
  },
  {
    image:fishes,   
    type:"fishes",   
    tittle:"Large pizza with meat",   
    price:'290 EGP'
  },
  {
    image:fishes,   
    type:"fishes",   
    tittle:"Large pizza with meat",   
    price:'290 EGP'
  },
  {
    image:chickens,   
    type:"chickens",   
    tittle:"Large pizza with meat",   
    price:'290 EGP'
  },
  {
    image:chickens,   
    type:"chickens",   
    tittle:"Large pizza with meat",   
    price:'290 EGP'
  },
  {
    image:chickens,   
    type:"chickens",   
    tittle:"Large pizza with meat",   
    price:'290 EGP'
  },
  {
    image:chickens,   
    type:"chickens",   
    tittle:"Large pizza with meat",   
    price:'290 EGP'
  },
  {
    image:chickens,   
    type:"chickens",   
    tittle:"Large pizza with meat",   
    price:'290 EGP'
  },
  {
    image:chickens,   
    type:"chickens",   
    tittle:"Large pizza with meat",   
    price:'290 EGP'
  },
  
]
const Data = () => {
  return (
 <>
   <Products responsive={responsive} />
 </>
  )
}

export default Data
