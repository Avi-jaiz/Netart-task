import React from 'react';
import '../styles/products.css';
import products_pic from '../files/products_pic.png'

function Products() {
  return (
    <div className='products'>
        
    <p>INSTALLED OVER 10 LAKHS STAR RATED PUMPSETS ACROSS THE COUNTRY RESULTING IN A CUMULATIVE SAVING OF MORE THAN 9,000 MILLION UNITS OF POWER FOR THE NATION </p>

    
<img src ={products_pic} alt='product-pic' className='product-catalogue' />


<p className='product-line'>Valves- Pumps-pipes- IoT Drives &amp; Controllers- Wires &amp; Cables- Solar Systems- Motors </p>

    
</div>
  )
}

export default Products