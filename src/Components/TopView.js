import { useCallback, useEffect, useRef, useState } from "react"

import { useDispatch ,useSelector} from "react-redux"
import { addAllVideos } from "../utils/dataSlice"
import { addVideoSkip,addError, addShowLatestStatus } from "../utils/generalSlice"
import { oldData } from "../constant"
import useShortsData from "../utils/useShortsData"
import YouTube from "react-youtube"
import CustomShimmerBox from "./CustomShimmerBox"
import { XCircle } from "react-bootstrap-icons"
import OpenMsgbox from "./OpenMsgbox"
const TopView=()=>{
const dispatch=useDispatch()
const selectOnlyVideos=useSelector((store)=>store.dataSliced.onlyVideos)//
const selectDatavideo=useSelector((store)=>store.dataSliced.allVideos)
const slectError=useSelector((store)=>store.generalData.ErrorData)

const [topCard , setTopCard] = useState(null)
const [videoStop,setVideoStop] = useState(null)
const [showMsg , setShowMsg] = useState(null)

    //fetching shorts data
useShortsData()

useEffect(()=>{
        //to save credits of api we only want to call api only once---
        //even when app component is ummounted it will not call it again
        if(!selectDatavideo){
        videoFetch() ;
         //  console.log(selectDatavideo)
        }
      dispatch(addShowLatestStatus(true))
    },[])
//lllll

    
    async function videoFetch(){

     

try{
   
   
const data = await fetch(`https://www.googleapis.com/youtube/v3/search?key=${process.env.REACT_APP_YT_KEY}&channelId=UCW9A1mvMHxVrGViwx4WCbcQ&part=snippet%2Cid&type=video&order=date&maxResults=20 `)
       
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
    if(!selectDatavideo){
        return
    }  
    if(!selectOnlyVideos) {
        return
    } 
//here we can use any selectonlyvidos or selectdatavideos---because if api fail data is dispatched
//to selectdatavideos so that we are using this but we can also use selectonlyvideo tht also works as it filtered data

    const liveVideo = selectOnlyVideos?.find((item) => item.snippet.liveBroadcastContent === "live");
    setTopCard(liveVideo || selectOnlyVideos?.[0]); //if live then go for it otherwise latest one

     liveVideo?dispatch(addVideoSkip(liveVideo)):dispatch(addVideoSkip(selectOnlyVideos[0]))   


}, [selectDatavideo,selectOnlyVideos]);

const selectIframeVideoTopViewStatus=useSelector((store)=>store.generalData.showLatestVideoStatus)

 
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





    function dynamicallyCreateAnchorAndNavigate(url) {
        let anchorElement = document.createElement('a');
         
        anchorElement.href = url;
      
        document.body.appendChild(anchorElement);
        anchorElement.click();
        document.body.removeChild(anchorElement);
      }
      
      function openInNewTab(url){
        dynamicallyCreateAnchorAndNavigate(url);
      }



const onMessage=useCallback(()=>{
setShowMsg(null)
},[])

const onbanner=useCallback(()=>{
    setVideoStop(false)
    },[])
    


    return(
        <>
{showMsg && <OpenMsgbox className=" " videoIdval={topCard?.id?.videoId} setShowMsg={()=>onMessage()} setVideoStop={()=>onbanner()}/>
}
  <div>
    <div>
    
        <div>
 
 </div>

<div className="flex flex-col lg:flex-row justify-center lg:justify-between">
 <div className="w-full pt-[20px]  p-2 lg:w-4/6">
 <div className="  video-container">
{ topCard&&topCard.snippet.liveBroadcastContent === "live"? <span className="absolute bg-red-600 text-white top-0 z-20 p-1 rounded-md">Live video</span>:<div className="absolute bg-red-600 text-white top-0 z-20 p-1 rounded-md ">{!slectError && <span >Latest Video</span>}<span className="text-xs">{`${slectError ?  "check REDMIKE Youtube  channel for latest videos":""}`}</span></div>}
{
    !topCard && <CustomShimmerBox value={1}  />
}
{
    //using same redux store for latest video and plylistvideo and topvidew 
    selectIframeVideoTopViewStatus &&  <div className=" z-[100] relative flex justify-center flex-row "><div className="loader  absolute">   </div>   <span className="z-[300]" onClick={()=>dispatch(addShowLatestStatus(null))}> <XCircle color="gray"  size={28}/></span>  </div>
}


{///banner to stop after 2seconds
    videoStop && <div className="relative z-[10]">
        <div className="absolute bg-red-500 w-full h-[1000px] animate-slide-down">
            <div className="mt-4 sm:mt-40 text-center ">
                <div className=" w-1/2 bg-white rounded-md p-9 m-auto">
                  Moving to Youtube .. in  1seconds..
                  {/*showMsg&&<p className="text-red-700">please check  pop up in browser</p>*/}
                </div>
                </div>
        </div>
    </div>
}



{topCard && <YouTube className=" topvideo sm:hover:bg-black sm:hover:opacity-80" 

videoId={topCard?.id?.videoId}
loading="loading...."
title="THE REDMIKE"
opts={opts}
onReady={(event) => {
  dispatch(addShowLatestStatus(null))
  }}
  onPlay={(event) => {
   dispatch(addShowLatestStatus(null))
    }}


    onStateChange={(event) => {
      //  console.log(event.data, "this is event", event.target.getCurrentTime());
        
      
 if(event.data === 1){
            
 setTimeout(()=>{
     event.target.pauseVideo()
     setVideoStop(true)
    
        setTimeout(()=>{
       // setVideoStop(false)
     const allowed= window.open(`https://www.youtube.com/watch?v=${topCard?.id?.videoId}`,"_blank")
     console.log("allwoing",allowed)
if(!allowed){
setShowMsg(true)
}
allowed?setVideoStop(false):setVideoStop(true)

},2000)

    

      },6000)

     } 

    }}




onEnd={onEnd}

/>
}</div>
 </div>



 <div>
    {topCard && <div>
        <div className="lg:mt-28">
    <div className="text-2xl font-extrabold p-2 m-3 lg:mb-4"><h1>{topCard?.snippet?.title}</h1></div>
    <div className="bg-red-500   p-2 w-44 ml-6 text-white font-semibold rounded-md lg:ml-8"> <a href={`https://www.youtube.com/watch?v=${topCard?.id?.videoId}`} target="_blank" rel="noopener noreferrer"><button>Watch on Youtube</button></a> </div>      
        <p className="mt-9 ml-6 ">{topCard?.snippet?.description?.split(" ")?.slice(0,15)?.join(' ')}</p>
        </div>
        
        </div>}
 </div>

</div>





</div></div>

        </>
    )
}
export default  TopView