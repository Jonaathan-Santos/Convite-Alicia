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
        <div className="w-ful flex justify-center items-center bg-zinc-800">
            {

                !IsOpem ? <Capa nomes={nomes} onOpem={setIsOpem}/> :
                    <>
                        <div className="w-full h-full relative max-w-md">

                            <div className="w-full h-screen  max-w-md z-0 ">
                                <video src={video} className='min-h-screen h-screen' autoPlay loop/>
                                <audio src={musica} autoPlay loop/>
                            </div>
                            <div className="w-full opacity-40 bg-zinc-700 z-10 absolute top-0 left-0 right-0 bottom-0">

                            </div>
                            <div className="w-full z-20 absolute top-0 left-0 right-0 bottom-0">
                                <Content/>
                            </div>
                        </div>
                    </>
            }
        </div>
        
            
        
    )
}

export default PageHome