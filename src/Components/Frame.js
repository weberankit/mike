

//import { useRef, useEffect } from "react";
import YouTube from "react-youtube";
import { addiframeVideo } from "../utils/generalSlice";
import { useSelector,useDispatch } from "react-redux";
const Frame = ({id}) => {
  const dispatch =useDispatch()
  dispatch(addiframeVideo("loading video ....."))
  console.log(id)
  const selectIframestatus=useSelector((store)=>store.generalData.iframeVideo)
  const onReady = (event) => {
    console.log('Video is ready to play.');
    // You can perform additional actions here when the video is ready
    dispatch(addiframeVideo(null))
  };



  const onError = (event) => {
    console.error('An error occurred:', event.data);
    // 
    dispatch(addiframeVideo("something went wrong refershpage"))
  }

  const opts = {
   
    playerVars: {
       /* listType: 'playlist',
        list:id,
        playlist:id, */
        autoplay: 0,
        loop: 1,
       
      } 
      
  };
return(

<YouTube className="reels"   videoId={id}
  opts={opts}
  onReady={onReady}
 iframeClassName="no-fullscreen"
  onError={onError}
/>

)
 
};

export default Frame;