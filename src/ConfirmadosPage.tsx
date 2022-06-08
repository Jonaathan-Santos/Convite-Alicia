

import { useEffect, useState } from 'react'
import imagemAviao from './assets/aviao.png'
import acess from './utils/acess'
import { ConvidadoList, onList } from './utils/api'



function ConfirmadosPage() {

  const [Acess, setAcess] = useState<boolean>(true)
  const [Incorret, setIncorret] = useState<boolean>(false)
  const [pass, setPass] = useState<string>('')
  const [List, setList] = useState<ConvidadoList[]>([])

  useEffect(() => {
    
    async function getList() {

      const result = await onList() 
      setList(result)
    }
    getList()

  }, [])
  


  return (


    <div className="w-full h-[100vh] max-w-md bg-[#e0ceb8] flex flex-col items-center justify-around" >

      {
        !Acess?
        <div className="w-[80%] bg-[#e7dac9] shadow-xl text-[#5D4840] rounded-md  flex intems-center flex-col justify-center p-4">
          <span className='mb-2'>Digite a senha de acesso:</span>
          <input type="password" onChange={(event)=> setPass(event.target.value)} placeholder='senha' className='bg-[#e0ceb8] rounded-md  p-2 outline-none placeholder:text-[#5D4840]' />
          {Incorret && <span className='mb-2'>Senha incorreta!</span>}
          <div onClick={()=> {acess(pass, setAcess, setIncorret)}} className="w-[40%] bg-[#5D4840] text-[#e7dac9] rounded-md p-1 my-2 flex justify-center items-center">Confirmar</div>
        </div>
        :
        <div className='w-full flex flex-col items-center flex-1 pt-8 text-[#5D4840]'>
          <div className='w-[80%] flex flex-col items-center'>
            <span className='text-xl font-bold'>Olá Alícia!</span>
            <span>Essas são as pessoas que confirmaram presença na sua festa:</span>
          </div>
          <div className='  bg-[#5D4840] w-[80%] flex-1 rounded-md my-4 overscroll-auto p-3 flex flex-col'>
            {
              List.map((item)=> <span className='p-2 bg-[#e7dac9] shadow-lg font-bold text-lg rounded-md my-1'>{item.nome}</span>)
            }

          </div>

        </div>


      }
      <img className='w-[90%] mb-8' src={imagemAviao} alt="teste" />

    </div >

  )
}

export default ConfirmadosPage