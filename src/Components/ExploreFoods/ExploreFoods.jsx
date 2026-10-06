import React from 'react'
import Classes from './ExploreFoods.module.css';
import RainbowVegetableSandwich from '../../images/Rainbow Vegetable Sandwich.jpg';
import VegetarianBurger from '../../images/Vegetarian Burger.jpg';
import RaspberryStuffedFrenchToast from '../../images/Raspberry Stuffed French Toast.jpg';
import DataExploreFoods from '../dataExploreFoods/DataExploreFoods';

const dataContentExploreFoods=[
   {image:RainbowVegetableSandwich , text:"Rainbow Vegetable Sandwich"},
   {image:VegetarianBurger , text:"Vegetarian Burger"},
   {image:RaspberryStuffedFrenchToast , text:"Raspberry Stuffed French Toast"},
]
const ExploreFoods = () => {
  const dataExploreFoodsCopy =[...dataContentExploreFoods]
  return (
    <>
    <div className={Classes.exploreFoods}>
      <div className={Classes.exploreFoodsContents}>
          <h2>Explore Our Foods</h2>
          <p>
            We have a variety of foods like the rainbow veggie sandwich, 
            veggie burger, and blueberry French toast.
          </p>
       </div>
    </div>

   <div className={Classes.cardProduct}>
     {dataExploreFoodsCopy.map(({image , text})=><DataExploreFoods image={image} text={text}/>)}
   </div>

   </>
  )
}

export default ExploreFoods
