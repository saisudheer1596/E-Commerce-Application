import React from 'react'



function Products({product}) {

    

  return (
    <>
    
      
        <div className="product-card">
            <img src={product.image} alt='image' className="product-image" />
            <h2 className="product-name">{product.title}</h2>
            <p className="product-price">${product.price}</p>
            <div className='product-btn'>
              <button className="add-to-cart-button">Add to Cart</button>
              <button className="add-to-list-button">Add to wish list</button>
            </div>
        </div>
      

    
    </>
  )
}

export default Products