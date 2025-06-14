import React, { useRef } from 'react'
import { FaRegFileAlt } from "react-icons/fa";
import { LuDownload } from "react-icons/lu";
import { IoClose } from "react-icons/io5";
import { motion } from "framer-motion";


const Card = ({data,reference}) => {
    return (
        <motion.div  drag dragConstraints={reference} whileDrag={{scale: 1.2}} dragElastic={.1} dragTransition={{ bounceStiffness:600 , bounceDamping: 10}} className=' relative flex-shrink-0 w-60 h-72 rounded-[45px] bg-zinc-900/90 text-white px-8 py-10 overflow-hidden'>
            <FaRegFileAlt />
            <p className='leading-tight text-sm mt-5 font-semi-bold '>{data.desc}</p>
            <div className='footer absolute bottom-0 left-0 w-full '>
                <div className='flex items-center justify-between mb-2 py-3 px-8'>
                    <h5>{data.filesize}</h5>
                    <span className='w-7 h-7 bg-zinc-600 rounded-full flex items-center justify-center'>
                        {data.close ? <IoClose /> : <LuDownload color='#fff' size='.8em'/>}
                    </span>
                </div>
                {data.tag.isOpen && <div className={`tag w-full h-10 flex items-center justify-center ${ data.tag.tagColor === "green" ? "bg-green-600" : "bg-blue-600"} '><h3 className='text-sm font-semibold`}>{data.tag.tagDesc}</div>}
                
            </div>
        </motion.div>
        // {/* icon 
        //     text 
        //     footer 
        //         data
        //         tag */}
    )
}

export default Card