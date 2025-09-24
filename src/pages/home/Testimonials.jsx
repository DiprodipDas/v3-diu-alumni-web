import React from 'react'
import HeadingSection from '../../components/HeadingSection'

const Testimonials = () => {
    return (
        <div className='bg-gray-100'>
            <div className='max-w-screen-2xl container mx-auto py-20 px-5'>
                <HeadingSection heading='What Our Clients Say' subheading='Testimonials' />

                <div>
                    <div className="carousel w-full">
                        <div id="slide1" className="carousel-item space-x-8 relative w-full">
                            <div className='md:w-1/2 bg-white rounded-md shadow md:p-8 p-4'>
                                <img
                                    src="/images/logos/logo1.png"
                                    className="size-28 mx-auto my-2 object-contain" />
                                <p className='text-gray-600 italic mb-4 md:w-3/5 mx-auto'>Excelent support. Really I love this tool.Hope this will be more efficient soon.</p>

                                <div className=' flex flex-col items-center space-y-2'>
                                    <div className='size-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 text-2xl font-bold'> F </div>
                                    <h3 className='text-lg font-bold text-gray-800'>Faruk Hasan</h3>
                                    <p className='text-sm text-gray-500'> Software Developer,DIU</p>
                                </div>

                            </div>

                            <div className='md:w-1/2 bg-white rounded-md shadow md:p-8 p-4'>
                                <img
                                    src="/images/logos/logo2.png"
                                    className="size-28 mx-auto my-2 object-contain" />
                                <p className='text-gray-600 italic mb-4 md:w-3/5 mx-auto'>I Use this tool since 2019.It provides me great support. I wish all the very best to the team.</p>

                                <div className=' flex flex-col items-center space-y-2'>
                                    <div className='size-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 text-2xl font-bold'> B </div>
                                    <h3 className='text-lg font-bold text-gray-800'>Bilash Ahmed</h3>
                                    <p className='text-sm text-gray-500'>Network Engineer,BracIT</p>
                                </div>

                            </div>
                            <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                                <a href="#slide4" className="btn btn-circle">❮</a>
                                <a href="#slide2" className="btn btn-circle">❯</a>
                            </div>
                        </div>
                        <div id="slide2" className="carousel-item space-x-8 relative w-full">
                            <div className='md:w-1/2 bg-white rounded-md shadow md:p-8 p-4'>
                                <img
                                    src="/images/logos/logo1.png"
                                    className="size-28 mx-auto my-2 object-contain" />
                                <p className='text-gray-600 italic mb-4 md:w-3/5 mx-auto'>Excelent support. Really I love this tool.Hope this will be more efficient soon.</p>

                                <div className=' flex flex-col items-center space-y-2'>
                                    <div className='size-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 text-2xl font-bold'> K </div>
                                    <h3 className='text-lg font-bold text-gray-800'>MD. Khalekuzamman</h3>
                                    <p className='text-sm text-gray-500'> IT Officer,DIU</p>
                                </div>

                            </div>

                            <div className='md:w-1/2 bg-white rounded-md shadow md:p-8 p-4'>
                                <img
                                    src="/images/logos/logo2.png"
                                    className="size-28 mx-auto my-2 object-contain" />
                                <p className='text-gray-600 italic mb-4 md:w-3/5 mx-auto'>I Use this tool since 2019.It provides me great support. I wish all the very best to the team.</p>

                                <div className=' flex flex-col items-center space-y-2'>
                                    <div className='size-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 text-2xl font-bold'> R </div>
                                    <h3 className='text-lg font-bold text-gray-800'>Rezowana Sammy</h3>
                                    <p className='text-sm text-gray-500'>Software Developer,Qtech Solution Ltd.</p>
                                </div>

                            </div>
                            <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                                <a href="#slide1" className="btn btn-circle">❮</a>
                                <a href="#slide3" className="btn btn-circle">❯</a>
                            </div>
                        </div>
                        <div id="slide3" className="carousel-item space-x-8 relative w-full">
                            <div className='md:w-1/2 bg-white rounded-md shadow md:p-8 p-4'>
                                <img
                                    src="/images/logos/logo1.png"
                                    className="size-28 mx-auto my-2 object-contain" />
                                <p className='text-gray-600 italic mb-4 md:w-3/5 mx-auto'>Webcode really doing great.There vision is soo clear. I am truely satisfied with their support.</p>

                                <div className=' flex flex-col items-center space-y-2'>
                                    <div className='size-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 text-2xl font-bold'> D </div>
                                    <h3 className='text-lg font-bold text-gray-800'>Diprodip Das</h3>
                                    <p className='text-sm text-gray-500'> DevOps Engineer,Samsung R&D</p>
                                </div>

                            </div>

                            <div className='md:w-1/2 bg-white rounded-md shadow md:p-8 p-4'>
                                <img
                                    src="/images/logos/logo2.png"
                                    className="size-28 mx-auto my-2 object-contain" />
                                <p className='text-gray-600 italic mb-4 md:w-3/5 mx-auto'>What a great tool it is.Now I used to with this tool.I regularly used this tool.</p>

                                <div className=' flex flex-col items-center space-y-2'>
                                    <div className='size-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 text-2xl font-bold'> D </div>
                                    <h3 className='text-lg font-bold text-gray-800'>Dipen Kumar Dey</h3>
                                    <p className='text-sm text-gray-500'>Core Network Engineer,Carnival Internet</p>
                                </div>

                            </div>
                            <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                                <a href="#slide2" className="btn btn-circle">❮</a>
                                <a href="#slide4" className="btn btn-circle">❯</a>
                            </div>
                        </div>
                        <div id="slide4" className="carousel-item space-x-8 relative w-full">
                            <div className='md:w-1/2 bg-white rounded-md shadow md:p-8 p-4'>
                                <img
                                    src="/images/logos/logo1.png"
                                    className="size-28 mx-auto my-2 object-contain" />
                                <p className='text-gray-600 italic mb-4 md:w-3/5 mx-auto'>Excelent support. Really I love this tool.Hope this will be more efficient soon.</p>

                                <div className=' flex flex-col items-center space-y-2'>
                                    <div className='size-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 text-2xl font-bold'> B </div>
                                    <h3 className='text-lg font-bold text-gray-800'>Bijon Talukder</h3>
                                    <p className='text-sm text-gray-500'> Senior Software Developer,Smart Frameworks</p>
                                </div>

                            </div>

                            <div className='md:w-1/2 bg-white rounded-md shadow md:p-8 p-4'>
                                <img
                                    src="/images/logos/logo2.png"
                                    className="size-28 mx-auto my-2 object-contain" />
                                <p className='text-gray-600 italic mb-4 md:w-3/5 mx-auto'>I Use this tool since 2019.It provides me great support. I wish all the very best to the team.</p>

                                <div className=' flex flex-col items-center space-y-2'>
                                    <div className='size-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 text-2xl font-bold'> M </div>
                                    <h3 className='text-lg font-bold text-gray-800'>MD. Masud Parvez</h3>
                                    <p className='text-sm text-gray-500'>Head of IT,Bkash LTD</p>
                                </div>

                            </div>
                            <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                                <a href="#slide3" className="btn btn-circle">❮</a>
                                <a href="#slide1" className="btn btn-circle">❯</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Testimonials