import React from 'react'
import { testimonialsData } from '../constants'
import TestimonialCard from '../components/TestimonialCard'

const Testimonial = () => {
    return (
        <section id="testimonial" className='bg-[#f5f5ff]'>
            <div className="title">
                <h2 className='text-[1.7rem] md:[2.2rem]'>People Says</h2>
                <p className='mt-8'> Lorem ipsum dolor sit amet consectetur, adipisicing elit. <br /> Deleniti omnis beatae voluptatibus officiis eligendi?</p>
            </div>
            <div className="container max-sm:mt-12 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-12 px-8">
                {
                    testimonialsData.map((testimonial) => (
                        <TestimonialCard key={testimonial.title} {...testimonial} />
                    ))
                }
            </div>

        </section>
    )
}

export default Testimonial