import React, { useContext, useEffect, useState } from 'react'
import CartItems from './CartItems';
import { Cart } from './context';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';
function AddToCart() {
    const { item, setCart } = useContext(Cart);
    const [address, setAddress] = useState("");
    const [name, setName] = useState("");
    const [phone, setPhone] = useState("")
    // console.log(item)    

    const navigate = useNavigate();
    const goTo = () => {


        navigate('/')
    }
    const notify = () => {
        toast.success('Your Order is booked', {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
        });
        // goTo();
    }
    const [total, setTotal] = useState(0);

    const SubmitHandler = () => {
        let NoError = true;
        console.log(name, phone, address)
        if (item.length === 0) {
            toast.error('Your Cart is Empty', {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",

            });
            NoError = false;
        }
        else {
            if (!name) {
                toast.error('User Name is Required!', {
                    position: "top-center",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "colored",

                });
                NoError = false;

            } else if (name.length <= 2 || name.length > 20) {

                toast.error("Username length should be from 3 to 19", {
                    position: "top-center",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "colored",
                });
                NoError = false;
            }
            if (!address) {
                toast.error("Address is Required ", {
                    position: "top-center",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "colored",
                });
                NoError = false;
            }
            if (!phone) {
                toast.error("Phone Number is Required", {
                    position: "top-center",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "colored",

                });
                NoError = false;
            } else if (phone.length !== 10) {
                toast.error("phone number length shoulb be 10", {
                    position: "top-center",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "colored",
                });
                NoError = false;
            }
        }


        if (NoError) {
            notify();

            setCart([]);

            goTo();

        }
    }
    // console.log(item)
    useEffect(() => {
        setTotal(item.reduce((acc, curr) => acc + Number(curr.price), 0));
    }, [item]);

    return (
        <>

            <div className='"bg-gray-100 mt-3'>
                <div className="container mx-auto mt-10">
                    <div className="flex shadow-md my-10">
                        <div className="w-3/4 bg-white px-10 py-10">
                            <div className="flex justify-between border-b pb-8">
                                <h1 className="font-semibold text-2xl">Shopping Cart</h1>
                                <h2 className="font-semibold text-2xl">{item.length} Items</h2>
                            </div>
                            <div className="flex mt-10 mb-5">
                                <h3 className="font-semibold text-gray-600 text-xs uppercase w-2/5">Product Details</h3>
                                <h3 className="font-semibold text-gray-600 text-xs uppercase w-1/5 text-center">Quantity</h3>
                                <h3 className="font-semibold text-gray-600 text-xs uppercase w-1/5">Price</h3>
                                <h3 className="font-semibold text-gray-600 text-xs uppercase w-1/5">Total</h3>
                            </div>

                            {item.map((prod) => (
                                <CartItems prod={prod} key={prod.id} total={total} setTotal={setTotal} />
                            ))}




                            <button className="flex font-semibold text-indigo-600 text-sm mt-10">

                                <svg className="fill-current mr-2 text-indigo-600 w-4" viewBox="0 0 448 512"><path d="M134.059 296H436c6.627 0 12-5.373 12-12v-56c0-6.627-5.373-12-12-12H134.059v-46.059c0-21.382-25.851-32.09-40.971-16.971L7.029 239.029c-9.373 9.373-9.373 24.569 0 33.941l86.059 86.059c15.119 15.119 40.971 4.411 40.971-16.971V296z" /></svg>
                                <button onClick={() => navigate('/booking')}>Continue Shopping</button>
                            </button>
                        </div>

                        <div id="summary" className="w-1/4 px-8 py-10">
                            <h1 className="font-semibold text-2xl border-b pb-8">Order Summary</h1>
                            <div className="flex justify-between mt-10 mb-5">
                                <span className="font-semibold text-sm uppercase">Items {item.length}</span>
                                <span className="font-semibold text-sm">{total}</span>
                            </div>
                            <div>
                                <label className="font-medium inline-block mb-3 text-sm uppercase">Shipping</label>
                                <h1 className="block p-2 text-gray-600 w-full text-sm">
                                    Standard shipping - 30.00
                                </h1>
                            </div>


                            <div className="py-10">
                                <label htmlFor="promo" className="font-semibold inline-block mb-3 text-sm uppercase">Name</label>
                                <input type="text" id="promo" placeholder="Enter your Addresss" className="p-4 text-sm w-full" value={name} onChange={(e) => setName(e.target.value)}
                                />
                            </div>


                            <div className="py-10">
                                <label htmlFor="promo" className="font-semibold inline-block mb-3 text-sm uppercase">Number</label>
                                <input type="Number" id="promo" placeholder="Enter your Addresss" className="p-4 text-sm w-full" value={phone} onChange={(e) => setPhone(e.target.value)} />
                            </div>


                            <div className="py-10">
                                <label htmlFor="promo" className="font-semibold inline-block mb-3 text-sm uppercase">Address</label>
                                <input type="text" id="promo" placeholder="Enter your Addresss" className="p-4 text-sm w-full" value={address} onChange={(e) => setAddress(e.target.value)} />
                            </div>



                            <div className="border-r">
                                <div className="flex font-semibold justify-between py-6 text-sm uppercase">
                                    <span>Total cost</span>
                                    <span>{total + 30}</span>
                                </div>
                                <button className="bg-indigo-500 font-semibold hover:bg-indigo-600 py-3 text-sm text-white uppercase w-full" onClick={SubmitHandler} >Checkout</button>
                                {/* <ToastContainer
                                /> */}

                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </>
    );
}



export default AddToCart