import React, { useRef, useState } from 'react' ;
import Style from './Products.module.css';

const Products =({responsive}) => {    
  const productName = useRef();
  const [data]= useState(responsive);
  const [values , getValues]=useState('');

const searchingForFoods=()=>getValues(productName.current.value);
return (
  <>
      <div className={Style.coverProducts}> 
        <div className={Style.restaurantProductsText}>
          <h2>Restaurant Products</h2>
        </div>

        <div className={Style.products}>      
          {values==='' ? '':
             data.map((product , index)=>product.type===values? 
            <div key={index} className={Style.productsContent}>
                <img src={product.image} width={270} alt={product.type}/>
                <h2>{product.tittle}</h2>
                <p>{product.type}</p>
                <span>{product.price}</span>
                <button>buy now</button>
                <button>product details</button>
            </div>:''
           )
          }
         {
          values==='pizza' ||values==='fishes' || values=== 'chickens' ? "" : 
          values === '' ? <h5>Search for one of the foods on the list</h5> : 
          <h5>This food is not on the menu</h5>
         } 
        </div>

        <div className={Style.buttonsChooseFoods}>
          <input ref={productName} type='text' placeholder='search for foods'/>
          <button onClick={searchingForFoods}>Search</button>
          <h3>pizza</h3>
          <h3>fishes</h3>
          <h3>chickens</h3>     
        </div>
      </div>
    </>
  );
}
export default Products




 