import React from 'react'
import Image from 'next/image';

const Customers = () => {
    return (
        <div>
            <div className="customers py-6 px-14 flex flex-col justify-center items-center">
                <h1 style={{ letterSpacing: "3px" }} className=" text-white font-bold text-3xl text-center py-3">We Helped Our Customers Raise <span className="text-orange-500">$1B+</span></h1>
                <div className="customers_logo flex justify-between">
                    <div>
                        <Image src="/images/Y-ads.png" alt="" width={250} height={150} />
                    </div>
                    <div>
                        <Image src="/images/seq-ads.png" alt="" width={250} height={150} />
                    </div>
                    <div>
                        <Image src="/images/accel-ads.png" alt="" width={250} height={150} />
                    </div>
                    <div>
                        <Image src="/images/a1-ads.png" alt="" width={250} height={150} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Customers;
