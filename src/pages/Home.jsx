import axios from 'axios'
import { useEffect, useState } from 'react'
import ProductCard from '../components/home/ProductCard'
import { axiosEcommerce } from '../utils/configAxios'

const Home = () => {
    const [categories, setCategories] = useState([])

    const [products, setProducts] = useState([])




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
            <form>
                <div>
                    <input type="text" placeholder="What are you looking for?" />
                    <button><i className='bx bx-search-alt'  ></i></button>

                    <ul>
                        <li>All</li>
                        {
                            categories.map(category => <li key={category.id}>{category.name}</li>)
                        }
                    </ul>
                </div>
            </form>
            <section className='grid gap-8'>
                {
                    products.map(product => <ProductCard key={product.id} product={product} />)
                }

            </section>




        </main>
    )
}

export default Home