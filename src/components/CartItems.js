import React, { useContext, useState } from 'react'
import { Cart } from './context'

function CartItems({ prod, setTotal }) {



    const [count, setCount] = useState(1);
    const { item, setCart } = useContext(Cart);
    return (
        <div className="flex items-center hover:bg-gray-100 -mx-8 px-6 py-5">
            <div className="flex w-2/5">
                <div className="w-20">
                    <img className="h-24" src={prod.image} alt="" />
                </div>
                <div className="flex flex-col justify-between ml-4 flex-grow">
                    <span className="font-bold text-sm">{prod.name}</span>

                    <button
                        onClick={() => {

                            setCart(item.filter((c) => c.id !== prod.id))

                        }}
                        className="font-semibold hover:text-red-500 text-gray-500 text-xs">Remove</button>
                </div>
            </div>
            <div className="flex justify-center w-1/5">
                <svg onClick={

                    () => {
                        if (count > 1) {
                            setCount(prev => prev - 1)
                            setTotal(prevT => prevT - prod.price)
                        }
                    }
                } className="fill-current text-gray-600 w-3" viewBox="0 0 448 512"><path d="M416 208H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h384c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z" />
                </svg>

                <span className="mx-2 border text-center w-8" >{count}</span>

                <svg onClick={() => {
                    setCount(prev => prev + 1)
                    setTotal(prevT => prevT + prod.price)

                }} className="fill-current text-gray-600 w-3" viewBox="0 0 448 512">
                    <path d="M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z" />
                </svg>
            </div>
            <span className="text-center w-1/5 font-semibold text-sm">{prod.price}</span>
            <span className="text-center w-1/5 font-semibold text-sm">{prod.price * count}</span>
        </div>
    )
}

export default CartItems