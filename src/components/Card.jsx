import React from 'react'
import { LuFileSearch } from "react-icons/lu";
import { IoMdCloudDownload } from "react-icons/io";
import { motion } from "framer-motion"

function Card({data,refernce}) {
  return (
    <motion.div drag dragConstraints={refernce} className="relative w-60 h-72 rounded-[30px] bg-zinc-500 text-white p-5 overflow-hidden">
        <LuFileSearch />
        <p className="text-sm mt-5 font-semibold">{data.decs}</p>
        <div className="footer absolute bottom-0 w-full h-20 left-0">
            <div className="flex item-center justify-between px-8 py-3 mb-3">
                <h5>{data.filesize}</h5>
                <IoMdCloudDownload />
            </div>
            <div className="tag w-full py-6 bg-green-600 flex items-center justify-center">
                <h3 className="text-sm font-semibold">Download Now...</h3>
            </div>
        </div>
    </motion.div>
  )
}

export default Card