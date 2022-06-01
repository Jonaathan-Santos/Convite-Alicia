import React, { useState } from 'react'
import { useParams } from 'react-router-dom'

import video from './assets/Videodoconvite.mp4'
import musica from './assets/musicaAlicia.mp3'
import Capa from './Capa'
import Content from './Content'



function PageHome() {

    const [IsOpem, setIsOpem] = useState<boolean>(false)

    const { nomes } = useParams()


    return (
        <div className="w-ful h-screen flex justify-center items-center bg-zinc-800 flex-col" >
            {

                !IsOpem ? <Capa nomes={nomes} onOpem={setIsOpem}/> :
                    <>
                        <div className="w-full flex-1 relative max-w-md">

                            <div className="w-full h-full max-w-md z-0">
                                <video src={video}  autoPlay loop playsInline/>
                                <audio src={musica} autoPlay  loop/>
                            </div>
                            <div className="w-full opacity-40 bg-zinc-700 z-10 absolute top-0 left-0 right-0 bottom-0">

                            </div>
                            <div className="w-full z-20 absolute top-0 left-0 right-0 bottom-0">
                                <Content nomes={nomes}/>
                            </div>
                        </div>
                    </>
            }
            <div className="w-3 h-[7%]">.</div>
            
        </div>
        
            
        
    )
}

export default PageHome