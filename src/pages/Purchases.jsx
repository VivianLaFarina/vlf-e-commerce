import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { axiosEcommerce, getConfig } from '../utils/configAxios'
import PurchaseCard from '../components/purchases/purchaseCard'

const Purchases = () => {
    const [purchases, setPurchases] = useState([])

    useEffect(() => {
        axiosEcommerce
            .get("purchases", getConfig())
            .then((res) => setPurchases(res.data))
            .catch((err) => console.log(err))

    }, [])

    return (
        <main className='px-2 max-w-[1000px] mx-auto'>
            <section className='flex gap-2 items-center my-3s '>
                <Link to='/'>Home</Link>
                <div className=" h-[5px] aspect-square bg-red-500 rounded-full"></div>
                <span className='font-bold'> Purchases</span>
            </section>
            <section className='grid gap-6 py-6'>
                {
                    purchases.map(purchase => <PurchaseCard key={purchase.id} purchase={purchase} />)
                }



            </section>
        </main>
    )
}

export default Purchases