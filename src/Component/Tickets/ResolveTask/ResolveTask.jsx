import React, { memo } from 'react';

const ResolveTask = memo(({task}) => {

    return (
        <div className='shadow-main bg-[#fff] p-4 rounded-[4px]'>
            <p>{task.title}</p>
        </div>
    );
});

export default ResolveTask;