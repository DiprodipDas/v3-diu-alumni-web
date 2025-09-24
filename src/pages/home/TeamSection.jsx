import React from 'react'
import HeadingSection from '../../components/HeadingSection'
import { Link } from 'react-router'
import { FaLinkedin, FaFacebook,FaTwitterSquare,FaInstagramSquare} from "react-icons/fa";

const teamMembers=[
    {
        id:1,
        image:"/images/members/person1.png",
        name: "John Abraham",
        role: "CEO",
        linkedin: "https://linkedin.com/in/johnabraham",
        instagram:"https://instagram.com/johnabraham",
        twitter:"https://twitter.com/johnabraham",
        facebook:"https://facebook.com/johnabraham",
    },
    {
        id:2,
        image:"/images/members/person2.png",
        name: "Jame Smith",
        role: "CTO",
        linkedin: "https://linkedin.com/in/jamesmith",
        instagram:"https://instagram.com/jamesmith",
        twitter:"https://twitter.com/jamesmith",
        facebook:"https://facebook.com/jamesmith",
    },
    {
        id:3,
        image:"/images/members/person3.png",
        name: "Yani Musi",
        role: "MTO",
        linkedin: "https://linkedin.com/in/yanimusi",
        instagram:"https://instagram.com/yanimusi",
        twitter:"https://twitter.com/yanimusi",
        facebook:"https://facebook.com/yanimusi",
    },
    {
        id:4,
        image:"/images/members/person4.png",
        name: "Mr Hilary",
        role: "COO",
        linkedin: "https://linkedin.com/in/hilary",
        instagram:"https://instagram.com/hilary",
        twitter:"https://twitter.com/hilary",
        facebook:"https://facebook.com/hilary",
    },
]

const TeamSection = () => {
  return (
    <div className='bg-gray-100'>
        <div className='max-w-screen container mx-auto py-20 px-5'>
         <HeadingSection heading='Meet The Experts' subheading='Our Team'/>


         <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10'>
            {
                teamMembers.map((teamMember,index)=>(
                    <div key={teamMember.id} className='bg-white shadow-lg rounded-lg overflow-hidden transition-all duration-300 hover:shadow-xl'>

                        <img src={teamMember.image} alt={teamMember.name} className='w-full h-56 object-cover' />

                        <div className='p-5'>
                         <h3 className='text-xl font-semibold text-gray-800 mb-2'>{teamMember.name}</h3>
                         <p className='text-sm text-gray-500 mb-4'>{teamMember.role}</p>

                         <div className='flex space-x-4 mb-5 items-center'>
                            <Link to={teamMember.linkedin} className='text-blue-600 hover:text-yellow-900'><FaLinkedin /></Link>
                            <Link to={teamMember.facebook} className='text-blue-600 hover:text-yellow-900'><FaFacebook /></Link>
                            <Link to={teamMember.twitter} className='text-cyan-600 hover:text-yellow-900'><FaTwitterSquare /></Link>
                            <Link to={teamMember.instagram} className='text-red-400 hover:text-yellow-900'><FaInstagramSquare /></Link>
                         </div>
                         <button className='bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition duration-300 cursor-pointer'>Contact  {teamMember.name.split(" ")[1]}</button>
                        </div>
                    </div>
                ))
            }
         </div>
        </div>
    </div>
  )
}

export default TeamSection