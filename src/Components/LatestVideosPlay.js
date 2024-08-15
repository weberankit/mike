import { useState,useEffect } from "react"
import { useParams ,useNavigate} from "react-router-dom"
import { useSelector,useDispatch } from "react-redux"
import { addShowLatestStatus, addVideoDescData } from "../utils/generalSlice"
import liveImg from "../image/live-img.png"
import YouTube from "react-youtube"
import { Play } from "react-bootstrap-icons"
import Header from "./Header"
import CustomShimmerBox from "./CustomShimmerBox"
import { XCircle } from "react-bootstrap-icons"
//import { Behance } from "react-bootstrap-icons"
const LatestVideosPlay=()=>{
   
    const {id} = useParams()
    const [idValue, setIdValue] = useState(id)
    //if user refersh page then get data from local storage
    const selectOnlyVideos=useSelector((store)=>store.dataSliced.onlyVideos)|| JSON.parse(localStorage.getItem("dataFor"))
   const dispatch=useDispatch()
  
const navigate=useNavigate()
function scroll(){
    window.scrollTo({top:0 , behavior: "smooth" })
}
const selectDescData=useSelector((store)=>store.generalData.videoDescData) 
const selectIframeStatus=useSelector((store)=>store.generalData.showLatestVideoStatus)
//console.log(selectDescData)
const slectError=useSelector((store)=>store.generalData.ErrorData)
//using this if local stoarge is full and user refersh page so we will naviagte them to home page
useEffect(()=>{

 dispatch(addShowLatestStatus(true))

    if (performance.navigation.type === 1 && !selectOnlyVideos) {
        alert("your browser storage is full so moving to home page")
        navigate("/")
      }
},[])

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

useEffect(()=>{
dispatch(addShowLatestStatus(true))
},[idValue])



    return(
        <>
        <Header  hideTopUp={"hidden"}/>
      {!selectOnlyVideos && <div><CustomShimmerBox value={1}/></div>}

        <div className="p-2 sm:mt-12 ">
<div className="flex flex-col sm:flex-row ">


 <div className=" w-full sm:w-[60%] ">
   <div className="w-full ">
<div className="video-container sm:mt-12">
    {selectIframeStatus &&  <div className=" z-[100] relative flex justify-center flex-row "><div className="loader  absolute">   </div>   <span className="z-[300]" onClick={()=>dispatch(addShowLatestStatus(null))}> <XCircle color="gray"  size={28}/></span>  </div>}
    <YouTube  
className="topvideo"
videoId={idValue} 
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
onEnd={onEnd}

/>

</div>

</div>


<div className="pt-2 mt-2">

     <h2 className="text-3xl p-1 m-2 font-extrabold w-4/5"> {selectDescData&&selectDescData?.snippet?.title}</h2> 
  <p className="p-1 text-xl m-1 font-semibold w-4/5">  {selectDescData&& selectDescData?.snippet?.description?.split(" ")?.slice(0,15)?.join(" ")}</p>
  <p className="text-red-500 w-44"> {slectError ? slectError : <div className="p-1 bg-red-500 rounded-lg text-sm text-white"> Latest-videos</div>}</p>
</div>

</div>







<div className="w-full sm:w-[35%] sm:overflow-y-scroll sm:h-[900px] m-auto">
    <h2 className="text-lg font-extrabold p-1 m-1">Recommended video</h2>
<div className="m-auto">

{
    selectOnlyVideos&&selectOnlyVideos.map((item,index)=>{
        //skip the playinf video
        if(item.id.videoId !== idValue){
            console.log(item)
        return(
            <div className="topvideo relative"  onClick={()=>{setIdValue(item.id.videoId);dispatch(addVideoDescData(item)); scroll()}}  key={item.id.videoId}>
                  <div className="   absolute top-1/2 text-white z-40 left-1/3 right-1/3 animate-spin-outline bg-red-500 w-10 rounded-xl m-auto"><Play className="ml-1" size={35} /></div>
            <img key={item.snippet.thumbnails.high.url} className={`p-2 rounded-3xl ${item?.snippet?.liveBroadcastContent === "live" && "border border-dotted border-black w-full"} `}   src={item?.snippet?.liveBroadcastContent === "live"? liveImg : item.snippet.thumbnails.high.url}
                            alt={item.snippet.title}></img>
                            <h1>{/*item?.snippet?.liveBroadcastContent === "live"?"live":""*/}</h1>
            </div>
        )}
    })
}
</div>
</div>


</div>
</div>  

  </>
    )
}

export default LatestVideosPlay