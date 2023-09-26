import React from 'react'
import { useDispatch } from 'react-redux'
import { toggleModal } from '../redux/modalSlice';

function Header() {
  const dispatch = useDispatch();
  return (
    <div className='Header'>
        <div className=' bg-gray-700 flex justify-between items-center w-full h-20 px-4'>
          <div className='text-xl font-bold text-white italic'>Product List</div>
          <button onClick={()=> dispatch(toggleModal())} className='text-white font-semibold px-6 py-3 rounded-md bg-slate-500 hover:bg-slate-600 transition-all shadow'>Add Card</button>
        </div>
    </div>
  )
}

export default Header