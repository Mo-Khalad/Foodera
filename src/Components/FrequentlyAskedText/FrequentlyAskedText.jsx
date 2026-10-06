import React from 'react';
import Classes from './FrequentlyAskedText.module.css';

const FrequentlyAskedText = ({text}) => {
  return (
    <div className={Classes.FrequentlyAskedText}>
        <h4><span>~</span>{text}</h4>
        <p>
           Far far away, behind the word mountains, far from the countries Vokalia 
           and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove
           right at the coast of the Semantics, a large language.
        </p>
    </div>
  )
}

export default FrequentlyAskedText
