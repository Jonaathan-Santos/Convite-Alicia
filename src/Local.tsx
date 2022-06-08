import React from 'react'
import CheckImg from './assets/check.png'
import Point from './assets/point-alicia.png'

function Local() {
    
    

  return (
    <div className='w-full flex justify-center shadow-md relative'>
        <img className='w-[98%] ' src={CheckImg} alt="" />

        
        <div className="w-[88%]  p-1 absolute top-0 bottom-0 flex flex-col justify-end">
            <div className="w-[70%] flex justify-center items-center">

                <div className="w-[70%] flex-1 flex flex-col text-xl text-center justify-center">
                    
                    <span>Aero Bar</span>
                    <span>(Restaurante)</span>
                </div>
                <img 
                    src={Point} 
                    alt=""
                    className='h-[50px] ml-1 rotate-45'
                    
                />
            </div>

            <a href="https://www.google.com/maps/search/Aeroclube%20de%20Luziania/@-16.258852005004883,-47.96821975708008,17z?hl=pt-BR" className='no-underline'>

                <div
                    
                    className='bg-[#5D4840] py-1 text-[#e7dac9] text-xl font-semibold w-[70%] rounded-md my-2 flex justify-center items-center'
                >
                    Abrir no Mapa
                </div>
            </a>
          
        </div>

    </div>
  )
}

export default Local