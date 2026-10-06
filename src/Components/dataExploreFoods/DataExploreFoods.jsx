import React from 'react';
import Classes from './DataExploreFoods.module.css';

const DataExploreFoods = ({image , text}) => {

    return (

    <div className={Classes.DataExploreFoods}>
       <div>
        <img src={image} width={400} alt={text}/>
        <h3>{text}</h3>
        <p>ime: 15 - 20 Minutes | Serves: 1</p>
        <h2>$10.50  <del>$13.60 </del></h2>
        <button>buy now</button>
      </div>    
    </div>
  )
}

export default DataExploreFoods ;




