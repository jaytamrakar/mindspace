import React from 'react'

const Footer = () => {
    return (
        <>
            <footer className='bg-indigo-800 text-white'>
                <div className='max-w-7xl mx-auto px-7 py-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:justify-items-center'>
                    <div>
                        <h1 className='font-bold text-3xl'>Mind Space</h1>
                        <p className='my-4 text-slate-400'>Build a clean modern app landing page design using one of the most popular CSS frameworks to date. </p>

                        <div className='flex justify-start items-center gap-3'>
                            <a href="#" className='w-12 h-12 bg-white text-black text-2xl rounded-xl flex justify-center items-center'>
                                <i className='fab fa-facebook-f'></i>
                            </a>
                            <a href="#" className='w-12 h-12 bg-white text-black text-2xl rounded-xl flex justify-center items-center'>
                                <i className='fab fa-linkedin'></i>
                            </a>
                            <a href="#" className='w-12 h-12 bg-white text-black text-2xl rounded-xl flex justify-center items-center'>
                                <i className='fab fa-twitter'></i>
                            </a>

                        </div>
                    </div>
                <div className='text-slate-400 flex flex-col gap-3'>
                    <h2 className='font-bold text-2xl text-white'>
                        About this
                    </h2>
                    <a href="#">About Us</a>
                    <a href="#">Features</a>
                    <a href="#">Doctors</a>
                </div>
                <div className='text-slate-400 flex flex-col gap-3'>
                    <h2 className='font-bold text-2xl text-white'>Support us</h2>
                    <a href="#">About Us</a>
                    <a href="#">Features</a>
                    <a href="#">Doctors</a>
                </div>
                <div className='text-slate-400 flex flex-col gap-3'>
                    <h2 className='font-bold text-2xl text-white'>Partner</h2>
                    <a href="#">Our Partner</a>
                    <a href="#">Features</a>
                </div>
                </div>
                <p className='text-white p-5 text-center bg-indigo-900'>All Rights Reserved. @MindSpace.co</p>
            </footer>
        </>
    )
}

export default Footer