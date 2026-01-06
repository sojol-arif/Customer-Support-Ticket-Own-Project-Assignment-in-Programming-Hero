import React, { memo, useState } from 'react';
import calender from "../../assets/images/calender.png";
import { toast } from 'react-toastify';

const Ticket = memo(({ticket, setTaskStatus, taskStatus}) => {
    const [openProgress, setOpenProgress] = useState(false);

    const handleTask = (t) =>{
        setTaskStatus([...taskStatus, t]);
        toast('In Progress!')
        setOpenProgress(true);
    }
    return (
        <div className='shadow-main bg-[#fff] p-4 rounded-[4px]' onClick={()=> handleTask(ticket)}>
            <div className='top flex justify-between'>
                <h3 className='text-[#001931] text-[18px] font-medium'>{ticket.title}</h3>
                <span className='tag'> {openProgress? (<span className='flex items-center py-1 px-3 bg-[#F8F3B9] rounded-full text-[#9C7700] font-medium'> <span className='h-[16px] w-[16px] bg-[#FEBB0C] rounded-full inline-block mr-1.5'></span>In Progress</span>):(<span className='flex items-center py-1 px-3 bg-[#B9F8CF] rounded-full text-[#0B5E06] font-medium'> <span className='h-[16px] w-[16px] bg-[#02A53B] rounded-full inline-block mr-1.5'></span>Open</span>)}</span>
            </div>
            <p>{ticket.description}</p>
            <div className='mt-3 flex flex-wrap gap-2 justify-between text-[14px]'>
                <div className='flex gap-4'>
                    <p>{ticket.id}</p>
                    <p className='font-medium uppercase'>{ticket.priority === 'High Priority' ? (
                            <span style={{ color: '#F83044' }}>High Priority</span>
                        ) : ticket.priority === 'Medium Priority' ? (
                            <span style={{ color: '#FEBB0C' }}>Medium Priority</span>
                        ) : ticket.priority === 'Low Priority' ? (
                            <span style={{ color: '#02A53B' }}>Low Priority</span>
                        ) : (
                            <span>Unknown Priority</span>
                        )}
                    </p>
                </div>
                <div className='flex gap-4'>
                    <p>{ticket.customer}</p>
                    <div className='flex gap-2'><img src={calender} alt="" /><p>{ticket.createdAt}</p></div>
                </div>
            </div>
        </div>
    );
});

export default Ticket;