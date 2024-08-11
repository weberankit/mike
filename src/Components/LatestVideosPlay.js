import { useState,useEffect } from "react"
import { useParams ,useNavigate} from "react-router-dom"
import { useSelector,useDispatch } from "react-redux"
import { addVideoDescData } from "../utils/generalSlice"
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
//console.log(selectDescData)
const slectError=useSelector((store)=>store.generalData.ErrorData)
//using this if local stoarge is full and user refersh page so we will naviagte them to home page
useEffect(()=>{
    if (performance.navigation.type === 1 && !selectOnlyVideos) {
        alert("your browser storage is full so moving to home page")
        navigate("/")
      }
},[])

    return(
        <>
        {slectError && slectError}
     <div >
     <iframe 
    className=" aspect-video bg-black"
   key={idValue}
     //width="400"
    
     src={"https://www.youtube.com/embed/"+idValue+"?autoplay=0&mute=1"}
      title="YouTube video player" 
     frameBorder="0" 
     allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
     allowFullScreen
     autoplay
     >

    </iframe>
    {selectDescData&&selectDescData?.snippet?.title}
    {selectDescData&& selectDescData?.snippet?.description}
</div>


<div>

{
    selectOnlyVideos&&selectOnlyVideos.map((item)=>{
        //skip the playinf video
        if(item.id.videoId !== idValue){
        return(
            <div onClick={()=>{setIdValue(item.id.videoId);dispatch(addVideoDescData(item)); scroll()}}  key={item.id.videoId}>
                
            <img key={item.snippet.thumbnails.high.url}   src={item.snippet.thumbnails.high.url}
                            alt={item.snippet.title}></img>
            </div>
        )}
    })
}
</div>




        </>
    )
}

export default LatestVideosPlay