import React from 'react'
import { ToolDropDownItem } from './DropDownList'
import { LearnDropDownItem } from './DropDownList'
import { CommunityDropDownItem } from './DropDownList'
export function ToolDropDown(){
    return (
        <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-6/7 flex flex-col'>
            {
                ToolDropDownItem.map((list)=>(
                    <ul className='flex flex-col py-5 '>
                        <li className='text-white'>
                            {list.topic}
                        </li>
                    </ul>
                ))
            }
    
        </div>
      )
}
export function LearnDropDown(){
    return (
        <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-6/7 flex flex-col'>
            {
                LearnDropDownItem.map((list)=>(
                    <ul className='flex flex-col py-5 '>
                        <li className='text-white'>
                            {list.topic}
                        </li>
                    </ul>
                ))
            }
    
        </div>
      )
}

function CommunityDropDown(){
    return (
        <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-6/7 flex flex-col'>
            {
                CommunityDropDownItem.map((list)=>(
                    <ul className='flex flex-col py-5 '>
                        <li className='text-white'>
                            {list.topic}
                        </li>
                    </ul>
                ))
            }
    
        </div>
      )
}
export default CommunityDropDown;
