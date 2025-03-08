import './Recommended.css';
import { useState, useContext } from 'react';
import FilterButton from '../components/FilterButton/FilterButton';
import Products from '../Products/Products';

import { BrandContext } from '../store/store';

function Recommended() {
  
  const {brand, setBrand} = useContext(BrandContext);

  return (
    <section className='recommended-section'>
       <h2>Recommended</h2>

        <section className='filters'>
            <FilterButton text={'All Products'} onClick={setBrand} clicked={brand === 'All Products'}/>
            <FilterButton text={'Nike'} onClick={setBrand} clicked={brand === 'Nike'}/>
            <FilterButton text={'Adidas'} onClick={setBrand} clicked={brand === 'Adidas'}/>
            <FilterButton text={'Puma'} onClick={setBrand} clicked={brand === 'Puma'}/>
            <FilterButton text={'Vans'} onClick={setBrand} clicked={brand === 'Vans'}/>
        </section>

        <Products />
    </section>
  )
}

export default Recommended;