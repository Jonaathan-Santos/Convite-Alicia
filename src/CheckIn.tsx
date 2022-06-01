import React from 'react'
import CheckImg from './assets/check.png'

function CheckIn({nomes}: any) {
    
    const passageiros = nomes.split('-')

  return (
    <div className='w-full flex justify-center shadow-md relative'>
        <img className='w-[98%] ' src={CheckImg} alt="" />
        <div className="w-[88%] p-2 absolute top-0 bottom-0 flex flex-col">
            Passageiros:

            <div className="w-[70%]  flex flex-wrap">
                {passageiros.map((item: string)=> <span className='ml-2'>• {item.replace("@", ' ')}</span>)}

            </div>
            <div className="w-[70%] flex ">
                Obs: A cofirmação deve ser feita até dia 22/22
                

            </div>
          
        </div>

    </div>
  )
}

export default CheckIn