import React from 'react'
import logo3 from '../../Assets/logo3.png'
import logo4 from '../../Assets/logo4.png'
import logo5 from '../../Assets/logo5.png'

const Value = () => {
  return (
    <div className='my-24'>
     <div className='text-textColor text-[25px] text-center py-[2rem] pb-12 font-semibold block'>
       THE <span className='text-blueColor'>VALUE</span> THAT HOLDS US TRUE AND TO ACCOUNT
     </div>
     <div className="flex gap-[6rem] items-center justify-center flex-wrap">
      <div className="single-grid rounded-xl hover:bg-[#eeedf7] p-6 w-[250px]">
        <div className="flex items-center gap-3">
          <div className="img-div p-1 rounded-[.8rem] bg-[#dedef8] h-10 w-10 flex items-center justify-center">
            <img src={logo3} alt="" className='w-[70%]'/>
          </div>
          <span className='font-semibold text-textColor text-[18px]'>Simplicity</span>
        </div>
        <p className='text-sm text-textColor opacity-[.7] py-4 font-semibold'>Thing being made beautiful simple are at the heart of everything we do.</p>
      </div>
      <div className="single-grid rounded-xl hover:bg-[#eeedf7] p-6 w-[250px]">
        <div className="flex items-center gap-3">
          <div className="img-div p-1 rounded-[.8rem] bg-[#becbf0] h-10 w-10 flex items-center justify-center">
            <img src={logo4} alt="" className='w-[70%]'/>
          </div>
          <span className='font-semibold text-textColor text-[18px]'>Minimalism</span>
        </div>
        <p className='text-sm text-textColor opacity-[.7] py-4 font-semibold'>Thing being made beautiful simple are at the heart of everything we do.</p>
      </div>
      <div className="single-grid rounded-xl hover:bg-[#eeedf7] p-6 w-[250px]">
        <div className="flex items-center gap-3">
          <div className="img-div p-1 rounded-[.8rem] bg-[#fcebdb] h-10 w-10 flex items-center justify-center">
            <img src={logo5} alt="" className='w-[70%]'/>
          </div>
          <span className='font-semibold text-textColor text-[18px]'>Practicality</span>
        </div>
        <p className='text-sm text-textColor opacity-[.7] py-4 font-semibold'>Thing being made beautiful simple are at the heart of everything we do.</p>
      </div>
     </div>
    </div>
  )
}

export default Value