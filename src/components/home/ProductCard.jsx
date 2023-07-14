import React from 'react'

const ProductCard = ({ product }) => {
    console.log(product)
    return (
        <article className=" border-[1px] border-gray-300">
            <div className='p-4'>

                <img src={product.images[0].url} alt="" />
            </div>
            <section>

                <h4>{product.brand}</h4>
                <h3>{product.title}</h3>
                <h4>Price</h4>
                <span>$ {product.price}</span>
                <button>
                    <i className='bx bx-cart-alt'></i>
                </button>
            </section>
        </article>
    )
}

export default ProductCard