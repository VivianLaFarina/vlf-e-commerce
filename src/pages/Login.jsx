import { useForm } from 'react-hook-form'
import { Link } from 'react-router-dom'
import { axiosEcommerce } from '../utils/configAxios'
import { useDispatch, useSelector } from 'react-redux'
import { logOutUser, loginUser } from '../store/slices/userInfo.slice'

const Login = () => {

    const { register, handleSubmit } = useForm()

    const { token, user } = useSelector(store => store.userInfo)

    const dispatch = useDispatch()

    const submit = (data) => {
        dispatch(loginUser(data))
    }
    const handleClickLogout = () => {
        dispatch(logOutUser())
    }

    return (
        <main className=' bg-gray-400 grid place-content-center'>
            {
                token ? (
                    <section className=' bg-white p-4 rounded-md w-[300px] grid gap-6 text-center text-slate-400' > <i class='bx bx-user-circle text-8xl'></i>
                        <h3 className=' capitalize text-3xl  font-bold text-gray-600'>{user?.firstName} {user?.lastName}</h3>
                        <button onClick={handleClickLogout} className=' bg-red-500 text-white py-2 rounded-md block w-full hover:bg-red-700 transition-colors text-xl '>Logout</button>
                    </section>
                ) : (
                    <form onSubmit={handleSubmit(submit)} className=' bg-white p-4 rounded-md max-w-[360px] grid gap-6'>
                        <h2 className=' text-3xl font-[500] text-gray-700'>Welcome! Enter your email and password to continue</h2>

                        <section className=' bg-[#d8f5fd] p-4 rounded-md py-2'>
                            <h3 className=' text-center font-bold '>Test Data</h3>
                            <div className=' flex gap-2 items-center'>
                                <i className='bx bx-envelope' ></i>
                                <span>john@gmail.com</span>
                            </div>
                            <div className=' flex gap-2 items-center'>
                                <i className='bx bx-lock-open' ></i>
                                <span>john1234</span>
                            </div>
                        </section>
                        <div className='grid gap-1'>
                            <label htmlFor="email">E-mail</label>
                            <input className=' border-[1px] border-gray-300 p-1 outline-none rounded-sm' type="email" typeof='email'
                                {...register("email", {
                                    required: true
                                })} />


                        </div>
                        <div className='grid gap-1'>
                            <label htmlFor="password">Password</label>
                            <input className=' border-[1px] border-gray-300 p-1 outline-none' type="password" typeof='password'
                                {...register("password", {
                                    required: true
                                })} />


                        </div>
                        <button className=' block w-full py-2 bg-red-500 hover:bg-red-700 transition-colors text-slate-50 text-2xl rounded-md'>Login</button>
                        <span className=' text-lg'>Don't have an account? <Link className=' text-blue-600' to="#">Sign up</Link></span>

                    </form>

                )
            }

        </main>
    )
}

export default Login