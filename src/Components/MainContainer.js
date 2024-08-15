import Footer from "./Footer"
import ShortsContainer from "./ShortsContainer"
import TopView from "./TopView"
import VideoList from "./VideoList"
const MainContainer=()=>{
    return(
        <main>
        <TopView/>
      <div className="mt-8"> <VideoList/></div> 
      <div className="mt-12"> <ShortsContainer/></div> 

      <div><Footer/></div>
        </main>
    )
}

export default MainContainer