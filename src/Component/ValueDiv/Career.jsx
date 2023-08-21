import React from 'react'

const Career = () => {
  return (
    <div className='career bg-greyIsh rounded-[10px] p-12 mb-[8rem]'>
      <div className="flex flex-wrap justify-between">
        <div className="block my-4">
          <div className='text-[25px] font-semibold text-blueColor'>
            Ready to switch a career?
          </div>
          <div className='font-semibold'>
            Lets get started!!!
          </div>
        </div>
        <div className='my-4'>
          <div className='px-10 py-4 border-[2px] rounded-[12px] bg-blueColor text-white cursor-pointer hover:bg-white hover:text-blueColor'>
            Get Started
          </div>
        </div>
      </div>
    </div>
  )
}

export default Career