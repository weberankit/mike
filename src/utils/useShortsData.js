import { useDispatch ,useSelector} from "react-redux"
import { addAllShorts } from "./dataSlice"
import { useEffect } from "react"
import { oldShorts } from "../constant"
import { addError } from "./generalSlice"
const useShortsData=()=>{
  const selectDataShorts=useSelector((store)=>store.dataSliced.allShorts)
  const dispatch = useDispatch()
    async function videoFetch(){
      try{

        
  const data = await fetch(`https://www.googleapis.com/youtube/v3/playlistItems?key=${process.env.REACT_APP_YT_KEY+"PPP"}&playlistId=UUSHW9A1mvMHxVrGViwx4WCbcQ&part=snippet,id&maxResults=15`)
           
   const json = await data.json()
   
   console.log(json)
   if(json?.items){
   dispatch(addAllShorts(json.items))
   dispatch(addError(null))
   }else{
    //if api limit is over then use old data
    dispatch(addAllShorts(oldShorts))
    dispatch(addError(" Check REDMIKE youtube channel for latest"))
   }
  }catch(error){
    //if api fail use old data
    dispatch(addAllShorts(oldShorts))
    dispatch(addError(" Check REDMIKE youtube channel for latest"))

  }
           
   
           }

           useEffect(()=>{

            if(!selectDataShorts){
            videoFetch()  
            }

           },[])

    
    
}

export default useShortsData