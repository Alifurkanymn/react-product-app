import React from 'react'
import Modal from '../components/Modal'
import { useSelector } from 'react-redux';

function Home() {
  const { modal } = useSelector(state => state.modal)

  return (
    <div className='Home'>
        {
          modal && <Modal />
        }
    </div>
  )
}

export default Home