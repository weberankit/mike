import { useSelector } from "react-redux"
import { useEffect } from "react"
import { useDispatch } from "react-redux"
import { addOnlyVideos } from "./dataSlice"
const useFilterVideo=()=>{
    const selectDatavideo=useSelector((store)=>store.dataSliced.allVideos)
    const selectDataShorts=useSelector((store)=>store.dataSliced.allShorts)
    const selectOnlyVideos=useSelector((store)=>store.dataSliced.onlyVideos)
    const dispatch=useDispatch()


useEffect(()=>{
if(selectDatavideo && selectDataShorts){
const filterData= selectDatavideo.filter(item1=>{
    return !selectDataShorts.some((item2) => item1.id.videoId === item2.snippet.resourceId.videoId)
})
//prevent from calll when unmount
if(!selectOnlyVideos){
dispatch(addOnlyVideos(filterData))
}

console.log(filterData)
}
},[selectDataShorts,selectDatavideo])



}





export default useFilterVideo