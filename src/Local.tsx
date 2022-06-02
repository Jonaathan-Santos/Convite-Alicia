import React from 'react'
import CheckImg from './assets/check.png'
import Point from './assets/point-alicia.png'

function Local() {
    
    

  return (
    <div className='w-full flex justify-center shadow-md relative'>
        <img className='w-[98%] ' src={CheckImg} alt="" />
        <div className="w-[88%]  p-2 absolute top-0 bottom-0 flex flex-col justify-end">
            <div className="w-[70%] flex justify-center">

                <img 
                    src={Point} 
                    alt=""
                    className='w-[18%] ml-2'
                    
                />
            </div>

            <div className="w-[70%]  flex  text-2xl text-center p-1 justify-center">
                
               <span>Aero Club de Brasília</span> 
            </div>
            
            <button
                type='button'
                className='bg-[#5D4840] py-1 text-[#e7dac9] text-xl font-semibold w-[70%] rounded-md my-2'
            >
                Abrir no Mapa
            </button>
          
        </div>

    </div>
  )
}

export default Local