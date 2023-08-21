import React from 'react'
import { AiFillInstagram } from 'react-icons/ai'
import { AiOutlineTwitter } from 'react-icons/ai'
import { BsFacebook } from 'react-icons/bs'

const Footer = () => {
  return (
    <div className='footer p-20 mb-4 bg-blueColor rounded-xl gap-8 flex flex-wrap m-auto'>
      <div className='mx-6 text-justify'>
        <div className="logo-div">
          <h1 className='logo text-[25px] text-white pb-6'>
            <strong>Job</strong>Search
          </h1>
        </div>
        <p className='text-white pb-[13px] opacity-70 leading-7'>
          We always make our seekers and companies find the best jobs and employers find the best candidates.
        </p>
      </div>
      <div className="grid mx-6">
        <div className="div-title text-lg font-semibold pb-6 text-white">
          Company
        </div>
        <div className="grid gap-3">
          <li className='text-white opacity-70 hover:opacity-100'>About Us</li>
          <li className='text-white opacity-70 hover:opacity-100'>Features</li>
          <li className='text-white opacity-70 hover:opacity-100'>News</li>
          <li className='text-white opacity-70 hover:opacity-100'>FAQ</li>
        </div>
      </div>
      <div className="grid mx-6">
        <div className="div-title text-lg font-semibold pb-6 text-white">
          Resources
        </div>
        <div className="grid gap-3">
          <li className='text-white opacity-70 hover:opacity-100'>Account</li>
          <li className='text-white opacity-70 hover:opacity-100'>Support center</li>
          <li className='text-white opacity-70 hover:opacity-100'>Feedback</li>
          <li className='text-white opacity-70 hover:opacity-100'>Contact us</li>
        </div>
      </div>
      <div className="grid mx-6">
        <div className="div-title text-lg font-semibold pb-6 text-white">
          Supports
        </div>
        <div className="grid gap-3">
          <li className='text-white opacity-70 hover:opacity-100'>Events</li>
          <li className='text-white opacity-70 hover:opacity-100'>Promo</li>
          <li className='text-white opacity-70 hover:opacity-100'>Req Demo</li>
          <li className='text-white opacity-70 hover:opacity-100'>Careers</li>
        </div>
      </div>
      <div className="grid mx-6">
        <div className="div-title text-lg font-semibold pb-6 text-white">
          Contact Info
        </div>
        <div className="">
          <small className='text-[14px] text-white cursor-pointer'>
            Lorem@gmail.com
          </small>
          <div className='icons flex gap-4 py-4'>
            <AiFillInstagram className='bg-white p-[8px] h-[35px] w-[35px] rounded-full icon text-blueColor'></AiFillInstagram>
            <AiOutlineTwitter className='bg-white p-[8px] h-[35px] w-[35px] rounded-full icon text-blueColor'></AiOutlineTwitter>
            <BsFacebook className='bg-white p-[8px] h-[35px] w-[35px] rounded-full icon text-blueColor'></BsFacebook>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer