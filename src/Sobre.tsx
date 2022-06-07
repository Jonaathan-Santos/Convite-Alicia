import React from 'react'
import CheckImg from './assets/check.png'


function Sobre() {



    return (
        <div className='w-full flex justify-center shadow-md relative'>
            <img className='w-[98%] ' src={CheckImg} alt="" />
            <div className="w-[85%] bg-[#ebdfc9]  p-2 absolute top-4 bottom-4 flex flex-col justify-center">


                <div className="w-[88%]  flex flex-col   text-center justify-center">

                    <span className='text-xl font-bold'>
                        18 de Junho de 2022 às 13:30
                    </span>

                    <span>
                        Será um churrasco para almoçarmos juntos.
                        Peço para que levem suas bebidas. Caso queira consumir no local, 
                        fica a seu critério.
                    </span>
                </div>



            </div>

        </div>
    )
}

export default Sobre