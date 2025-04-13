import React from 'react'
import Sidebar_Product from './Sidebar_Product'
import Main_Product from './Main_Product'

export default function All_Product() {
  return (
    <>
      <div className='max-w-7xl mx-auto flex  '>        
        <Sidebar_Product />
        <Main_Product />
      </div>

    </>
  )
}
