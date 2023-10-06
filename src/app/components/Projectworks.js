import React from "react";
import Image from "next/image";

const Projectworks = () =>{
    return(
        <>
            <div className="projectworks container py-16 px-16">
<h1 className="font-bold text-3xl text-center p-4">How <span className="text-orange-500">Signing Up</span> With The Design Project <span className="text-orange-500">works</span>!?</h1>

<p className="text-center text-sm py-3 px-9">Take a minute to imagine how you’d feel watching your user count grow, and retention rates stay consistently high. When you prioritize effective UX, better retention and growth are natural consequences. Backed by countless hours of research and testing, TDP blends UX, UI, and Product design into a deliciously smooth process that fuels productivity and success.</p>

<div className="projects_blocks gap-18 container flex items-start">
 
  <div className="block_project w-1/3 bg-white rounded-lg p-4 flex items-center justify-center flex-col">
  <p className="flex items-center justify-center bg-orange-700 text-white h-9 w-9 rounded-full text-lg font-bold">01</p>
  <h2 className="text-lg font-semibold text-center">Sign Up For One Of Our Services</h2>
    <Image src="/images/boy.png" alt="img 1" class=" object-cover rounded-md mb-2" width={100} height={50}/>
    
    <p className="text-gray-600 text-center">Sign up for one of our affordable subscription play which offer a variety of options to fit your unique needs.</p>
  </div>

  
  <div className="block_project w-1/3 bg-white rounded-lg p-4 flex items-center justify-center flex-col">
  <p className="flex items-center justify-center bg-orange-700 text-white h-9 w-9 rounded-full text-lg font-bold">02</p>
  <h2 className=" text-center text-lg font-semibold">Meet Your Perfect Match</h2>
    <Image src="/images/girl.png" alt="img 2" class=" object-cover rounded-md mb-2" width={100} height={50}/>
    
    <p className="text-gray-600 text-center">Sign up for one of our affordable subscription play which offer a variety of options to fit your unique needs.</p>
  </div>

  
  <div className="block_project w-1/3 bg-white rounded-lg p-4 flex items-center justify-center flex-col">
  <p className="flex items-center justify-center bg-orange-700 text-white h-9 w-9 rounded-full text-lg font-bold">03</p>
  <h2 className="text-lg font-semibold text-center">The First Sprint Begins (Hold On Tight)</h2>
    <Image src="/images/girl2.png" alt="img 3" class="object-cover rounded-md mb-2" width={100} height={50}/>
    
    <p className="text-gray-600 text-center">Sign up for one of our affordable subscription play which offer a variety of options to fit your unique needs.</p>
  </div>
</div>
</div>
        </>
    )
}

export default Projectworks;