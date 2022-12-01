import React from 'react'
import { ToastContainer } from 'react-toastify'
import account from '../images/account.png'
import breakfast from '../images/breakfast.png'
import hamburger from '../images/Hamburger.png'
import Step from './Step'


function Home() {
    const data = {

        step1: {
            title: 'For to booking',
            heading: 'Search in All the Foods!!!',
            description: 'Book the Food You Want to Eat',
            img: account,
            alternate: false,
        },
        step2: {
            title: 'Explore while shopping',
            heading: 'Shop for your favorites',
            description: 'Shop for your favorite meals or drinks and enjoy while doing it.',
            img: breakfast,
            alternate: true,
        },
        step3: {
            title: 'Checkout',
            heading: "When you're done, check out and get it delivered.",
            description: "When you're done, check out and get it  delivered with ease.",
            img: hamburger,
            alternate: false,
        },

    }
    return (
        <div>

            <ToastContainer
            />
            <div id="product">
                <div style={{ textShadow: '0px 1px 1px gray' }} className="flex flex-col items-center justify-start font-sans  bg-gray-50 pt-10 pb-40 bg-head bg-contain ">
                    <div>
                        <p className="pb-5 text-3xl font-bold text-gray-300">Food App</p>
                    </div>
                    <div>
                        <p className="p-2 text-4xl font-bold text-center text-yellow-600 lg:mx-auto lg:w-4/6 lg:text-5xl">
                            hungry ??? order from here!!!!
                        </p>
                    </div>
                    <p className="p-4 pt-2 mt-2 font-sans text-2xl text-center text-gray-500 lg:text-gray-200">
                        Download the App on
                    </p>
                    <div className="flex flex-col py-10 items-center justify-between lg:space-x-8 lg:flex-row lg:justify-between lg:w-90">

                        <button
                            className="text-yellow-400  hover:text-gray-900 border border-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:outline-none focus:ring-yellow-300 font-medium rounded-lg text-sm px-8 py-4 text-center mr-2 mb-2 dark:border-yellow-300 dark:text-yellow-300 dark:hover:text-white dark:hover:bg-yellow-400 dark:focus:ring-yellow-900"
                        >
                            Playstore
                        </button>
                        <button
                            className="text-gray-900 bg-[#F7BE38] hover:bg-[#F7BE38]/90 focus:ring-4 focus:outline-none focus:ring-[#F7BE38]/50 font-medium rounded-lg text-sm px-8 py-4 text-center inline-flex items-center dark:focus:ring-[#F7BE38]/50 mr-2 mb-2"
                        >
                            App Store
                        </button>
                    </div>

                </div>


                <div id="divider" className="rounded-full ring-2 mt-4 ring-gray-400 shadow-2xl lg:w-3/4 lg:mx-auto "></div>

                <div id="faq" className="pt-20 mb-20 text-3xl font-semibold text-center text-gray-900 underline lg:font-bold">How the app works </div>

                <Step
                    title={data.step1.title}
                    heading={data.step1.heading}
                    description={data.step1.description}
                    img={data.step1.img}
                    alternate={data.step1.alternate}
                />


                <Step
                    title={data.step2.title}
                    heading={data.step2.heading}
                    description={data.step2.description}
                    img={data.step2.img}
                    alternate={data.step2.alternate}
                />
                <Step
                    title={data.step3.title}
                    heading={data.step3.heading}
                    description={data.step3.description}
                    img={data.step3.img}
                    alternate={data.step3.alternate}
                />
            </div>


            <div className='mb-20'></div>
        </div>
    )
}

export default Home;