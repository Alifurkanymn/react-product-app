import React, { useEffect, useState } from 'react'
import Modal from '../components/Modal'
import { useDispatch, useSelector } from 'react-redux';
import Input from '../components/Input';
import Button from '../components/Button';
import { createProduct, editProduct } from '../redux/dataSlice';
import { toggleModal } from '../redux/modalSlice';
import ProductCard from '../components/ProductCard';
import { getProductId } from '../redux/getDataSlice';

function Home() {
  const { modal } = useSelector(state => state.modal)
  const { data } = useSelector(state => state.data)
  const { dataId } = useSelector(state => state.dataId)
  const [productInfo, setProductInfo] = useState({name:"", price: "", file:""});
  const dispatch = useDispatch();

  const onChangeFunction = ((e, type) => {
    if (type == "file") {
      setProductInfo(prev => ({ ...prev, [e.target.name]: URL.createObjectURL(e.target.files[0]) }))
    } else {
      setProductInfo(prev => ({ ...prev, [e.target.name]: e.target.value }))
    }
  })
  const addProduct = (()=>{
    dispatch(createProduct({...productInfo, id: data.length+1}));
    dispatch(toggleModal());
    setProductInfo({name:"", price: "", file:""})
  })
  const editProducts = (()=>{
    setProductInfo({name:"", price: "", file:""})
    dispatch(editProduct({...productInfo, id: dataId}));
    dispatch(toggleModal())
    dispatch(getProductId(""))
  })
  useEffect(()=>{
    if(dataId){
      const editItem = data.find(item => item.id == dataId)
      setProductInfo(editItem)
    }
  },[dataId])

  const modalContent = (
    <>
      <form className=' h-full min-h-[300px] flex flex-col justify-center'>
        <Input labelName={"Ürün Adı"} value={productInfo?.name} functionName={onChangeFunction} name={"name"} type={"text"} />
        <Input labelName={"Ürün Fiyatı"} value={productInfo?.price} functionName={onChangeFunction} name={"price"} type={"text"} />
        <Input labelName={"Ürün Resmi"} functionName={onChangeFunction} name={"file"} type={"file"} />
      </form>
      <Button buttonFunction={dataId ? editProducts : addProduct} buttonName={dataId ? "Ürünü Güncelle" : "Ürünü Oluştur"} />
    </>
  )
  return (
    <div className='Home'>
      <div className=' pt-6 flex justify-start'>
        {
          data?.map((item,index)=>{
            return(
              <ProductCard key={index} item={item}/>
            )
          })
        }
      </div>
      
      {
        modal && <Modal modalContent={modalContent} />
      }
    </div>
  )
}

export default Home