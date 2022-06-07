import React from 'react'
import CheckImg from './assets/check.png'


function Sobre() {



    return (
        <div className='w-full flex justify-center shadow-md relative'>
            <img className='w-[98%] ' src={CheckImg} alt="" />
            <div className="w-[85%] bg-[#ebdfc9] line p-2 absolute top-4 bottom-4 flex flex-col justify-center">


                <div className="w-[100%]  flex flex-col leading-5 text-center justify-center ">

                    <span className='text-md font-bold'>
                        18 de Junho de 2022 às 13:30h
                    </span>

                    <span>
                        Será um churrasco para almoçarmos juntos.
                        Peço para que levem suas bebidas. Caso queira consumir no local, fica a seu critério.
                    </span>
                    <span className='text-md font-bold'>
                        horário do batismo: 17:00h
                    </span>
                </div>



            </div>

        </div>
    )
}

export default Sobre