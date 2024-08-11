import { useEffect, useState } from "react"

import { useDispatch ,useSelector} from "react-redux"
import { addAllVideos } from "../utils/dataSlice"
import { addVideoSkip,addError } from "../utils/generalSlice"
import { oldData } from "../constant"
import useShortsData from "../utils/useShortsData"

const TopView=()=>{
const dispatch=useDispatch()

const selectDatavideo=useSelector((store)=>store.dataSliced.allVideos)
const slectError=useSelector((store)=>store.generalData.ErrorData)

const [topCard , setTopCard] = useState(null)


    //fetching shorts data
useShortsData()

useEffect(()=>{
        //to save credits of api we only want to call api only once---
        //even when app component is ummounted 
        if(!selectDatavideo){
         videoFetch() ;
         //  console.log(selectDatavideo)
        }

    },[])

    
    async function videoFetch(){

     

try{

  
        const data = await fetch(`
  https://www.googleapis.com/youtube/v3/search?key=${process.env.REACT_APP_YT_KEY}&channelId=UCW9A1mvMHxVrGViwx4WCbcQ&part=snippet%2Cid&type=video&order=date&maxResults=20`)
        
const json = await data.json()

console.log(json)
if(json?.items){
 //   console.log(selectDataShorts)





dispatch(addAllVideos(json?.items))

}else{
    //if api quota over then use old data
   
    dispatch(addAllVideos(oldData))
   // console.log(oldData)
   dispatch(addError(" Check your youtube channel for latest"))

}
}catch(error){
    //if data not fetch use old data
    dispatch(addAllVideos(oldData))
    dispatch(addError(" Check your youtube channel for latest"))

}
        

        }


useEffect(() => {
//aa to enure it call when data is avail
    if(!selectDatavideo) return


    const liveVideo = selectDatavideo?.find((item) => item.snippet.liveBroadcastContent === "live");
    setTopCard(liveVideo || selectDatavideo?.[0]); //if live then go for it otherwise latest one

     liveVideo?dispatch(addVideoSkip(liveVideo)):dispatch(addVideoSkip(selectDatavideo[0]))  


}, [selectDatavideo]);





 //console.log(selectDatavideo)


    return(
        <>
  {slectError && slectError}
  <iframe 
    className=" aspect-video bg-black"
  
     //width="400"
    
     src={"https://www.youtube.com/embed/"+ topCard?.id?.videoId+"?autoplay=0&mute=1"}
      title="YouTube video player" 
     frameBorder="0" 
     allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
     allowFullScreen
     autoplay
     >

    </iframe>

        </>
    )
}
export default  TopView