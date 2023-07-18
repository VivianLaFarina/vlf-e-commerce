import { useDispatch, useSelector } from 'react-redux'
import { changeIsShowCart, getCartProducts } from '../../store/slices/cart.slice'
import { useEffect } from 'react'



const Cart = () => {

    const { isShowCart, products } = useSelector(store => store.cart)
    const dispatch = useDispatch()


    const handleClickChangeShowCart = () => {
        dispatch(changeIsShowCart())
    }

    useEffect(() => {
        if (isShowCart) {
            dispatch(getCartProducts())
        }
    }, [isShowCart])



    return (
        <section className={`fixed top-[80px] right-0  bg-white shadow-2xl min-h-[calc(100vh_-_80px)] w-[300px] ${isShowCart ? "right-0" : "-right-full"} duration-200 p-4 grid grid-rows-[auto_1fr_auto]`}>
            <h2 className=' text-xl font-bold'>Shopping Cart</h2>
            <i onClick={handleClickChangeShowCart} className='bx bx-exit-fullscreen absolute top-2 right-3 text-3xl hover:text-red-700 cursor-pointer rounded-md'></i>
            <section>

            </section>
            <section className=' grid grid-cols-2'>

                <span>Total</span>
                <h4 className='text-end'>$ 333</h4>
                <button className=' w-full col-span-2 bg-red-500 py-2 text-white  hover:bg-red-700 transition-colors rounded-lg mt-6 shadow-lg '>Check out</button>
            </section>

        </section>
    )
}

export default Cart