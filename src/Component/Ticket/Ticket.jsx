import React, { memo } from 'react';
import calender from "../../assets/images/calender.png";
import { toast } from 'react-toastify';

const Ticket = memo(({ticket, setTaskStatus, taskStatus}) => {
    const handleTask = (t) =>{
        setTaskStatus([...taskStatus, t]);
        toast('In Progress!')
    }
    return (
        <div className='shadow-main bg-[#fff] p-4 rounded-[4px]' onClick={()=> handleTask(ticket)}>
            <div className='top flex justify-between'>
                <h3 className='text-[#001931] text-[18px] font-medium'>{ticket.title}</h3>
                <span className='tag'> Open</span>
            </div>
            <p>{ticket.description}</p>
            <div className='mt-4 flex justify-between'>
                <div className='flex gap-4'>
                    <p>{ticket.id}</p>
                    <p>{ticket.priority}</p>
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