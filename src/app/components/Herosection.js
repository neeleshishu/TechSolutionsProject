import React from 'react'
import Image from 'next/image';

function Herosection() {
  return (
    <div>
      <div className="herosection container flex flex-col items-center justify-between"  style={{height:"87vh"}}>
      <h1 className="headline_herosection font-bold text-4xl text-center">Digital Transformation is our <span className="text-orange-500">Motto</span><br/>
      Let&apos;s Create A Milestone <span className="text-orange-500">Togetheir</span></h1>
      <div className="best_policies gap-3 flex items-center justify-center">
        <div className="gap-1 flex items-center">
        <Image className="h-4" src="/images/Tickmark.png" alt="" width={20} height={20}/>       
        <h1>No hiring headaches</h1>
      </div>
      <div className="gap-1 flex items-center">
        <Image className="h-4" src="/images/Tickmark.png" alt="" width={20} height={20}/>        
        <h1>Weekly turnaround times</h1>
      </div>
      <div className="gap-1 flex items-center">
        <Image className="h-4" src="/images/Tickmark.png" alt="" width={20} height={20}/>       
        <h1>No hiring headaches</h1>
      </div>

    </div>
    <button className="bg-orange-500 text-white px-6 py-2 rounded-md ">
        START YOUR RISK FREE TRIAL
      </button>

      <Image className=" h-72" src="/images/herosection-img.png" alt="" width={500} height={250}/>
    </div>
    </div>
  )
}

export default Herosection;
