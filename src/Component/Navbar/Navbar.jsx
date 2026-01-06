import React, { memo } from 'react';

const Navbar = memo(() => {
    return (
        <div className='px-[20px] md:px-[40px] lg:px-[50px] xl:px-[80px] bg-[#fff] py-4 inset-shadow-md'>
            <div className='max-w-[1440px] mx-auto flex gap-5 flex-col lg:flex-row justify-between items-center text-[#000000]'>
                <div><p className='text-[24px] font-bold'>CS — Ticket System</p></div>
                <ul className='flex flex-wrap gap-x-7 gap-y-3 lg:ml-auto lg:mr-7 justify-center'>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">FAQ</a></li>
                    <li><a href="#">Changelog</a></li>
                    <li><a href="#">Blog</a></li>
                    <li><a href="#">Download</a></li>
                    <li><a href="#">Contact</a></li>
                </ul>
                <div className='flex items-start'>
                    <a href="#" className='bg-linear-to-r from-[#632EE3] to-[#9F62F2] from-0% to-100% px-4 py-3 rounded text-[#fff] font-semibold'> + &nbsp;&nbsp;New Ticket</a>
                </div>
            </div>
        </div>
    );
});

export default Navbar;