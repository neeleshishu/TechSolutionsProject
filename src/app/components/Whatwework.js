import React from "react";
import Image from "next/image";

const Whatwework = () =>{
    return(
        <>
<div className="whatweworkpage py-16 px-16">
  <h1 style={{letterSpacing:"2px"}} className=" font-bold text-3xl text-center">A diverse team of <span className="text-orange-500">passionate</span> tech nerds who are<br/>here to help your <span className="text-orange-500">startup succeed</span></h1>

  <p className="container text-center text-sm py-3">From ideation to expansion, TDP understands the unique demands of your startup—providing you with<br/>optimized design strategies and fast turnarounds for an affordable monthly subscription.</p>


  <div class="whatwework_blocks container flex items-start">
 
  <div class="block_work w-1/3 bg-white rounded-lg p-4 flex items-center justify-center flex-col">
    <Image src="/images/arrow1.png" alt="img 1" class=" object-cover rounded-md mb-2" width={150} height={150}/>
    <h2 class="text-lg font-semibold">Costs 70% less</h2>
    <p class="text-gray-600">We developed highly-optimized design processes to let us work fast and deliver incredible results—and we pass those savings on to you</p>
  </div>

  
  <div class="block_work w-1/3 bg-white rounded-lg p-4 flex items-center justify-center flex-col">
    <Image src="/images/arrow3.png" alt="img 2" class=" object-cover rounded-md mb-2" width={150} height={150}/>
    <h2 class="text-lg font-semibold">Adaptable and scalable</h2>
    <p class="text-gray-600">High-velocity is crucial to a startup’s success, and that’s why TDP delivers new designs every week so your momentum never falters</p>
  </div>

  
  <div class="block_work w-1/3 bg-white rounded-lg p-4 flex items-center justify-center flex-col">
    <Image src="/images/arrow2.png" alt="img 3" class="object-cover rounded-md mb-2" width={150} height={150}/>
    <h2 class="text-lg font-semibold">Fast turnaround times</h2>
    <p class="text-gray-600">TDP was built for flexibility—we quickly adapt and grow as you grow</p>
  </div>
</div>
</div>

        </>
    )
}

export default Whatwework;