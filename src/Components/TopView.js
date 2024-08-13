import { useEffect, useRef, useState } from "react"

import { useDispatch ,useSelector} from "react-redux"
import { addAllVideos } from "../utils/dataSlice"
import { addVideoSkip,addError } from "../utils/generalSlice"
import { oldData } from "../constant"
import useShortsData from "../utils/useShortsData"
import YouTube from "react-youtube"
import CustomShimmerBox from "./CustomShimmerBox"

const TopView=()=>{
const dispatch=useDispatch()

const selectDatavideo=useSelector((store)=>store.dataSliced.allVideos)
const slectError=useSelector((store)=>store.generalData.ErrorData)

const [topCard , setTopCard] = useState(null)


    //fetching shorts data
useShortsData()

useEffect(()=>{
        //to save credits of api we only want to call api only once---
        //even when app component is ummounted it will not call it again
        if(!selectDatavideo){
        videoFetch() ;
         //  console.log(selectDatavideo)
        }

    },[])

    
    async function videoFetch(){

     

try{
    
    const q=process.env.REACT_APP_YT_KEY
const data = await fetch(`https://www.googleapis.com/youtube/v3/search?key=${p+"ll"}&channelId=UCW9A1mvMHxVrGViwx4WCbcQ&part=snippet%2Cid&type=video&order=date&maxResults=20 `)
       
const json = await data.json()

console.log(json)
if(json?.items){
 //   console.log(selectDataShorts)

dispatch(addAllVideos(json?.items))
dispatch(addError(null))
}else{
    //if api quota over then use old data
   console.log("do")
    dispatch(addAllVideos(oldData))
   // console.log(oldData)
   dispatch(addError(" Check REDMIKE youtube channel for latest"))

}
}catch(error){
    console.log("kk")
    //if data not fetch use old data
    dispatch(addAllVideos(oldData))
    dispatch(addError(" Check REDMIKE youtube channel for latest"))


        
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
 const onEnd = (event) => {
    event.target.seekTo(0); // Seek to the beginning of the video
  }; 
const opts={
    height: '100%',
    width: '100%',

    playerVars: {
    // Hide video title and related video info
        modestbranding: 1, // Reduces YouTube branding
          autoPlay:0,
          mute: 0,
          rel:0,
          controls:1,
      },
}
    return(
        <>

  <div>
    <div>
    
        <div>
 
 </div>

<div className="flex flex-col lg:flex-row justify-center lg:justify-between">
 <div className="w-full pt-[20px]  p-2 lg:w-4/6">
 <div className="  video-container">
{ topCard&&topCard.snippet.liveBroadcastContent === "live"? <span className="absolute bg-red-600 text-white top-0 z-20 p-1 rounded-md">Live video</span>:<div className="absolute bg-red-600 text-white top-0 z-20 p-1 rounded-md ">{!slectError && <span >Latest Video</span>}<span className="text-xs">{`${slectError ?  "check REDMIKE Youtube  channel for latest videos":""}`}</span></div>}
{
    !topCard && <CustomShimmerBox value={1} height={"440px"} bgt={"bg-black"} />
}
{topCard && <YouTube className=" topvideo" 

videoId={topCard?.id?.videoId}
loading="loading...."
title="THE REDMIKE"
opts={opts}
onReady={(event) => {
    // You can access the player here if needed
  /* event.target.playVideo();*/ 
  }}
onEnd={onEnd}

/>
}</div>
 </div>



 <div>
    {topCard && <div>
        <div className="lg:mt-28">
    <div className="text-2xl font-extrabold p-2 m-3 lg:mb-4"><h1>{topCard?.snippet?.title}</h1></div>
     <a href={`https://www.youtube.com/watch?v=${topCard?.id?.videoId}`} target="_blank" rel="noopener noreferrer"><div className="bg-red-500 text-whit p-2 w-44 ml-6 text-white font-semibold rounded-md"><button>Watch on Youtube</button></div></a>       
        </div>
        
        </div>}
 </div>

</div>





</div></div>

        </>
    )
}
export default  TopView