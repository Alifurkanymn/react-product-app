import React from 'react'

function Input({labelName, value, functionName, name, type}) {
    return (
        <div className='flex items-center mt-4'>
            <label className=' w-24'>{labelName}</label>
            <input value={value} onChange={e => functionName(e, name)} required name={name} type={type} className=' border rounded-md border-slate-400 p-2 ms-4' />
        </div>
    )
}

export default Input