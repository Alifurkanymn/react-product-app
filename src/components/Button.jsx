import React from 'react'

function Button({buttonFunction ,buttonName}) {
  return (
    <button onClick={buttonFunction} className='text-white font-semibold px-6 py-3 rounded-md bg-slate-500 hover:bg-slate-600 transition-all shadow'>{buttonName}</button>
  )
}

export default Button