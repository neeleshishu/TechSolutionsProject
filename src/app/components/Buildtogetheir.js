import React from "react";
import Image from "next/image";

const Buildtogetheir = () => {
    return (
        <>
            <div className="build_togetheir container px-10  flex flex-col items-center">
                <h1 className=" text-center text-3xl font-bold">Let’s <span className="text-orange-500">Build</span> Something <span className="text-orange-500">Awesome</span> Together!</h1>
                <p className="text-center text-sm">Try us risk free for 7 days, if you don’t love us, get your money back.</p>
                <button className=" m-6 bg-orange-500 text-white px-6 py-2 rounded-lg">
                    Get Started
                </button>
                <Image src="/images/Group_last.png" alt="" width={500} height={250} />
            </div>
        </>
    )
}

export default Buildtogetheir;