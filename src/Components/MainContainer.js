import ShortsContainer from "./ShortsContainer"
import TopView from "./TopView"
import VideoList from "./VideoList"
const MainContainer=()=>{
    return(
        <>
        <TopView/>
      <div className="mt-6"> <VideoList/></div> 
        <ShortsContainer/>
        </>
    )
}

export default MainContainer