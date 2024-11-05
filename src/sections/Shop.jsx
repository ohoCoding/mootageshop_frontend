import React from 'react'
import { ShopData } from '../constants'
import ShopCard from '../components/ShopCard'

const Shop = () => {
  return (
    <section id="shop"> 
        <div className="title">
            <h2 className='text-[1.7rem] md:[2.2rem]'>현재 판매 제품</h2>
            {/* <p className='mt-8'> Lorem ipsum dolor sit amet consectetur, adipisicing elit. <br /> Deleniti omnis beatae voluptatibus officiis eligendi?</p> */}
        </div>
        <div className="container max-sm:mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 px-12">
            {
                ShopData.map((shop, index) => (
                    <ShopCard key={index} {...shop}/> 
                ))
            }
        </div>
        {/* <div className="flex items-center justify-center mt-16">
            <div className="pagination">
                <ul className="flex gap-2">
                    <li className='border-solid border-[#ccc] text-center text-[#777]'><a href="" className='px-4 py-2'>Prev</a></li>
                    <li className='border-solid border-[#ccc] text-center text-[#777]'><a href="" className='px-4 py-2'>1</a></li>
                    <li className='border-solid border-[#ccc] text-center text-[#777]'><a href="" className='px-4 py-2'>2</a></li>
                    <li className='border-solid border-[#ccc] text-center text-[#777]'><a href="" className='px-4 py-2'>3</a></li>
                    <li className='border-solid border-[#ccc] text-center text-[#777]'><a href="" className='px-4 py-2'>Next</a></li>
                </ul>
            </div>

        </div> */}
    </section>
  )
}

export default Shop