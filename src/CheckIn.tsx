import React from 'react'
import CheckImg from './assets/check.png'

function CheckIn({nomes}: any) {
    
    const passageiros = nomes.split('-')

  return (
    <div className='w-full flex justify-center shadow-md relative'>
        <img className='w-[95%] ' src={CheckImg} alt="" />
        <div className="w-[80%] p-2 absolute top-0 bottom-0 flex flex-col">
            Passageiros:
          
            {passageiros.map((item: string)=> <span>- {item}</span>)}
        </div>
    </div>
  )
}

export default CheckIn