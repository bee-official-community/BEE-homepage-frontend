import React from 'react'
import winter from '../../assets/images/img.jpg'
export const AboutUs = () => {
  return (
     <div className="flex justify-center bg-gray-900">
      <div className="overflow-hidden">
        <img src={winter} alt="Winter Scene" className="w-[1024px] h-[850px] object-cover" />
      </div>
    </div>
  )
}
