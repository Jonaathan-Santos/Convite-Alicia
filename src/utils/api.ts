import axios from "axios";

const api = axios.create({
  baseURL: 'https://convite-server-production.up.railway.app'
})

export async function onConfirm (nome: string){
  const confirmName = await  api.post('/confirm', {nome})
  console.log(confirmName)

  if(confirmName.data.nome == nome){

    localStorage.setItem("confirmStorage", JSON.stringify({confirm: true}))
  }
}


