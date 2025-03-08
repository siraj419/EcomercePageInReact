import './products.css';
import Card from './Card';

import { useContext } from 'react';
import { DataContext } from '../store/store';

function Products() {
    const data = useContext(DataContext);
    return <section className='products-section'>
                {
                    data.map((product, index)=>(
                        <Card product={product}/>
                    ))
                }
            </section>
}

export default Products;