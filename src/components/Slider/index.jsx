import React, { useState } from 'react';
import { Text } from "..";
import Slider from '@mui/material/Slider';

export default function SliderComponent({ 
  SliderName = "Goal Amount", 
  SliderDesc = "What is your goal amount worth today?", 
  defaultValue = 50, // Default value for the slider
  ...props 
}) {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  return (
    <div className='static w-full flex flex-col justify-items-center items-start border-solid rounded border-2 grid-cols-2'>
      <div {...props} className='flex w-full'>
        <Text size='md' as="p" className="font-poppins mt-px !text-gray-900">
          {SliderName}
        </Text>
        <div className=' m-4 border-solid rounded border-2 '><input className="focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-500 text-sm"
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          
        /></div></div>
        <Text size='xs' as="p" className="font-poppins items-start mt-px text-gray-500 w-60">
          {SliderDesc}
          <Slider
            size="small"
            defaultValue={defaultValue}
            aria-label="Small"
            valueLabelDisplay="auto"
          />
        </Text>
      
    </div>
  );
}

