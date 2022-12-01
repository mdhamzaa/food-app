import React, { useContext } from 'react'
import { Cart } from './context';




function Card({ product }) {


    const { item, setCart } = useContext(Cart);



    return (


        <div className="grid bg-white px-6 pt-4 rounded-xl shadow-lg transform hover:scale-105 transition duration-500">
            <h3 className="mb-3 text-xl font-bold text-indigo-600">{product.name}</h3>
            <div className="relative">
                <img className="rounded-xl" src={product.image} alt={product.name + " image"} />


            </div>
            <h1 class="mt-4 text-gray-800 text-sm font-bold cursor-pointer">{product.description}</h1>
            <div className="my-2">
                <div className="flex space-x-1 items-center">
                    <span style={{ color: "red" }}>
                        ₹
                    </span>

                    <p>{product.price}</p>
                </div>


                {!!(item.filter((c) => c.id === product.id)[0]) ? (

                    <button
                        onClick={() => {

                            setCart(item.filter((c) => c.id !== product.id))

                        }}
                        className="mt-4 py-2 mb-10 text-xl w-full text-white bg-indigo-600 rounded-xl shadow-lg" >Remove From Cart
                    </button>
                ) : (
                    <button
                        onClick={() => {

                            setCart([...item, product])

                        }}

                        className="mt-4 py-2 mb-10 text-xl w-full text-white bg-indigo-600 rounded-xl shadow-lg" >Add to Cart
                    </button>
                )}
            </div>
        </div >



    )
}

export default Card