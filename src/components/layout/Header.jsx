import React from 'react'
import { Link } from 'react-router-dom'
import { changeIsShowCart } from '../../store/slices/cart.silce'
import { useDispatch } from 'react-redux'

const Header = () => {
    const dispatch = useDispatch()

    const handleClickChangeShowCart = () => {
        dispatch(changeIsShowCart())
    }

    return (
        <section>
            <Link to="/">
                <h1>vLF e-commerce</h1>
            </Link>

            <nav>
                <Link to="/login" >
                    <i className='bx bx-user-circle'></i>
                </Link>
                <Link to="/purchases" >
                    <i className='bx bx-box' ></i>
                </Link>
                <button onClick={handleClickChangeShowCart} >
                    <i className='bx bx-cart-download'></i>
                </button>
            </nav>

        </section>
    )
}

export default Header