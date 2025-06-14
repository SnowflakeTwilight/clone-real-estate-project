import React, { useRef } from 'react'
import Card from './Card'


const Foreground = () => {
  const ref = useRef(null)
  const data = [
    {
      desc: " This is will be displayed in the main body of content.",
      filesize: ".9mb",
      close: false,
      tag: { isOpen: false, tagColor: "green", tagDesc: "Download Now" }
    },
    {
      desc: " This is will be displayed in the main body of content.",
      filesize: ".9mb",
      close: false,
      tag: { isOpen: true, tagColor: "green", tagDesc: "Download Now" }
    },
    {
      desc: " This is will be displayed in the main body of content.",
      filesize: ".9mb",
      close: false,
      tag: { isOpen: true, tagColor: "blue", tagDesc: "Upload" }
    }
  ];
  return (
    <div ref={ref} className='fixed z-[3] top-0 left-0 w-full h-full bg-sky-800/10 flex flex-wrap gap-10 p-5'>
      {data.map((item, index) => (

        <Card data={item} reference={ref} />
      ))}
    </div>
  )
}

export default Foreground