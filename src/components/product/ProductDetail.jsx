import React, { useEffect, useState } from 'react'
import { axiosEcommerce } from '../../utils/configAxios'

const ProductDetail = ({ productId }) => {

    const [productData, setProductData] = useState()
    useEffect(() => {
        axiosEcommerce
            .get(`products/${productId}`)
            .then((res) => setProductData(res.data))
            .catch((err) => console.log(err))

    }, [])
    return (
        <section>
            <section>
                <div>
                    <img src={productData?.images[0].url} alt="" />
                </div>
            </section>

            <h4 className=' text-gray-400 font-bold mt-6 '>{productData?.brand}</h4>
            <h3 className=' font-bold text-lg  ml-2'>{productData?.title}</h3>

            <section className='grid grid-cols-2 mt-6 '>
                <article>
                    <h4 className=' text-gray-400 font-bold '>Price</h4>
                    <span className='font-bold text-lg ml-2' > ${productData?.price}</span>

                </article>

                <article>
                    <h4 className=' text-gray-400 font-bold'>Quantity</h4>
                    <div className='flex items-center'>
                        <button className=' border-[1px] p-2 px-4'>-</button>

                        <span className=' border-[1px] p-2 px-4 border-x-0'>1</span>
                        <button className=' border-[1px] p-2 px-4'>+</button>
                    </div>
                </article>
            </section>
            <button className=' w-full bg-red-500 py-2 text-white  hover:bg-red-600 transition-colors rounded-sm mt-6 '>
                Add to Cart <i className='bx bx-cart'></i>
            </button>

            <p className='text-sm my-6 '>{productData?.description}</p>

        </section>
    )
}

export default ProductDetail