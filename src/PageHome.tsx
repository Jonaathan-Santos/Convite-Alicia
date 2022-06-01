import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import imagemPass from './assets/pass-alicia.png'
import imagemAviao from './assets/aviao.png'
import video from './assets/Videodoconvite.mp4'
import musica from './assets/musicaAlicia.mp3'



function PageHome() {

    const [IsOpem, setIsOpem] = useState<boolean>(false)

    const { nomes } = useParams()


    return (
        !IsOpem ? 

            (
                < div className="w-full bg-[#e0ceb8] h-[100vh] flex flex-col items-center justify-between" >

                <img className='w-[25%] mb-4' src={imagemPass} alt="" />

                <div className="w-[60%] bg-[#e7dac9] p-2 rounded-md flex flex-col">
                    <span><span className='font-bold'>De:</span> Alicia</span>
                    <span><span className='font-bold'>Para:</span> {nomes}</span>

                </div>

                <span className='w-[80%] text-center'>
                    Olá, não consigo descrever o quanto estou feliz.
                    Quero te convidar para comemorar comigo  o <span className='font-bold'>Batismo do Voo solo</span>  esse momento tão marcante na minha vida e a todos os pilotos que for conhecer.
                </span>
                <div className="w-14 bg-[#5D4840] h-14 rounded-full relative flex items-center justify-center" onClick={()=> setIsOpem(true)}>
                    <span className='text-slate-100 text-3xl '>{">"}</span>
                    <div className="w-14 bg-[#5D4840] h-14 rounded-full animate-ping absolute top-0 bottom-0 left-00 right-0">

                    </div>
                </div>

                <img className='w-[90%] mb-8' src={imagemAviao} alt="" />
                </div >
            ): <div className="w-full">
                <video src={video} autoPlay />
                <audio src={musica} autoPlay/>
            </div>
            
        
    )
}

export default PageHome