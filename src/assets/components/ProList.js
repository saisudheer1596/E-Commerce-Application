import React, { useEffect, useState } from 'react'
import Products from './Products'

function ProList() {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Fetch products from an API
        fetch('https://fakestoreapi.com/products')
          .then(response => response.json())
          .then(data => {
            setProducts(data);
            setLoading(false);
          })
          .catch(error => {
            console.error('Error fetching products:', error);
            setLoading(false);
          });
      }, []);

  return (
    <>
        
        
      <div className='product-container'>
        <div className='product-heading'>
            <h4>PRODUCTS</h4>
        </div>
          <div className='product'>
            {products.map(product => (
                <Products key={product.id} product={product} />
            ))}
          </div>
      </div>
    </>
  )
}

export default ProList