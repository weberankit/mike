import { useSelector ,useDispatch} from "react-redux"
import { useRef } from "react"
import useFilterVideo from "../utils/useFilterVideo"
import { Link } from "react-router-dom"
import { addVideoDescData } from "../utils/generalSlice"
import { storeDataTorefreshPage } from "../helper"
const VideoList=()=>{
   // const selectDatavideo=useSelector((store)=>store.dataSliced.allVideos)
   const selectSkipVideo=useSelector((store)=>store.generalData. videoSkip)
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
   containerToMove.scrollLeft+=e.movementX
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
          <div  
      
          className="flex flex-row"
           >
<button onClick={handleScrollLeft} className="">scrollLeft </button>




    <div ref={scrollRef} className="flex overflow-x-scroll no-scrollbar" onMouseMove={(e)=>handleMove(e)}>

    {

    selectOnlyVideos && selectOnlyVideos
            .filter((item) =>{
               
                if(item.id.videoId !== selectSkipVideo.id.videoId ){
                   return item
                }
                
                })
            .slice(0, 11)
            .map((card) => {
                return (
                 <Link to={`/latestVideo/${card.id.videoId}`} key={card.id.videoId} onClick={()=>dispatch(addVideoDescData(card))}>   <div className="flex-shrink-0 w-96 p-2">
                        <img
                            className="border border-black object-cover"
                            src={card.snippet.thumbnails.high.url}
                            alt={card.snippet.title}
                            style={{ width: '100%', height: 'auto' }} // Ensure the image fills the container
                        />
                    </div></Link>
                );
            })
        }

</div>
<button onClick={handleScrollRight} className="">sscrollright </button>
</div>
        </>
    )
}

export default VideoList