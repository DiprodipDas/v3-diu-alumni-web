import React, { useState } from 'react'
import HeadingSection from '../../components/HeadingSection'

const pricingPlans=[
    {
        name: "Freelancer",
        monthlyPrice: 25,
        yearlyPrice:250,
        saves:"$25 per month,paid annually",
        features:[
            "1 project",
            "Basic Support",
            "Access to all templates",
            "5GB Storage",
        ],
    },
    {
        name: "Professional",
        monthlyPrice: 65,
        yearlyPrice:650,
        saves:"$65 per month,paid annually",
        features:[
            "5 project",
            "Priority Support",
            "Access to all templates",
            "25GB Storage",
            "Advanced Analytics",
        ],
    },
    {
        name: "Agency",
        monthlyPrice: 95,
        yearlyPrice:950,
        saves:"$95 per month,paid annually",
        features:[
            "10 project",
            "Unlimited Support",
            "Access to all templates",
            "50GB Storage",
            "Advanced Analytics",
        ],
    },

]

const Pricing = () => {
    const[isYearly,setIsYearly]= useState(false)
    return (
        <div className='max-w-screen container mx-auto py-20 px-5'>
           <HeadingSection heading='Choose Your Plan' subheading='Pricing' description='Our pricing plans are flexible and designed to fit your needs.Choose a plan that works best for you.'/>



           <div className='text-center mb-10 '>
            <label className='inline-flex items-center cursor-pointer' >
                <span className='mr-3 text-lg text-gray-600'>

                    {
                        isYearly ? "Yearly Pricing":"Monthly Pricing"
                    }
                </span>
                <div className='relative '>
                    <input type="checkbox" className='sr-only' checked={isYearly} onChange={()=> 
                        setIsYearly(!isYearly)} />

                        <div className='toggle-bg h-8 w-14 bg-gray-300 rounded-full'></div>
                        <div className={`toggle-circle absolute top-1 left-1 w-6 h-6 bg-blue-600
                             rounded-full transition-transform duration-300 ${isYearly ? "transform translate-x-6":""}`}></div>
                </div>
            </label>
           </div>
           <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10'>
             {
                pricingPlans.map((plan,index)=>(
                    <div key={index} className='bg-white border border-blue-700 rounded-lg overflow-hidden transition-all duration-300 hover:shadow-xl'>
                        <div className='p-5 text-center'>
                            <h3 className='text-2xl font-semibold text-gray-800 my-3'>{plan.name}</h3>
                            <p className='text-gray-500 mb-5'>Best for {plan.name.toLowerCase()}s</p>

                            <div className='text-3xl font-bold text-blue-600'>
                               ${
                                isYearly ? plan.yearlyPrice: plan.monthlyPrice
                               }
                               <span className='text-sm text-gray-500'>/{isYearly ? "Year": "Month"}</span>
                            </div>
                            <p className='mt-5'>{isYearly ? plan.saves: ""}</p>
                        </div>
                        <div className='p-5 text-center'>
                            <button className='bg-blue-600 text-white px-6 py-2 rounded-full cursor-pointer hover:bg-blue-700 transition duration-300'>Choose {plan.name}</button>
                        </div>
                        <div className='p-5 md:px-12 md:py-5'>
                            <ul className='text-center text-gray-600'>
                                {
                                   plan.features.map((feature,index)=>(
                                    <li key={index} className='flex items-center mr-2'>
                                         <svg
                                                    className="w-4 h-4 text-blue-600 mr-2"
                                                    fill="none"
                                                    stroke="currentColor"
                                                    strokeWidth="2"
                                                    viewBox="0 0 24 24"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        d="M5 12l5 5L20 7"
                                                    />
                                                </svg> {feature}
                                    </li>
                                   ))
                                }
                            </ul>
                        </div>
                    </div>
                ))
             }
           </div>

        </div>
    )
}

export default Pricing