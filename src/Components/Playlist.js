
import { useParams } from "react-router-dom"
import { useEffect, useCallback, useState } from "react"
import { useSelector,useDispatch } from "react-redux"
import { addPlayListData } from "../utils/playlistSlice"
import YouTube from "react-youtube"
//import { lazy,Suspense } from "react"
//import { listof8pm ,listbreaking, listTrmDuniya, dataApiCreditOver} from "./playlistconstant"
import { dataApiCreditOver, titlePlay} from "./playlistconstant"
import Header from "./Header"
import { addShowLatestStatus } from "../utils/generalSlice"
import CustomShimmerBox from "./CustomShimmerBox"
import { XCircle ,Play, Circle} from "react-bootstrap-icons"
//import liveImg from "../image/live-img.png"
import OpenMsgbox from "./OpenMsgbox"
const Playlist =()=>{


  let latestEventData; // Variable to store the latest event data
  let timeID1, timeID2; 


const {id}=useParams()
console.log(id,"this is id")
const selectPlaylistData= useSelector((store)=>store.playlistSliced.playListData)
console.log(selectPlaylistData,"nullwala")
const [videoStop,setVideoStop] = useState(null)
const [showMsg , setShowMsg] = useState(null)

const selectIframeStatus=useSelector((store)=>store.generalData.showLatestVideoStatus)
const dispatch=useDispatch()
const [dataSrc,setDataSrc] =useState(null)

  async function dataFetchPlayList(){
    try{
    const data=await fetch(`https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=12&playlistId=${id}&key=${process.env.REACT_APP_PLAYLIST_KEY}`)

   const json= await data.json()
   console.log(json.items)
   if(json.items){
   dispatch(addPlayListData(json.items))
   }else{
  dataApiCreditOver(id,dispatch,addPlayListData)


   }
  }catch(error){
    dataApiCreditOver(id,dispatch,addPlayListData)
  }

  }

  useEffect(()=>{
     if(!selectPlaylistData[id]){
        dataFetchPlayList()
     }
     dispatch(addShowLatestStatus(true)) 

  },[selectPlaylistData,id])

  function scroll(){
    window.scrollTo({top:0 , behavior: "smooth" })
}

const onEnd = (event) => {
  event.target.seekTo(0); // Seek to the beginning of the video
  clearTimeout(timeID1);clearTimeout(timeID2)
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


const onMessage=useCallback(()=>{
  setShowMsg(null)
  },[])
  
  const onbanner=useCallback(()=>{
      setVideoStop(false)
      },[])
      





    return(
        <>
 
 

 {showMsg && <OpenMsgbox className="bg-black absolute w-full " videoIdval={dataSrc.snippet.resourceId.videoId} setShowMsg={()=>onMessage()} setVideoStop={()=>onbanner()}/>
}






        <Header  hideTopUp={"hidden"}/>
      {!selectPlaylistData[id] && <div><CustomShimmerBox value={1}/></div>}

        <div className="p-2 sm:mt-12 ">
<div className="flex flex-col sm:flex-row ">


{!dataSrc && (
  <>
    {selectPlaylistData[id] && (
    <>
    <div className=" w-full sm:w-[50%]">
   <div> <h1 className="text-4xl font-extrabold p-4">  <span className="text-red-500 text-3xl sm:text-6xl"> { titlePlay(id).toUpperCase()}</span></h1></div>
    <div> <h2 className="text-xl sm:text-2xl w-full sm:w-4/5 p-4">{selectPlaylistData[id][0].snippet.title} </h2></div>
   
   
   <div>
 <div>
  <img className="  w-44 sm:w-80 rounded-full m-auto hidden sm:block" alt="logo-img" src="https://ucarecdn.com/90da0f60-21e5-4b6c-affc-3879ade004fc/miked.png"></img>
 </div>

   </div>
   
   
   
   
   <div className="text-3xl text-red-500  font-extrabold hidden sm:block"> Headlines:</div>
    <div className="hidden sm:block">
      <ul>
{selectPlaylistData[id].map((item)=>{
  return(
    <div key={item.snippet.resourceId.videoId}>

    <li className="mt-1"><h2 className=" font-semibold flex flex-row"><span className="text-red-500 m-1 mt-2"><Circle size={8} /></span>{item.snippet.title}</h2></li>

    </div>
  )
  
})}
</ul>
    </div>
    </div>
    </>
    )}
  </>
)}






{  dataSrc &&
 <div className=" w-full sm:w-[60%] ">
   <div className="w-full ">
<div className="video-container sm:mt-12">
    {selectIframeStatus &&  <div className=" z-[100] relative flex justify-center flex-row "><div className="loader  absolute">   </div>   <span className="z-[300]" onClick={()=>dispatch(addShowLatestStatus(null))}> <XCircle color="gray"  size={28}/></span>  </div>}
 
    {//using for banner to stop video
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

 
 
  <YouTube  
className="topvideo"
videoId={dataSrc.snippet.resourceId.videoId} 
loading="loading...."
title="THE REDMIKE"
opts={opts}
onReady={(event) => {
    // You can access the player here if needed
  /* event.target.playVideo();*/ 
  dispatch(addShowLatestStatus(null))
  }}
  onPlay={()=>{
    dispatch(addShowLatestStatus(null))
  }}
  onStateChange={(event) => {
 console.log(event.data, "this is event", event.target.getCurrentTime());
      
   latestEventData = event.data;  
if(event.data === 1){
      
timeID1= setTimeout(()=>{
  console.log(event.data,latestEventData)
  if (latestEventData === 2) { 
    console.log("Video stopped, clearing first timeout.");
    clearTimeout(timeID1);
    return;
}


   event.target.pauseVideo()
   setVideoStop(true)
  
  // Second timeout to open YouTube link in a new tab
 timeID2=  setTimeout(()=>{
  if (latestEventData === 2) return;
   const allowed= window.open(`https://www.youtube.com/watch?v=${dataSrc?.snippet?.resourceId?.videoId}`,'_blank')

   if(!allowed){
    setShowMsg(true)
    }
    //video stopper remove
    allowed?setVideoStop(false):setVideoStop(true)

},2000)

  

    },10000)

   }

  }}





onEnd={onEnd}

/>

</div>

</div>


<div className="pt-2 mt-2">

     <h2 className="text-3xl p-1 m-2 font-extrabold w-4/5"> {dataSrc&&dataSrc?.snippet?.title}</h2> 
  <p className="p-1 text-xl m-1 font-semibold w-4/5">  {dataSrc&& dataSrc?.snippet?.description?.split(" ")?.slice(0,15)?.join(" ")}</p>
  
</div>

</div>


}




<div className="w-full sm:w-[45%] lg:w-[35%] sm:overflow-y-scroll sm:h-[900px] m-auto">
    <h2 className="text-lg font-extrabold p-1 m-1">Playlist video</h2>
<div className="m-auto">

{
    selectPlaylistData[id] && selectPlaylistData[id].map((item,index)=>{
        //skip the playinf video
        console.log(item,dataSrc)
        if(item.snippet.resourceId.videoId !== dataSrc?.snippet?.resourceId?.videoId){
            
        return(
          <div  className="flex xs:flex-col flex-row sm:flex-col sm:w-4/5">
            <div className="topvideo "  onClick={()=>{setDataSrc(item) ; scroll()}}  key={item?.snippet.resourceId.videoId}>
                <div className=" relative">
                  <div className=" hidden sm:block  absolute top-1/2 text-white z-40 left-1/4 right-1/3  animate-spin-outline bg-red-500 w-10 rounded-xl m-auto"><Play className="ml-1" size={35} /></div>
            <img key={item.snippet.thumbnails.medium.url} className="p-2 rounded-3xl sm:hover:bg-black sm:hover:opacity-80"   src={ item.snippet.thumbnails.medium.url}
                            alt={item.snippet.title}></img>
                   </div>


            </div>
            <div className=" w-1/2 xs:w-full xs:text-base text-xl sm:w-[90%] p-1 sm:text-sm lg:font-semibold"> {item.snippet.title}</div>
            </div>
        )  
      }
    })
  
}
</div>                           
</div>


</div>
</div>  

  </>









        
    )
}

export default Playlist