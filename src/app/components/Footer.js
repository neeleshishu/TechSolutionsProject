import React from 'react'
import Image from 'next/image'

const Footer = () => {
    return (
        <div>
            <div className="footer">
                <div className="footer1 container flex">
                    <div className=" flex-1">
                        <Image className='footer_logo max-w-none' src="/images/footer-logo.png" alt=''  width={500} height={200} />
                        <div className=" gap-2 flex text-white gap-2 contact_optons_footer">
                            <div className="flex">
                                <Image src="/images/email.png" alt='' width={20} height={20}/>
                                <p>@gmail.com</p>
                            </div>
                            <div className="flex">
                                <Image className='max-w-none' src="/images/oo.png" alt='' width={20} height={20} />
                                <p>triontechsolution</p>
                            </div>
                            <div className="flex">
                                <Image className='max-w-none' src="/images/linkdin.png" alt='' width={20} height={20}/>
                                <p>LinkdIn</p>
                            </div>
                        </div>
                    </div>

                    <div className="fotter_menu flex-1 text-white flex items-end flex-col">
                        <p>HOW IT WORKS</p>
                        <p>ABOUT</p>
                        <p>OUR WORK</p>
                        <p>BLOG</p>
                        <p>CONTACT US</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer
