





import { useSelector,useDispatch } from "react-redux"
import {useEffect,useState,useRef} from "react"
import { useParams ,Link} from "react-router-dom";
import { storeDataTorefreshPage } from "../helper";
import YouTube from "react-youtube";
import { addiframeVideo } from "../utils/generalSlice";
import {  ArrowUp, CaretDownFill,XCircle } from "react-bootstrap-icons";
import Header from "./Header";
//import Frame from "./Frame";
//import { useSelector } from "react-redux";
const Shorts=()=>{
       const {id} =useParams()
    const selectDataShorts=useSelector((store)=>store.dataSliced.allShorts)
    const selectIframestatus=useSelector((store)=>store.generalData.iframeVideo)
const [shortsAdd,setAdd] = useState()
const [indicate,setIndicate] = useState()
const scrollRef=useRef()
const dispatch=useDispatch()

//console.log(id)


useEffect(()=>{



dispatch(addiframeVideo(true))
setAdd(()=>{
    if(!selectDataShorts) return null
   const arr=   selectDataShorts.filter((item)=>{
        return item.snippet.resourceId.videoId !== id
      })
        
        //item2.snippet.resourceId.videoId
        arr.unshift({snippet:{resourceId:{videoId:id}}})
    
        return arr
     })

selectDataShorts && storeDataTorefreshPage( selectDataShorts,"shorts")



 if(!selectDataShorts){
        // console.log("kk")
            setAdd(()=>{
                   let data =JSON.parse(localStorage.getItem("shorts")) 
                   return data
            })
          }



},[])

   useEffect(()=>{

    
 const iframes = document.querySelectorAll("iframe");
// console.log(iframes,"iframes")
   const observerOptions = {
       root: null, // viewport
       rootMargin: '0px',
       threshold: 0.5 // 50% visibility
   };
   
   const observer = new IntersectionObserver(entries => {
   
       entries.forEach(entry => {
           const iframe = entry.target;
           if (iframe.contentWindow) {
               if (entry.isIntersecting) {
                   //sending mesagge to window iframe content to play video by using postmessage
                   iframe.contentWindow.postMessage('{"event":"command","func":"playVideo","args":""}', '*');
               } else {
                   iframe.contentWindow.postMessage('{"event":"command","func":"pauseVideo","args":""}', '*');
               }
           }
       });
   }, observerOptions);
   
   //apllied toevery iframe video so that when it come to viewport then perfrom the further actions
   iframes.forEach(iframe => {
       observer.observe(iframe);
   });
   
   },[selectIframestatus])
    


  function handleScrollUp(e){
const refValue = scrollRef.current;
refValue.scrollBy(0,-0);
    console.log(refValue.scrollBy)
 
} 





  const onReady = (event) => {
  //  console.log('Video is ready to play.');
    // You can perform additional actions here when the video is ready
    dispatch(addiframeVideo(null))
    console.log("event")
  };



  const onError = (event) => {
    console.error('An error occurred:', event.data);
    setIndicate(true)
    // 
   // dispatch(addiframeVideo("something went wrong refershpage"))
  }
/* listType: 'playlist',
        list:id,
        playlist:id, */
  const opts = {
   
   /* playerVars: {
       
        autoplay: 0,
        loop: 1,
       
      } */
        playerVars: {
          // Hide video title and related video info
              modestbranding: 1, // Reduces YouTube branding
                autoPlay:0,
                mute: 0,
                rel:0,
                controls:1,
            },
    
    
    
    }
 


    const onEnd = (event) => {
      event.target.seekTo(0); // Seek to the beginning of the video
    }; 

const onPlay=(event)=>{
  dispatch(addiframeVideo(null))
}

const getElement=document.querySelector(".reelsContainer")

if(getElement){
console.log(getElement)
getElement.focus() 
}

return(
    <>

    <Header hideTopUp={"hidden"}/>
 


 { selectIframestatus && <div className=" z-[1000] relative flex justify-center flex-row "><div className="loader  absolute">   </div>   <span className="z-[300]" onClick={()=>dispatch(addiframeVideo(null))}> <XCircle size={28}/></span>  </div>}

{indicate && <p className="text-red-600 z-[1000]">something went wrong please Refresh page</p>}

 <button className=" hidden  bg-red-500 text-white absolute h-6 right-0 top-1/2  " onClick={(e)=>{handleScrollUp(e)}}><CaretDownFill color="white" size={40}/></button>

    <div style={{display:"flex",justifyContent:"center" ,flexDirection:"row"}} className="bg-black h-full sm:p-7">


    
{
  //this contrlling all s
}
    <div  ref={scrollRef}  className="reelsContainer bg-black w-[1500px]">
   

{
    shortsAdd&& shortsAdd.slice(0,9).map((item2,index) => {
       
    // console.log(item2.snippet.resourceId.videoId)
    
  




return(
   
< div tabindex={index} className=" sm:w-1/2 lg:w-1/3 sm:m-auto">

<YouTube key={item2.snippet.resourceId.videoId}  className="reels"    videoId={item2.snippet.resourceId.videoId}
  opts={opts}
  onReady={onReady}
  onEnd={onEnd}
  onError={onError}
  onPlay={onPlay}
/>

</div>

)

    })
}






 </div> 

<button className="  text-white absolute h-6 left-1/3 top-1/2   hidden " ><ArrowUp size={40} color="white"/></button>

 </div>
</>
    
)


}

export default Shorts

