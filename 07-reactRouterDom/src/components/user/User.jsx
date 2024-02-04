import React from 'react';

function User() {
    return (
        <div className="w-full h-96 mx-auto py-28 bg-slate-400 text-slate-800 grid place-content-center">
            <h1 className="text-2xl font-bold">
                User Id:
                <span className='text-red-600'> {435 }</span>
            </h1>
        </div>
    )
}

export default User;