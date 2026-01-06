import React, { memo } from 'react';
import message from '../../assets/images/message.png';
import facebook from '../../assets/images/facebook.png';
import twitter from '../../assets/images/twitter.png';
import linkedin from '../../assets/images/linkedin.png';

const Footer = memo(() => {
    return (
        <footer className='bg-[#000] px-[20px] md:px-[40px] lg:px-[50px] xl:px-[80px] text-[#A1A1AA]'>
            <div className='py-14 lg:py-20 '>
                <div className='flex flex-col md:flex-row flex-wrap 2xl:flex-nowrap gap-x-8 xl:gap-x-20 gap-y-8 justify-between mx-auto max-w-[1440px]'>
                                <div className='md:w-[50%] lg:w-[40%] xl:w-[25%]'>
                                    <h3 className='text-[24px] font-medium text-[#fff] mb-3'>CS — Ticket System</h3>
                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                                </div>
                                <div className='all_menu md:w-[100%] lg:w-[60%] xl:w-[55%] flex justify-between flex-wrap gap-x-8 gap-y-8 xl:ml-[30px] xl:mr-[30px]'>
                                    <div>
                                        <h3 className='text-[24px] font-medium text-[#fff] mb-3'>Company</h3>
                                        <ul className='flex flex-col gap-2'>
                                            <li><a href="#">About Us</a></li>
                                            <li><a href="#">Our Mission</a></li>
                                            <li><a href="#">Contact Saled</a></li>
                                        </ul>
                                    </div>
                                    <div>
                                        <h3 className='text-[24px] font-medium text-[#fff] mb-3'>Services</h3>
                                        <ul className='flex flex-col gap-2'>
                                            <li><a href="#">Products & Services</a></li>
                                            <li><a href="#">Customer Stories</a></li>
                                            <li><a href="#">Download Apps</a></li>
                                        </ul>
                                    </div>
                                    <div>
                                        <h3 className='text-[24px] font-medium text-[#fff] mb-3'>Information</h3>
                                        <ul className='flex flex-col gap-2'>
                                            <li><a href="#">Privacy Policy</a></li>
                                            <li><a href="#">Terms & Conditions</a></li>
                                            <li><a href="#">Join Us</a></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className='md:w-[100%] xl:w-[20%]'>
                                    <img src={twitter} alt='g'/>
                                    <h3 className='text-[24px] font-medium text-[#fff] mb-3'>Social Links</h3>
                                    <ul className='flex flex-col gap-2'>
                                        <li><a href="#" className='flex gap-3'><span className='bg-[#fff] w-[20px] h-[20px] rounded-full flex items-center justify-center'><img src={linkedin} alt="" /></span>@CS — Ticket System</a></li>
                                        <li><a href="#" className='flex gap-3'><span className='bg-[#fff] w-[20px] h-[20px] rounded-full flex items-center justify-center'><img src={facebook} alt="" /></span>@CS — Ticket System</a></li>
                                        <li><a href="#" className='flex gap-3'><span className='bg-[#fff] w-[20px] h-[20px] rounded-full flex items-center justify-center'><img src={twitter} alt="" /></span>@CS — Ticket System</a></li>
                                        <li><a href="#" className='flex gap-3'><span className='bg-[#fff] w-[20px] h-[20px] rounded-full flex items-center justify-center'><img src={linkedin} alt="" /></span>@CS — Ticket System</a></li>
                                    </ul>
                                </div>
                </div>
            </div>
            <div className='max-w-[1440px] px-auto flex justify-center py-7 border-t border-[#E5E7EB]/20'>
                <p>© 2025 CS — Ticket System. All rights reserved.</p>
            </div>
        </footer>
    );
});

export default Footer;