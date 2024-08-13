





import { useSelector,useDispatch } from "react-redux"
import {useEffect,useState,useRef} from "react"
import { useParams ,Link} from "react-router-dom";
import { storeDataTorefreshPage } from "../helper";
import YouTube from "react-youtube";
import { addiframeVideo } from "../utils/generalSlice";
import { XCircle } from "react-bootstrap-icons";
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



dispatch(addiframeVideo("loading video ..... wait"))
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
                   
                   iframe.contentWindow.postMessage('{"event":"command","func":"playVideo","args":""}', '*');
               } else {
                   iframe.contentWindow.postMessage('{"event":"command","func":"pauseVideo","args":""}', '*');
               }
           }
       });
   }, observerOptions);
   
   iframes.forEach(iframe => {
       observer.observe(iframe);
   });
   
   },[selectIframestatus])
    
  function handleScrollUp(){

  

    const refValue = scrollRef.current;
    refValue.scrollBy(0,50)
//    console.log(refValue)

  } 
  function handleScrollDown(){
    const refValue=scrollRef.current
    refValue.scrollBy(0,-50)
  } 


  const onReady = (event) => {
  //  console.log('Video is ready to play.');
    // You can perform additional actions here when the video is ready
    dispatch(addiframeVideo(null))
    console.log("event")
  };



  const onError = (event) => {
    console.error('An error occurred:', event.data);
    // 
    dispatch(addiframeVideo("something went wrong refershpage"))
  }
/* listType: 'playlist',
        list:id,
        playlist:id, */
  const opts = {
   
    playerVars: {
       
        autoplay: 0,
        loop: 1,
       
      } }
 










return(
    <>

    <Header hideTopUp={"hidden"}/>
  <Link to={"/"}>  <span className="bg-white absolute top-9"><button>Home</button></span> </Link> 
 {selectIframestatus && <div className="bg-white p-2 fixed top-12">{selectIframestatus} <div onClick={()=>dispatch(addiframeVideo(null))}> <XCircle/></div></div>}




    <div style={{display:"flex",justifyContent:"center" ,flexDirection:"row"}} className="bg-black h-full p-7">
 <button className="bg-white text-black absolute h-6 right-0 top-1/2  " onClick={()=>{handleScrollUp()}}>scrollDown</button>
    

    <div ref={scrollRef}  className="reelsContainer bg-blue-500">
   

{
    shortsAdd&& shortsAdd.slice(0,9).map(item2 => {
       
    // console.log(item2.snippet.resourceId.videoId)
    
  




return(
   

<YouTube key={item2.snippet.resourceId.videoId} className="reels"   videoId={item2.snippet.resourceId.videoId}
  opts={opts}
  onReady={onReady}
 
  onError={onError}
/>
)

    })
}






 </div> 

<button className="bg-white text-black absolute h-6 left-0 top-1/2  " onClick={()=>{handleScrollDown()}}>scrollUp</button>

 </div>
</>
    
)


}

export default Shorts

