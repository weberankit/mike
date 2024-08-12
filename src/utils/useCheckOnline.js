import { useState ,useEffect,useCallback} from "react";

const useCheckOnline=()=>{
const [online , setOnline]=useState(true)
const onlineMode=useCallback(()=>{setOnline(true)},[])
const offlineMode=useCallback(()=> {
           setOnline(false);
         
  },[])
  






useEffect(()=>{
  
     
      
      window.addEventListener("online", onlineMode);
      window.addEventListener("offline", offlineMode);
return () => {
    window.removeEventListener("online", onlineMode);
    window.removeEventListener("offline", offlineMode); 
  };

},[])

return online

}
export default useCheckOnline;