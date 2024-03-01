import React, { useState } from 'react'
import list from './list.json'
import { Img, Text } from "./..";

function Index()  {
  const [ isOpen , SetIsOpen]=useState(false)
  return (
    <div className="flex flex-col  w-full justify-between  text-sm bg-gray-50 items-stretch">
      <button onClick={()=> SetIsOpen((prev) => !prev)}>
      <div className=' text-left flex justify-between  border-teal-600 border-l-4 border-solid w-full pl-[11px] pr-[15px] py-[15px]'>Personal Loan EMI Calculator <Img src="images/img_arrow_down.svg" alt="arrowright" className="h-[18px] w-[18px]" />
      </div></button>
      {isOpen&&(
        <div className='  top-20 flex flex-col items-start p-2 w-full text-xs  '> {list.map((tool,i)=>(
          <div className='flex w-full justify-between down py-[15px] pl-[11px] pr-[15px] border-solid ' key={i}>
            <h4>{tool.calculator}</h4>
            <Img src="images/img_arrow_down.svg" alt="arrowright" className="h-[18px] w-[18px]" />
          </div>
        ))}</div>
      )}
    </div>
  )
}

export default Index;
