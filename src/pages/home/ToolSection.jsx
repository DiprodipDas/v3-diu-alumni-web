import React from 'react'
import { FiSettings, FiCode,FiSmartphone,FiCloud } from "react-icons/fi";
import HeadingSection from '../../components/HeadingSection';

const tools = [
{
    icon: FiSettings,
    title:"Customizable Settings",
    description:"Easily configure tools to fit your project requirements"
},
{
    icon: FiCode,
    title:"Developer-Friendly",
    description:"Easily configure tools to fit your project requirements"
},
{
    icon: FiSmartphone,
    title:"Responsive Design",
    description:"Easily configure tools to fit your project requirements"
},
{
    icon: FiCloud,
    title:"Cloud Integration",
    description:"Easily configure tools to fit your project requirements"
},
]

const ToolSection = () => {
  return (
    <div className='max-w-screen container mx-auto py-20 px-5'>
       <HeadingSection subheading="THE TOOLS YOU NEED" heading="All-in-one Solution for Your Project" />
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mb-16 cursor-pointer'>
            {
                tools.map((tool,index)=>(
                    <div key={index} className='flex flex-col items-center p-6 bg-white shadow-lg rounded-lg hover:shadow-xl transition'>
                        <tool.icon className='text-blue-600 text-4xl mb-4'/>
                        <h3 className='text-lg font-bold text-gray-800'>{tool.title}</h3>
                        <p className=' text-gray-600 mt-2 text-center'>{tool.description}</p>
                    </div>
                ))
            }
        </div>
        <div className='text-center'>
                <button className='bg-blue-600 text-white px-6 py-3 rounded-md 
                         hover:bg-amber-400 transition'>
                            Explore More
                          </button>
        </div>
        

    </div>
  )
}

export default ToolSection