import React from 'react'
import pricing from '../assets/images/pricingOrange.png'
import Design2 from '../assets/images/kgDesign.png'
import terms from '../assets/terms.gif'
import { Footer } from './Footer'
export const Pricing = () => {
    return (
        <>
            <header className="bg-blue-950 text-white ">
                <div>
                    <div className='absolute mb-28'>
                        <img className='lg:w-[40%] lg:h-[40%] w-[20%] h-[20%] remove-wh ite-background mb-10' src={Design2} alt="" />
                    </div>
                    <div className='flex flex-col lg:flex-row justify-normal'>
                        <div className="pt-10 relative container mx-auto flex justify-center items-center">
                            <img src={pricing} alt="Logo" className="lg:h-[80%] h-[86%] lg:w-[50%] w-[86%]" />
                        </div>

                    </div>
                </div>
                <hr />

                {/* <div className="lg:w-[60%] flex flex-col lg:flex-row justify-between">
                    <div className="grid justify-between items-center mb-8 lg:mb-0 flex-grow">
                        <img src={pricing} alt="" className="max-w-full h-auto" />
                    </div>
                    <div className="flex justify-center items-center flex-grow">
                        <div className="relative z-10 block text-black rounded-lg bg-white px-6 py-12 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] backdrop-blur-[30px] dark:bg-[hsla(0,0%,5%,0.55)] dark:shadow-black/20">
                            <h2 className="mb-8 text-3xl font-bold">Terms & Condition</h2>
                            <ul>
                                <li>• We can arrange for courier facility at extra charges.</li>
                                <li>• 100 % payment to be done by way of NEFT / IMPS or UPI.</li>
                                <li>• Hi Resolution printable le to be sent in Corel Draw.</li>
                                <li>• 18% GST applicable over & above the mentioned rates.</li>
                                <li>• Proof approvals will be sent on whatsapp & once approved we will start the printing.</li>
                                <li>• All blisters & strips to be sent in good condition.</li>
                            </ul>
                        </div>
                    </div>
                </div> */}
                <div className="">
                    <div className="lg:mx-auto lg:grid lg:max-w-7xl lg:grid-flow-col-dense lg:grid-cols-2 lg:gap-24 lg:px-8 ">
                        <div className="mx-auto max-w-xl px-6 lg:mx-0 lg:max-w-none lg:py-16 lg:px-0 ">

                            <div>


                                <h2 className="mb-8 text-3xl font-bold">Terms & Condition</h2>
                                <ul>
                                    <li>• We can arrange for courier facility at extra charges.</li>
                                    <li>• 100 % payment to be done by way of NEFT / IMPS or UPI.</li>
                                    <li>• Hi Resolution printable le to be sent in Corel Draw.</li>
                                    <li>• 18% GST applicable over & above the mentioned rates.</li>
                                    <li>• Proof approvals will be sent on whatsapp & once approved we will start the printing.</li>
                                    <li>• All blisters & strips to be sent in good condition.</li>
                                </ul>
                            </div>
                        </div>
                        <div className=" mt-7 sm:mt-16 lg:mt-0">
                            <div className="p-6 pl-6 flex justify-center lg:relative lg:m-0 lg:h-full lg:px-0">
                                <img loading="lazy" width="547" height="486"
                                    className="lg:w-[56%] w-[80%] rounded-xl shadow-2xl ring-1 ring-black ring-opacity-5 lg:absolute lg:right-0  lg:max-w-none"
                                    src={terms} />
                            </div>
                        </div>
                    </div>
                </div>




            </header>
            <Footer />
        </>
    )
}
