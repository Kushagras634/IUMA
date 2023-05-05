import React from 'react'

const PatientsCards = ({name, type, timing}) => {
  return (
    <div className='flex items-center justify-between border-lightGrey border-2 bg-white p-2'>
      <div>
        <p className=' font-normal text-lg' >{name}</p>
        <p className=' uppercase text-sm font-thin' >{type}</p>
      </div>
      <p className=' font-semibold text-3xl text-green-400' >{timing}</p>
    </div>
  )
}

export default PatientsCards