import React, { useState } from 'react'
import { BsThreeDots } from 'react-icons/bs';
import { useDispatch } from 'react-redux';
import { deleteProduct, editProduct } from '../redux/dataSlice';
import { toggleModal } from '../redux/modalSlice';
import { getProductId } from '../redux/getDataSlice';

function ProductCard({ item }) {
  const [settingsModal, setSettingsModal] = useState(false)
  const dispatch = useDispatch();

  const deleteItem = (()=>{
    dispatch(deleteProduct(item?.id));
    setSettingsModal(!settingsModal);
  })

  const editItem = (()=>{
    dispatch(getProductId(item?.id))
    setSettingsModal(!settingsModal);
    dispatch(toggleModal())
  })

  return (
    <div className='rounded-lg w-60 ml-4 bg-slate-600 relative'>
      <BsThreeDots onClick={() => { setSettingsModal(!settingsModal) }} className='absolute right-2 text-white text-2xl cursor-pointer' />
      {
        settingsModal && (
          <div className='flex flex-col p-4 bg-slate-600 rounded-lg absolute right-2 top-5'>
            <a onClick={deleteItem} className='text-white cursor-pointer'>Sil</a>
            <a onClick={editItem} className='text-white cursor-pointer'>Güncelle</a>
          </div>)
      }
      <img src={item?.file} className='rounded-lg' />
      <h3 className='px-4 font-bold mt-3 text-white'>{item.name}</h3>
      <h3 className='px-4 py-1 mb-3 text-white'>{item.price}</h3>
    </div>
  )
}

export default ProductCard