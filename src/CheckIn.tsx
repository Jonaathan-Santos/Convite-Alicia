import React, { useEffect, useState } from 'react'
import CheckImg from './assets/check.png'
import Carimbo from './assets/carimbo.png'
import {  onConfirm } from './utils/api'

function CheckIn({ nomes }: any) {

    const [Confirmed, setConfirmed] = useState<boolean>(false)
    const [Check, setCheck] = useState<boolean>(false)

    if(!localStorage.getItem("confirmStorage")){
      localStorage.setItem("confirmStorage", JSON.stringify({confirm: false}))
    }

    useEffect(() => {

      const confirmStorage = localStorage.getItem("confirmStorage")
      const {confirm} = JSON.parse(confirmStorage as string)
      setConfirmed(confirm)

    }, [Check])
    

    const passageiros = nomes.split('-')

    return (
        <div className='w-full flex justify-center shadow-md relative'>
            <img className='w-[98%] ' src={CheckImg} alt="" />

            <div className="w-[88%] p-2 absolute top-0 bottom-0 flex flex-col justify-end text-xl">
                Passageiros:
                {
                    Confirmed && 
                        <div className='bg-[#ebdfc9bb] w-[70%] z-20 absolute top-2 bottom-2 flex items-center'>
                            <img className="w-[100%] drop-shadow-lg" src={Carimbo} alt="" />
                        </div>
                }

                <div className="w-[70%]  flex flex-wrap flex-1">
                    {passageiros.map((item: string) => <span className='ml-2'>• {item.replace("@", ' ')}</span>)}

                </div>
                <div className="w-[70%] flex p-1 bg-[#cdbba5] text-sm ">
                    confirme antes do dia  10/06
                </div>

                <button
                    type='button'
                    onClick={async () => {await onConfirm("vai que é tua"); setCheck(true)}}
                    disabled={Confirmed}
                    className='bg-[#5D4840] py-1 text-[#e8d4bb] text-xl font-semibold w-[70%] rounded-md my-2'
                >
                    Fazer Check-In
                </button>

            </div>


        </div>
    )
}

export default CheckIn