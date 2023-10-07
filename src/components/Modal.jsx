import React from 'react'
import { AiOutlineClose } from 'react-icons/ai';
import { useDispatch } from 'react-redux';
import { toggleModal } from '../redux/modalSlice';

function Modal({modalContent}) {
    const dispatch = useDispatch();

    return (
        <div className='Modal'>
            <div className=' w-fit h-max shadow-lg absolute rounded-2xl top-1/4 left-1/3 px-8 py-8'>
                <AiOutlineClose onClick={() => dispatch(toggleModal())} className='absolute text-xl right-8 top-8 text-slate-500 hover:text-slate-600 cursor-pointer' />
                <h1 className=' font-bold text-2xl'>Ürün Ekle</h1>
                {modalContent}
            </div>
        </div>
    )
}

export default Modal