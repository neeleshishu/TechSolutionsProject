import React from "react";
import Image from "next/image";

const Subscription = ()=>{
    return(
        <>
<div className="price_website container flex p-10 gap-12">
<div className="flex flex-col border-2 rounded-xl p-4 gap-8 items-center">
  <div>
  <h1 className="text-center font-bold text-2xl">Silver</h1>
  <p className="text-center text-sm">Great for basic UI/UX design needs</p>
  </div>
  <div>
  <p className=" text-orange-500 text-2xl text-center font-bold">$2,600</p>
  <p className="text-center text-orange-500 text-lg">PER MONTH</p>
  </div>

  <div className="flex items-center p-9">
  <hr className="flex-grow w-36 border-t-2 border-orange-500" />
</div>

<div>
  <p className=" font-semibold text-lg">WHAT&apos;S INCLUDED</p>
  <div className=" px-4 text-sm">
  <p>UI execution</p>
  <p>Connect on Slack</p>
  <p>One 30 minute meeting a week</p>
  </div>
  </div>

<div>
  <p className="font-semibold text-lg">DESIGN TEAM</p>
  <div className=" px-4 text-sm">
    <p>1 designer working with 4-5 other customers at the same time</p>
  </div>
  </div>
  <button className="flex items-center gap-2 border-2 px-6 py-2 rounded-md ">
        Try Free
        <Image src="/images/arr.png" alt="" width={20} height={20}/>
      </button>
</div>


<div className="flex flex-col border-2 rounded-xl p-4 gap-8 items-center text-white cards_payment">
  <div>
  <h1 className="text-center font-bold text-2xl">Gold</h1>
  <p className="text-center text-sm">Great for end-to-end product design</p>
  </div>
  <div>
  <p className=" text-black text-2xl text-center font-bold">$2,600</p>
  <p className="text-center text-black text-lg">PER MONTH</p>
  </div>

  <div className="flex items-center p-9">
  <hr className="flex-grow w-36 border-t-2 border-white" />
</div>

<div>
  <p className=" font-semibold text-lg">WHAT&apos;S INCLUDED</p>
  <div className=" px-4 text-sm">
  <p>UI execution</p>
  <p>Connect on Slack</p>
  <p>One 30 minute meeting a week</p>
  </div>
  </div>

<div>
  <p className="font-semibold text-lg">DESIGN TEAM</p>
  <div className=" px-4 text-sm">
    <p>1 designer working with 4-5 other customers at the same time</p>
  </div>
  </div>
  <button className="flex items-center gap-2 border-2 px-6 py-2 rounded-md ">
        Try Free
        <Image src="/images/arr.png" alt=""  width={20} height={20}/>
      </button>
</div>

<div className="flex flex-col border-2 rounded-xl p-4 gap-8 items-center">
  <div>
  <h1 className="text-center font-bold text-2xl">Premium</h1>
  <p className="text-center text-sm">Great for products that require more design horsepower and tight timelines</p>
  </div>
  <div>
  <p className=" text-orange-500 text-2xl text-center font-bold">$5,200</p>
  <p className="text-center text-orange-500 text-lg">PER MONTH</p>
  </div>

  <div className="flex items-center p-9">
  <hr className="flex-grow w-36 border-t-2 border-orange-500" />
</div>

<div>
  <p className=" font-semibold text-lg">WHAT&apos;S INCLUDED</p>
  <div className=" px-4 text-sm">
  <p>Everything in Essential and Pro</p>
  <p>User Testing</p>
  <p>Figma Prototypes</p>
  <p>Flexible meetings</p>
  <p>Custom workflows to speed up delivery</p>
  </div>
  </div>

<div>
  <p className="font-semibold text-lg">DESIGN TEAM</p>
  <div className=" px-4 text-sm">
    <p>1 designer working with 4-5 other customers at the same time</p>
  </div>
  </div>
  <button className="flex items-center gap-2 border-2 px-6 py-2 rounded-md ">
        Try Free
        <Image src="/images/arr.png" alt=""  width={20} height={20}/>
      </button>
</div>
</div>

<div className="container flex flex-col items-center pb-10">
<div className="flex items-center p-9">
  <hr className="flex-grow w-36 border-t-2 border-gray-900" />
</div>
<p className="text-center text-2xl font-bold">Hey! Need a custom plan? <span className=" text-orange-500">Contact us!</span></p>
<p className="text-center text-sm">Try us risk free for 7 days, if you don’t love us, get your money back.</p>

<button className=" m-6 bg-orange-500 text-white px-6 py-2 rounded-lg">
        Get Started
      </button>
</div>
        </>
    )
}

export default Subscription;