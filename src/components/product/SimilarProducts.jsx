import React, { useEffect, useState } from 'react'
import { axiosEcommerce } from '../../utils/configAxios'
import Product from '../../pages/Product'
import ProductCard from '../home/ProductCard'

const SimilarProducts = ({ categoryId, productId }) => {

    const [SimilarProducts, setSimilarProducts] = useState([])
    useEffect(() => {
        if (categoryId) {
            axiosEcommerce
                .get(`products?categoryId=${categoryId}`)
                .then((res) => {
                    const otherProducts = res.data.filter(product => product.id !== productId)
                    setSimilarProducts(otherProducts)

                })
                .catch((err) => console.log(err))
        }


    }, [categoryId])

    return (
        <section>
            <h2>Discover similar items</h2>
            <section>
                {
                    SimilarProducts.map(product => <ProductCard key={product.id} product={product} />)
                }

            </section>
        </section>
    )
}

export default SimilarProducts