import React from 'react'

export default function Home() {
  return (
    <div className='text-white w-[1300px] mx-auto flex items-start justify-between mt-[100px]'>
        <div className='w-[1300px] mx-auto flex items-start justify-between mt-[35px]'>
            <div>
                <p className='text-[80px] leading-[70px]'>the trusted crypto exchange</p>
                <p className='w-[400px] my-7'>Be part of the early Users of Rendbit, receive relevant information on time. Join now</p>
                <button className='cursor-pointer px-[20px] py-[10px] border rounded-[10px] bg-gradient-to-r from-black to-gray-800'>Join Wait-list</button>
            </div>
            <p className='w-[400px] mt-10'>Facilitate seamless cross-border payments between African countries using stellar XLM as the currency bridge</p>
        </div>
    </div>
  )
}
