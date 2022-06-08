


export default (pass: string, onConfirm: (arg: boolean)=>void, onError: (arg: boolean)=>void) => {
  
  if(!localStorage.getItem("key")){

    const key = 'batismo1806'
  
    if(key === pass){
      onConfirm(true)
      localStorage.setItem("key","true")
    }
    else{
      onError(true)
    }
  }else{
   
    onConfirm(true)
    
  }

}