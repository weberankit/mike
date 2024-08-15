import { useSelector ,useDispatch} from "react-redux"
import { useRef } from "react"
import useFilterVideo from "../utils/useFilterVideo"
import { Link } from "react-router-dom"
import { addVideoDescData } from "../utils/generalSlice"
import { storeDataTorefreshPage } from "../helper"
//import { ImageLazyLoading } from "../helper"
import CustomShimmerBox from "./CustomShimmerBox"
import { CaretLeft, CaretLeftFill, CaretRightFill, Play } from "react-bootstrap-icons"
const VideoList=()=>{
   // const selectDatavideo=useSelector((store)=>store.dataSliced.allVideos)
   const selectSkipVideo=useSelector((store)=>store.generalData.videoSkip)
   //const selectDataShorts=useSelector((store)=>store.dataSliced.allShorts)
   
   const selectOnlyVideos=useSelector((store)=>store.dataSliced.onlyVideos)
   const scrollRef=useRef()
   const dispatch=useDispatch()
   //using to exclde shrot video
useFilterVideo()
//if user move to playvideo-page and if they refersh page  so to prevent tdata loss
 storeDataTorefreshPage(selectOnlyVideos,"dataFor")






function handleMove(e){
if(scrollRef.current){
   const containerToMove=scrollRef.current
   containerToMove.scrollLeft+=e.movementX*0.5
}
}

const handleScrollLeft = () => {
    if (scrollRef.current) {
        scrollRef.current.scrollLeft -= 300; // Adjust this value for desired scroll amount
    }
};
const handleScrollRight = () => {
    if (scrollRef.current) {
        scrollRef.current.scrollLeft += 300; // Adjust this value for desired scroll amount
    }
};






 

    return(
        <>  
        <h1 className="p-1 font-bold text-xl font-mono  ml-8 sm:ml-12  ">LATEST</h1>
          <div  
      
          className="flex flex-row "
           >
{selectOnlyVideos && <button onClick={handleScrollLeft} className="hidden sm:block"><CaretLeftFill   size={50} /> </button>
}



    <div ref={scrollRef} className="flex overflow-x-scroll no-scrollbar" onMouseMove={(e)=>handleMove(e)}>
{
    !selectOnlyVideos && <div className="  flex flex-row "> <CustomShimmerBox value={5} /></div>
}

    {
    
    selectSkipVideo && selectOnlyVideos
            .filter((item) =>{
               //if their is no live so it willskip most latest video
                if(item.id.videoId !== selectSkipVideo.id.videoId && item.snippet.liveBroadcastContent !== "upcoming" && item.snippet.liveBroadcastContent !== "live"  ){
                   return item
                }
                
                })
            .slice(0, 11)
            .map((card,index) => {
                return (
                 <Link to={`/latestVideo/${card.id.videoId}`} key={card.id.videoId} onClick={()=>dispatch(addVideoDescData(card))}>  
                  <div className="">
                     <div className=" w-96 m-2 rounded-2xl relative">
                        <div className="   absolute top-1/2 text-white z-40 left-1/3 right-1/3 animate-spin-outline bg-red-500 w-10 rounded-xl m-auto"><Play className="ml-1" size={35} /></div>
                     <img className="sm:hover:bg-black sm:hover:opacity-80 "
                            style={{borderRadius:"10%"}}
                            src={card.snippet.thumbnails.high.url}
                            alt={card.snippet.title}
                             
                           
                            // Ensure the image fills the container
                        /></div>   
                    </div></Link>
                );
            })


        }

</div>


{
selectOnlyVideos && <button onClick={handleScrollRight} className="hidden sm:block"><CaretRightFill size={50}/> </button>
}

</div>
        </>
    )
}

export default VideoList