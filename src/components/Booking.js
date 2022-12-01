import React, { useState } from 'react'
import Card from './Card'
// import { Cart } from './context';
import axios from 'axios';


function Booking() {



    const [products, setProducts] = useState([]);
    // const { item, setCart } = useContext(Cart);
    // console.log(item)

    // const options = {
    //     method: 'GET',
    //     url: 'https://kfc-chickens.p.rapidapi.com/chickens',
    //     headers: {
    //         'X-RapidAPI-Key': '1c5c756198mshd533bb32cf4bd63p1e76b2jsne269e032c680',
    //         'X-RapidAPI-Host': 'kfc-chickens.p.rapidapi.com'
    //     }
    // };


    // axios.request(options).then(function (response) {
    //     console.log(response.data);
    //     setProducts(response.data)
    // }).catch(function (error) {
    //     console.error(error);
    // });

    const getallDetail = async () => {
        const data = await axios.get("http://127.0.0.1:3003/menu");
        console.log(data.data)
        setProducts(data.data);

    }
    React.useEffect(() => {
        getallDetail();

    }, [])
    const [data, setData] = useState("")

    const Search = async () => {
        const d = await axios.get(`http://localhost:3003/menu?name_like=${data}`);
        console.log(d.data)
        setProducts(d.data);
    }

    return (

        <div>

            <div className="bg-slate-100 h-screen px-10 py-5 w-full">


                <div className="flex items-center p-5 bg-white rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition duration-500">
                    <div className="flex bg-gray-100 p-4 w-5/6 mr-10 space-x-4 rounded-lg">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 opacity-30" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                        </svg>
                        <input className="bg-gray-100 outline-none" type="text" placeholder="Article name or keyword..." value={data} onChange={(e) => setData(e.target.value)} />
                    </div>

                    <div className="bg-red-600 py-3 px-5 text-white font-semibold rounded-lg hover:shadow-lg transition duration-3000 cursor-pointer">
                        <span onClick={Search}>Search</span>
                    </div>
                </div>













































                {/* card */}




                <div className="grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 py-5 gap-5">
                    {products.map((prod) => (
                        <Card product={prod} key={prod.id} />
                    ))}



                </div>


            </div>



        </div>
    )
}

export default Booking