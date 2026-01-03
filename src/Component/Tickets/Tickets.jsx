import React, { memo } from 'react';
import {use, useState} from 'react'
import Ticket from '../Ticket/Ticket';
import ResolveTask from './ResolveTask/ResolveTask';
import TaskStatus from './TaskStatus/TaskStatus';

const Tickets = memo(({useFetchTicket, setTaskStatus, taskStatus, resolveTask, setResolveTask}) => {
    
    const ticketJson = use(useFetchTicket);

    const [ticketJsonFile, setTicketJsonFile] = useState(ticketJson);

    return (
        <div className='px-[30px] md:px-[50px] pt-16'>
            <div className='max-w-1440px] mx-auto'>
                <div>

                </div>
                <div className='flex gap-8'>
                    <div className='max-w-[1050px] flex-1'>
                        <h2 className='text-[24px] font-semibold text-[#34485A]'>Customer Tickets ({ticketJsonFile.length})</h2>
                        <div className='flex flex-col gap-4 mt-4'>
                            {ticketJsonFile.map(ticket => (
                                <Ticket key={ticket.id} ticket={ticket} setTaskStatus={setTaskStatus} taskStatus={taskStatus}></Ticket>
                            ))}
                        </div>
                    </div>
                    <div className='max-w-[358px] flex-1'>
                        <div>
                            <h2 className='text-[24px] font-semibold text-[#34485A] mb-4'>Task Status</h2>
                            <div>
                                {taskStatus.length} <br></br>
                                {taskStatus.length === 0 && "Select a ticket to add to Task Status"}
                                jgh
                                <div className='flex flex-col gap-4'>
                                    {taskStatus.map(task => (
                                        <TaskStatus key={task.id} task={task} taskStatus={taskStatus} setTaskStatus={setTaskStatus} resolveTask={resolveTask} setResolveTask={setResolveTask} ticketJsonFile={ticketJsonFile} setTicketJsonFile={setTicketJsonFile}></TaskStatus>
                                    ))}
                                </div>
                            </div>
                        </div>
                        <div className='pt-8'>
                            <h2 className='text-[24px] font-semibold text-[#34485A] mb-4'>Resolved Task</h2>
                            <div>
                                {resolveTask.length} <br></br>
                                {resolveTask.length === 0 && "Select a ticket to add to Task Status"}
                                jgh
                                <div className='flex flex-col gap-4'>
                                    {resolveTask.map(task => (
                                        <ResolveTask key={task.id} resolveTask={resolveTask} setResolveTask={setResolveTask} task={task}></ResolveTask>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
});

export default Tickets;