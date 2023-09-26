import React from 'react'
import { AiOutlineClose } from 'react-icons/ai';
import { useDispatch } from 'react-redux';
import { toggleModal } from '../redux/modalSlice';

function Modal() {
    const dispatch = useDispatch();
    return (
        <div className='Modal'>
            <div className=' w-fit h-max shadow-lg absolute rounded-2xl top-1/4 left-1/3 px-8 py-8'>
                <AiOutlineClose onClick={() => dispatch(toggleModal())} className='absolute text-xl right-8 top-8 text-slate-500 hover:text-slate-600 cursor-pointer' />
                <h1 className=' font-bold text-2xl'>Ürün Ekle</h1>
                <form className=' h-full min-h-[300px] flex flex-col justify-center'>
                    <div className='flex items-center mt-4'>
                        <label className=' w-24'>Ürün Adı</label>
                        <input type="text" className=' border rounded-md border-slate-400 p-2 ms-4' />
                    </div>
                    <div className='flex items-center mt-4'>
                        <label className=' w-24'>Ürün Fiyatı</label>
                        <input type="text" className=' border rounded-md border-slate-400 p-2 ms-4' />
                    </div>
                    <div className='flex items-center mt-4'>
                        <label className=' w-24'>Ürün Resmi</label>
                        <input type="file" className=' border rounded-md border-slate-400 p-2 ms-4' />
                    </div>
                </form>
                <button className='text-white font-semibold px-6 py-3 rounded-md bg-slate-500 hover:bg-slate-600 transition-all shadow'>Add Product</button>
            </div>
        </div>
    )
}

export default Modal