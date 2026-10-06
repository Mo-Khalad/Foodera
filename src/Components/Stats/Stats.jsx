import React from 'react'
import Classes from './Stats.module.css'
const Stats = () => {
  return (
    <div className={Classes.stats}>
      <div className={Classes.statsContent}>
            <h2>1287+</h2>
            <p>SAVINGS</p>
      </div>  
      <div className={Classes.statsContent}>
            <h2>7110+</h2>
            <p>GLOBES</p>
      </div>  
      <div className={Classes.statsContent}>
            <h2>1440+</h2>
            <p>ROCKETS</p>
      </div>  
      <div className={Classes.statsContent}>
            <h2>5786+</h2>
            <p>PHOTOS</p>
      </div>  
     
    </div>
  ) 
}

export default Stats
