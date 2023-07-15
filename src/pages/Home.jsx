import axios from 'axios'
import { useEffect, useState } from 'react'
import ProductCard from '../components/home/ProductCard'
import { axiosEcommerce } from '../utils/configAxios'

const Home = () => {
    const [categories, setCategories] = useState([])

    const [products, setProducts] = useState([])

    const [productName, setProductName] = useState("")


    const handleSubmit = (e) => {
        e.preventDefault()
        const newProductName = e.target.productName.value
        setProductName(newProductName)

    }
    const productsByName = products.filter((product) => product.title.toLowerCase().includes(productName.toLowerCase()))
    console.log(productsByName)





    useEffect(() => {

        axiosEcommerce
            .get("categories")
            .then((res) => setCategories(res.data))
            .catch((err) => console.log(err))
    }, [])

    useEffect(() => {
        axiosEcommerce
            .get("products")
            .then((res) => setProducts(res.data))
            .catch((err) => console.log(err))
    }, [])

    return (
        <main className="px-4 ">
            <form onSubmit={handleSubmit}>
                <div>
                    <input id="productName" type="text" placeholder="What are you looking for?" />
                    <button><i className='bx bx-search-alt'  ></i></button>

                    <ul>
                        <li>All</li>
                        {
                            categories.map(category => <li key={category.id}>{category.name}</li>)
                        }
                    </ul>
                </div>
            </form>
            <section className='grid gap-8 py-6'>
                {productsByName.map((product) => (<ProductCard key={product.id} product={product} />))
                }

            </section>




        </main>
    )
}

export default Home