import React from 'react'
import { GoArrowSwitch } from "react-icons/go";
import { FaSearch } from "react-icons/fa";
import '../composantes/styles/vols.css'


export default function Vols() {
  return (
    <div>
      <img src="/public/img/Frame 1.png" alt="vols" className='frame_Image' />
     <form className='container-form'>
      <input type="text" placeholder='de (france,paris)'/><GoArrowSwitch  className='arrow'/>
      <input type="text" placeholder='vers ou '/>
      <input type="date" />
      <input type="date" />
      <FaSearch  className='reach'/>

     </form>
      
    </div>
  )
}
