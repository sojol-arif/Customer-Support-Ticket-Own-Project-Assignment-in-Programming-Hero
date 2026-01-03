import React, { memo } from 'react';
import { toast } from 'react-toastify';

const TaskStatus = memo(({task, setResolveTask, resolveTask, setTaskStatus, taskStatus, ticketJsonFile, setTicketJsonFile}) => {
    const handleCompleteTask = (completeT) => {
        setResolveTask([...resolveTask, task]);
        const taskStatusFilter = taskStatus.filter(t => t.title != completeT.title);
        setTaskStatus(taskStatusFilter);
        toast("✓ completed");

        const newListJson = ticketJsonFile.filter(t => t.title != completeT.title);
        setTicketJsonFile(newListJson);
    }

    return (
        <div className='shadow-main bg-[#fff] p-4 rounded-[4px]'>
            <p>{task.title}</p>
            <button className='bg-[#02A53B] rounded text-[#fff]' onClick={()=>handleCompleteTask(task)}>Complete</button>
        </div>
    );
});

export default TaskStatus;