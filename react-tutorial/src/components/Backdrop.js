import React from 'react';
import {FaTimes} from 'react-icons/fa'
const Backdrop = props => {
 return <div className={`w-full transition duration-300 ${props.customClass} z-10 h-screen bg-black fixed top-0 left-full`}>
     <div onClick={props.close} className="fixed text-white text-2xl right-4 top-4">
        <FaTimes />
     </div>
 </div>
}

export default Backdrop