import React from 'react'
import logo from '../assets/images/logo.png'
// import footer1 from '../assets/images/footer (1).jpg'
// import footer2 from '../assets/images/footer (2).jpg'
// import footer3 from '../assets/images/footer (3).jpg'
// import footer4 from '../assets/images/footer (4).jpg'
// import footer5 from '../assets/images/footer (5).jpg'
// import footer6 from '../assets/images/footer (6).jpg'

const Footer = () => {
    return (
        <footer id="contact" className='bg-[#222] text-white py-16'>
            <div className="container max-sm:mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 px-12">
                <div>
                    <img src={logo} alt="" height={55} width={55} className='rounded-2xl'/>
                    <span className='md:text-[3.5rem] text-[2.5rem] font-[600] font-serif italic'>Mootage</span>
                </div>
                <div>
                    <h4 className='font-bold mb-8 text-[1.1rem]'>Quick Links</h4>
                    <ul>
                        <li className='mb-3 capitalize'><a href="#home">Home</a></li>
                        <li className='mb-3 capitalize'><a href="#features">features</a></li>
                        <li className='mb-3 capitalize'><a href="#shop">shop</a></li>
                        {/* <li className='mb-3 capitalize'><a href="">Testimonials</a></li>
                        <li className='mb-3 capitalize'><a href="">Blog</a></li> */}
                    </ul>
                </div>
                {/* <div>
                    <h4 className='font-bold mb-8 text-[1.1rem]'>Our Gallery</h4>
                    <ul className='flex flex-wrap gap-4'>
                        <li><a href=""><img src={footer1} alt="" height={66} width={66} /></a></li>
                        <li><a href=""><img src={footer2} alt="" height={66} width={66} /></a></li>
                        <li><a href=""><img src={footer3} alt="" height={66} width={66} /></a></li>
                        <li><a href=""><img src={footer4} alt="" height={66} width={66} /></a></li>
                        <li><a href=""><img src={footer5} alt="" height={66} width={66} /></a></li>
                        <li><a href=""><img src={footer6} alt="" height={66} width={66} /></a></li>
                    </ul>
                </div> */}
                <div>
                    <h4 className='font-bold mb-8 text-[1.1rem]'>Contact us</h4>
                    <ul className='flex flex-col gap-6'>
                        <li><span className='text-red-500 pr-2'>T.</span> <a href="tel:010-4614-0324">010-4614-0324</a></li>
                        <li><span className='text-red-500 pr-2'>I.</span> @moosss_vintage</li>
                    </ul>

                </div>
            </div>
        </footer>
    )
}

export default Footer