import React from 'react'
import { useParams } from 'react-router-dom'

const Products = () => {

    const { id } = useParams()

    return (
        <div>Products {id}</div>
    )
}

export default Products