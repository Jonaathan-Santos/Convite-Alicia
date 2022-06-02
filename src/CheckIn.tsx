import React from 'react'
import CheckImg from './assets/check.png'

function CheckIn({nomes}: any) {
    
    const passageiros = nomes.split('-')

  return (
    <div className='w-full flex justify-center shadow-md relative'>
        <img className='w-[98%] ' src={CheckImg} alt="" />
        <div className="w-[88%] p-2 absolute top-0 bottom-0 flex flex-col justify-end text-xl">
            Passageiros:

            <div className="w-[70%]  flex flex-wrap flex-1">
                {passageiros.map((item: string)=> <span className='ml-2'>• {item.replace("@", ' ')}</span>)}

            </div>
            <div className="w-[70%] flex p-1 bg-[#cdbba5] text-sm ">
                Faça a confimação antes do dia 22/22
                

            </div>
            <button
                type='button'
                className='bg-[#5D4840] py-1 text-[#e8d4bb] text-xl font-semibold w-[70%] rounded-md my-2'
            >
                Fazer Check-In
            </button>
          
        </div>

    </div>
  )
}

export default CheckIn