import React from 'react'
import Classes from './FrequentlyAsked.module.css';
import FrequentlyAskedText from '../FrequentlyAskedText/FrequentlyAskedText';

const text =['Is Foodera Bread really baked fresh each day?' , 'Do you bake breads containing animal fats or products?'
  , 'Can I order your products online?' , 'When are you opening a shop near me?' ]

const FrequentlyAsked = () => {
const textCopy = [...text];

  return (
    <div className={Classes.FrequentlyAsked}>
        <h2>Frequently Asked Questions</h2>
        {textCopy.map((text)=><FrequentlyAskedText text={text}/>)}     
    </div>
  )
}

export default FrequentlyAsked
