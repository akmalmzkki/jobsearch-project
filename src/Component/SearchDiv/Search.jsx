import React from 'react'
import { AiOutlineSearch } from 'react-icons/ai'
import { AiOutlineCloseCircle } from 'react-icons/ai'
import { BsHouseDoor } from 'react-icons/bs'
import { CiLocationOn } from 'react-icons/ci'

const Search = () => {
  return (
    <div className='search grid gap-7 bg-greyIsh rounded-[10px] p-12 mt-[150px]'>
      <form action="">
        <div className='first-div flex max-md:flex-col justify-between md:items-center rounded-[8px] gap-6 bg-white p-5 shadow-lg shadow-greyIsh-700'>
          <div className='flex gap-2 items-center'>
            <AiOutlineSearch className='text-[#6f6f6f] text-[25px] icon'/>
            <input type="text" className='bg-transparent text-blue-500 focus:outline-none w-[100%]' placeholder='Search job here....'/>
            <AiOutlineCloseCircle className='text-[#6f6f6f] text-[25px] icon hover:text-textColor'/>
          </div>
          <div className='flex gap-2 items-center'>
            <BsHouseDoor className='text-[#6f6f6f] text-[25px] icon'/>
            <input type="text" className='bg-transparent text-blue-500 focus:outline-none w-[100%]' placeholder='Search by company....'/>
            <AiOutlineCloseCircle className='text-[#6f6f6f] text-[25px] icon hover:text-textColor'/>
          </div>
          <div className='flex gap-2 items-center'>
            <CiLocationOn className='text-[#6f6f6f] text-[25px] icon'/>
            <input type="text" className='bg-transparent text-blue-500 focus:outline-none w-[100%]' placeholder='Search by location....'/>
            <AiOutlineCloseCircle className='text-[#6f6f6f] text-[25px] icon hover:text-textColor'/>
          </div>
          <button className="bg-blueColor h-full py-3 px-8 rounded-[10px] text-white border-[2px] cursor-pointer hover:bg-white hover:text-textColor">Search</button>
        </div>
      </form>
      <div className="sec-div flex max-md:flex-col max-md:gap-5 md:items-center md:gap-12 justify-center">
        <div className="single-search justify-between flex items-center gap-2">
          <label htmlFor="relevance" className='text-[#808080] font-medium'>Sort by:</label>
          <select name="" id="relevance" className='bg-white rounded px-4 py-1 text-sm'>
            <option value="">Relevance</option>
            <option value="">Inclusive</option>
            <option value="">Starts with</option>
            <option value="">Contains</option>
          </select>
        </div>
        <div className="single-search justify-between flex items-center gap-2">
          <label htmlFor="type" className='text-[#808080] font-medium'>Type:</label>
          <select name="" id="type" className='bg-white rounded px-4 py-1 text-sm'>
            <option value="">Full-time</option>
            <option value="">Remote</option>
            <option value="">Contract</option>
            <option value="">Part-time</option>
          </select>
        </div>
        <div className="single-search justify-between flex items-center gap-2">
          <label htmlFor="level" className='text-[#808080] font-medium'>Level:</label>
          <select name="" id="level" className='bg-white rounded px-4 py-1 text-sm'>
            <option value="">Senior</option>
            <option value="">Beginner</option>
            <option value="">Intermediate</option>
            <option value="">Advocate</option>
          </select>
        </div>
        <span className='text-[#a1a1a1] cursor-pointer hover:text-textColor'>Clear all</span>
      </div>
    </div>
  )
}

export default Search