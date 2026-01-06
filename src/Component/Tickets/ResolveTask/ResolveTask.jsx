import React, { memo } from 'react';

const ResolveTask = memo(({task}) => {

    return (
        <div className='shadow-main bg-[#fff] p-4 rounded-[4px]'>
            <h3 className='text-[18px] font-medium mb-3'>{task.title}</h3>
            <p>✓ completed</p>
        </div>
    );
});

export default ResolveTask;