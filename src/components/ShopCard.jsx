import React from 'react'
import { RiStarFill, RiStarLine } from 'react-icons/ri'

const ShopCard = ({imgURL, title, price, size, color, status}) => {
  return (
     <div className="shop-card relative flex flex-1 flex-col w-full max-sm:w-full ">
        <img src={imgURL} alt={title} className='rounded-2xl'/>
        <h4 className='mt-2 text-[1rem] font-[600] capitalize'>{title}</h4>
        <p className='mt-2 font-[500] text-[.88rem] text-[#777] leading-normal'>가격: {price}</p>
        <p className='mt-2 font-[500] text-[.88rem] text-[#777] leading-normal'>사이즈: {size}</p>
        <p className='mt-2 font-[500] text-[.88rem] text-[#777] leading-normal'>색상: {color}</p>
        <p className='mt-2 font-[500] text-[.88rem] text-[#777] leading-normal'>상태: {status}</p>
        {/* <div className="rating flex text-[#717fe0] mt-1">
            <RiStarFill/>
            <RiStarFill/>
            <RiStarFill/>
            <RiStarFill/>
            <RiStarLine/>
        </div> */}
        <div className="flex gap-2 mt-4">
            <button className='text-[.7rem] uppercase border-solid border-[#777] text-black p-2 hover:bg-black hover:border-black hover:text-white mr-2 rounded-2xl'><a href="tel:010-4614-0324">문의하기</a></button>
            {/* <button className='text-[.7rem] uppercase border-solid border-[#777] text-black p-2 hover:bg-black hover:border-black hover:text-white'>Add to cart +</button> */}
        </div>
     </div>
  )
}

export default ShopCard