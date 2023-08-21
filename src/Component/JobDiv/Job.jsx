import React from 'react'
import { BiTimeFive } from 'react-icons/bi'
import Data from './Data'

const Job = () => {
  return (
    <div>
      <div className="job-container flex gap-10 justify-center flex-wrap items-center py-10">
        {
          Data.map(({id, image, title, time, location, description, company}) => {
           return (
            <div key={id} className="group group/item single-job w-[250px] p-[20px] bg-white rounded-[10px] hover:bg-blueColor shadow-lg shadow-greyIsh-400/700 hover:shadow-lg hover:text-white">
              <span className='flex justify-between items-center'>
                <h1 className='text-[16px] font-semibold'>{title}</h1>
                <span className='flex text-xs items-center text-[#ccc] gap-1'>
                  <BiTimeFive/>{time}
                </span>
              </span>
              <h6 className='text-[#ccc] pt-1'>{location}</h6>
              <p className='text-[13px] text-[#95959] pt-[20px] border-t-[2px] mt-5'>
                {description}
              </p>
              <div className="company flex items-center gap-2 pb-4 pt-2">
                <img src={image} alt="Company Logo" className='w-[10%]'/>
                <span className='text-[14px] block font-semibold'>{company}</span>
              </div>
              <button className='border-[2px] rounded-[10px] block p-[10px] w-full text-sm font-semibold hover:bg-white hover:text-textColor'>
                Apply Now..
              </button>
            </div>
           )
          })
        }
      </div>
    </div>
  )
}

export default Job