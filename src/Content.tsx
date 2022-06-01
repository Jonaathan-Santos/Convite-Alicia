import { Popover } from '@headlessui/react'
import React, { useState } from 'react'
import headImg from './assets/headpng.png'

const Buttoms = [

    {
        text: 'Check-in'
    },
    {
        text: 'Local'
    },
]

function Content() {

    const [Option, setOption] = useState("")
    
    return (
        <div className="w-full h-[100vh] select-none text-[#5D4840] flex items-center justify-around flex-col">
            <div className="w-[90%] h-[190px] rounded-md my-6 shadow-md flex p-2 flex-col bg-[#e7dac9] ">
                <span className="text-xl font-semibold mb-2">
                    O que é o voo solo?
                    
                </span>
                <span>
                    É quando durante o curso prático de piloto privado, você é avaliado e liberado para fazer o seu primeiro voo sozinho.
                    <br/>
                    <br/>
                    O batismo é uma tradição, um banho com óleo queimado.
                </span>
            </div>
            <div className='w-full flex flex-col justify-center items-center flex-1'>
                <Popover className="relative w-full h-full flex items-center flex-col">

                    <Popover.Panel>
                        {
                            Option == "Check-in"? <span>Check-in</span>: 
                            Option == "Local"? <span>Local</span>: ''
                        }
                    </Popover.Panel>

                    <Popover.Button className="w-full outline-none absolute bottom-16 flex items-center flex-col cursor-none">
                        {
                            Buttoms.map((item, index) => <div onClick={()=> setOption(item.text)} className='w-[80%] h-10 flex items-center justify-center text-xl my-2 shadow-md text-center bg-[#e7dac9] rounded-md ba' >{item.text}</div>)
                        }
                    </Popover.Button>

                </Popover>

            </div>

        </div>
    )
}

export default Content