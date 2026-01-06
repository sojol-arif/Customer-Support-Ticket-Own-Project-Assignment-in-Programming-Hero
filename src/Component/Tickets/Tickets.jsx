import React, { memo } from 'react';
import {use, useState} from 'react'
import Ticket from '../Ticket/Ticket';
import ResolveTask from './ResolveTask/ResolveTask';
import TaskStatus from './TaskStatus/TaskStatus';

const Tickets = memo(({useFetchTicket, setTaskStatus, taskStatus, resolveTask, setResolveTask}) => {
    
    const ticketJson = use(useFetchTicket);

    const [ticketJsonFile, setTicketJsonFile] = useState(ticketJson);

    return (
        <div className='px-[20px] md:px-[40px] lg:px-[50px] xl:px-[80px] pb-14 lg:pb-20'>
            <div className='max-w-[1440px] mx-auto'>
                <div className='py-12 lg:py-20 flex flex-col lg:flex-row gap-6'>
                    <div className='rounded-[8px] bg-linear-[115deg] from-0% from-[#632EE3] to-[#9F62F2] to-100% h-[200px] lg:h-[250px] w-full flex justify-center text-center items-center text-[#fff]'>
                        <div>
                            <p className='text-[20px] lg:text-[24px]'>In-Progress</p>
                            <p className='text-[50px] lg:text-[60px] font-semibold'>{taskStatus.length}</p>
                        </div>
                    </div>
                    <div className='rounded-[8px] bg-linear-[115deg] from-0% from-[#54CF68] to-[#00827A] to-100% h-[200px] lg:h-[250px] w-full flex justify-center text-center items-center text-[#fff]'>
                        <div>
                            <p className='text-[20px] lg:text-[24px]'>Resolved</p>
                            <p className='text-[50px] lg:text-[60px] font-semibold'>{resolveTask.length}</p>
                        </div>
                    </div>
                </div>
                <div className='flex flex-col lg:flex-row gap-8'>
                    <div className='max-w-[1050px] flex-1'>
                        <h2 className='text-[24px] font-semibold text-[#34485A]'>Customer Tickets ({ticketJsonFile.length})</h2>
                        <div className='grid grid-cols-1 xl:grid-cols-2 gap-x-6 gap-y-4 mt-4'>
                            {ticketJsonFile.map(ticket => (
                                <Ticket key={ticket.id} ticket={ticket} setTaskStatus={setTaskStatus} taskStatus={taskStatus}></Ticket>
                            ))}
                        </div>
                    </div>
                    <div className='max-w-[300px] xl:max-w-[358px] flex-1'>
                        <div>
                            <h2 className='text-[24px] font-semibold text-[#34485A] mb-4'>Task Status</h2>
                            <div>
                                {taskStatus.length === 0 && "Select a ticket to add to Task Status"}
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
                                {resolveTask.length === 0 && "Select a ticket to add to Task Status"}
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