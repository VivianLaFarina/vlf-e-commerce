import { Link, useParams } from 'react-router-dom'
import ProductDetail from '../components/product/ProductDetail'
import SimilarProducts from '../components/product/SimilarProducts'

const Product = () => {


    const { id } = useParams()



    return (
        <main className='px-2'>
            <section className='flex gap-2 items-center'>
                <Link to='/'>Home</Link>
                <div className=" h-[5px] aspect-square bg-red-500 rounded-full"></div>
                <span className='font-bold'>samgung galaxy</span>
            </section>

            <ProductDetail productId={id} />

        </main>
    )
}

export default Product