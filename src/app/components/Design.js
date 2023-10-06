import React from "react";
import Image from "next/image";

const Design = () =>{
    return(
        <>
            <div className="customers py-5">
<p className="container text-white font-bold text-3xl text-center p-12">How <span className="text-orange-500">Accessible</span> UX Design Is Changing The <span className="text-orange-500">Businesses</span> For The Better</p>

<div className="mobile_view flex justify-center items-center mx-20">
<div className="flex-1 customers h-fit p-6 m-5 rounded-xl">
<button className="bg-orange-500 text-white px-6 py-2 rounded-md  mx-4">
        Secure
      </button>
      <p className=" text-white font-bold text-3xl text-center p-4 ">A Predictive Analytics Platform For Consumers Digital Identity Verification</p>
      <button className=" border text-white px-6 py-2 rounded-md mx-4">
      Read Case Study
      </button>
</div>
<div className=" flex-1">
  <Image src="/images/mobile_pic.png" alt="" width={400} height={400}/>
</div>
</div>

<div className="mobile_view flex justify-center items-center mx-20 my-28">
  <Image src="/images/mobile2.png" alt="" width={900} height={300}/>
</div>

<div className="mobile_view flex justify-center items-center mx-20 my-28">
  <Image src="/images/article.png" alt="" width={900} height={300}/>
</div>

</div>
        </>
    )
}

export default Design;