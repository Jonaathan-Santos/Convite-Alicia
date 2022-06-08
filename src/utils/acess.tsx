


export default (pass: string, onConfirm: (arg: boolean)=>void, onError: (arg: boolean)=>void) => {
  
  const key = 'batismo1806'

  if(key === pass){
    onConfirm(true)
  }
  else{
    onError(true)
  }


}