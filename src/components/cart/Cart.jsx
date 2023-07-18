import { useSelector } from 'react-redux'
import store from '../../store'

const Cart = () => {

    const { isShowCart } = useSelector(store => store.cart)
    console.log(isShowCart)
    return (
        <section className={`fixed top-0 right-0  bg-white shadow-2xl min-h-screen w-[300px] ${isShowCart ? "right-0" : "-right-full"} duration-200`}>Cart</section>
    )
}

export default Cart