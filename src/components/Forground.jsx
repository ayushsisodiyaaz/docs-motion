import React from 'react'
import { useRef } from "react";
import Card from './Card'

function Forground() {

    const data = [
        {
        decs: "Is this working?",
        filesize: ".9mb",
        close: true,
        
        },
        {
        decs: "The card is ready and functionl",
        filesize: "1.5mb",
        close: true,
        
        },
           {
        decs: "React component is very useful",
        filesize: "5mb",
        close: true,
        
        }
    ]
    

    const ref = useRef(null);
  return (
    <>
    <div ref={ref} className="fixed top-0 left-0 z-[3] w-full h-full flex gap-5 flex-wrap p-5">
    {data.map((item, index)=>(
        <Card data={item} refernce={ref}/>
    ))}
    </div>
        </>
  )
}

export default Forground